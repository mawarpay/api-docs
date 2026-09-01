---
id: webhooks
slug: /webhooks-v1
title: Webhooks
description: Receive real-time transaction notifications, verify HMAC signatures, and handle payment and withdrawal events for API v1.
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

MawarPay delivers real-time HTTP notifications to your server when payment or withdrawal status changes. Use webhooks to update orders, trigger fulfillment, and reconcile transactions without polling.

Create your `X-API-KEY` first in [API Keys](/docs/settings/api-keys), then configure your endpoint under **Webhook Settings** on the same merchant.

---

## 1. Overview

### What is a webhook?

A webhook is an HTTP callback. When a transaction status changes on MawarPay, our webhook service sends a `POST` request to your configured HTTPS endpoint with a JSON payload describing the event.

### Why use webhooks?

| Benefit | Description |
|---------|-------------|
| Real-time updates | Your system is notified as soon as a status changes, without polling. |
| Lower API load | You do not need to repeatedly call [Check Transaction Status](/docs/transactions/check-status). |
| Reliable reconciliation | Combine `trxId` and `trxReference` to match events with your internal records. |
| Automation | Trigger order fulfillment, notifications, or ledger updates immediately. |

### Supported transaction types

MawarPay sends webhook events for:

| Transaction type | Event name |
|------------------|------------|
| QRIS payment | `receivePayment` |
| Virtual Account payment | `receiveVirtualAccountPayment` |
| Withdrawal (payout) | `withdraw` |

### Webhook lifecycle

```
Transaction Updated
        |
        v
MawarPay Webhook Service
        |
        v
Merchant Endpoint
        |
        v
Verify Signature
        |
        v
Process Event
```

When a transaction reaches a new status, MawarPay serializes the event as JSON, signs the raw request body with your webhook secret, and delivers it to your endpoint. Your server must verify the signature, process the event, and return `HTTP 200 OK`.

---

## 2. Quick Start

Follow these steps to receive your first webhook in about five minutes.

1. **Create an HTTPS webhook endpoint** — Expose a `POST` route on your server that accepts JSON. Use HTTPS in production.
2. **Configure the webhook URL in the Merchant Dashboard** — Go to **Merchants → Merchant Detail → Webhook Settings** and enter your endpoint URL.
3. **Store the webhook secret securely** — Copy the secret from the dashboard and save it in server-side configuration (environment variables or a secrets manager). Never expose it in client-side code.
4. **Implement signature verification** — Validate the `x-signature` header against the raw request body before parsing JSON. See [Security](#5-security).
5. **Test webhook delivery** — Use **Send Test Webhook** in the dashboard to confirm your handler receives and verifies events.
6. **Return an HTTP 200 response** — Respond quickly with a success status so MawarPay marks the delivery as accepted.

![Webhook Settings in Merchant Detail](/img/webhook-v2.png)

---

## 3. Webhook Configuration

Configure webhooks on **Merchants → Merchant Detail → Webhook Settings**:

| Setting | Description |
|---------|-------------|
| Webhook endpoint URL | HTTPS URL that receives transaction events. The dashboard validates the URL format. |
| Enable webhook | Turn on to deliver events. Turn off to pause all deliveries without removing your URL. |
| Verify SSL | Keep enabled for production HTTPS endpoints. Disable only for local development with self-signed certificates. |
| Webhook secret | Use **Reveal**, **Copy**, or **Regenerate**. This secret is used to sign every webhook request. |
| Save Settings | Persist your endpoint URL, toggles, and secret. |
| Send Test Webhook | Send a sample event to your endpoint so you can verify signature handling before going live. |

Store the webhook secret in server-side config (not in the browser). Use it in [Signature Verification](#signature-verification).

---

## 4. Webhook Request Specification

Every webhook delivery is an HTTP `POST` with a JSON body.

| Property | Value |
|----------|-------|
| HTTP method | `POST` |
| Content-Type | `application/json` |

### Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Content-Type` | Yes | Request format. Always `application/json`. |
| `x-signature` | Yes | HMAC-SHA256 signature of the raw request body. See [Security](#5-security). |

### Payload structure

All events share a common envelope:

| Field | Type | Description |
|-------|------|-------------|
| `event` | string | Event type identifier (for example `receivePayment`). |
| `data` | object | Transaction details. Fields vary by event type. |
| `message` | string | Human-readable summary of the event. |
| `status` | string | Transaction status at the time of the event (present on payment events). |
| `timestamp` | integer | Unix timestamp when the event was generated. |

---

## 5. Security

Always verify webhook signatures to ensure requests originate from MawarPay and have not been tampered with.

| Property | Value |
|----------|-------|
| Signature algorithm | HMAC-SHA256 |
| Input | Raw HTTP request body (bytes as received) |
| Secret | Webhook secret from **Merchant Dashboard → Webhook Settings** |
| Header | `x-signature` |

:::warning[Verify before parsing JSON]
Always verify the signature using the **raw request body** before JSON parsing. Re-serializing parsed JSON (for example with `JSON.stringify`) can change byte order or whitespace and cause signature mismatches.
:::

<a id="signature-verification"></a>

### Signature verification examples

<Tabs groupId="webhook-language" defaultValue="php" values={[
    { label: 'PHP (Laravel)', value: 'php' },
    { label: 'Node.js', value: 'node' },
    { label: 'Python (Django)', value: 'python' },
]}>

<TabItem value="php">

```php
<?php
// Laravel Webhook Handler
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentGatewayWebhookController extends Controller
{
    public function handle(Request $request): JsonResponse
    {
        $signature = $request->header('x-signature');
        $secret = config('payment_gateway.webhook_secret');

        if (!$this->verifySignature($request->getContent(), $signature, $secret)) {
            Log::warning('Webhook signature verification failed');
            return response()->json(['error' => 'Invalid signature'], 401);
        }

        $payload = $request->json()->all();
        return $this->handleWebhook($payload);
    }

    private function verifySignature(string $payload, ?string $signature, string $secret): bool
    {
        if (empty($signature)) {
            return false;
        }

        $expectedSignature = hash_hmac('sha256', $payload, $secret);
        return hash_equals($expectedSignature, $signature);
    }

    private function handleWebhook(array $payload): JsonResponse
    {
        Log::info('Processing webhook', $payload);

        // Your logic here
        // Fulfill orders, send confirmation emails, etc.

        return response()->json(['status' => 'processed']);
    }
}
```

</TabItem>

<TabItem value="node">

```javascript
const crypto = require('crypto');
const express = require('express');

const app = express();
app.use(express.json());

app.post('/api/webhooks', async (req, res) => {
    const signature = req.headers['x-signature'];
    const secret = process.env.WEBHOOK_SECRET;

    if (!verifySignature(JSON.stringify(req.body), signature, secret)) {
        console.warn('Webhook signature verification failed');
        return res.status(401).json({ error: 'Invalid signature' });
    }

    const payload = req.body;

    try {
        await handleWebhook(payload);
        res.json({ status: 'processed' });
    } catch (error) {
        console.error('Webhook processing error:', error);
        res.status(500).json({ error: 'Processing failed' });
    }
});

function verifySignature(payload, signature, secret) {
    if (!signature || !secret) {
        return false;
    }

    const expectedSignature = 'sha256=' + crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(signature)
    );
}

async function handleWebhook(payload) {
    console.log('Processing webhook:', payload);

    // Your logic here
    // Fulfill orders, send confirmation emails, etc.
}
```

:::tip[Use the raw request body in production]
For production, read the raw body before JSON parsing (for example with `express.raw({ type: 'application/json' })`) and pass those bytes to `verifySignature`. The example above uses `JSON.stringify(req.body)` for illustration.
:::

</TabItem>

<TabItem value="python">

```python
import hmac
import hashlib
import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

logger = logging.getLogger(__name__)

@csrf_exempt
@require_http_methods(["POST"])
def webhook(request):
    signature = request.headers.get('x-signature', '')
    secret = get_secret_key()

    if not verify_signature(request.body, signature, secret):
        logger.warning('Webhook signature verification failed')
        return JsonResponse({'error': 'Invalid signature'}, status=401)

    try:
        payload = json.loads(request.body)
        handle_webhook(payload)
        return JsonResponse({'status': 'processed'})

    except Exception as exc:
        logger.error('Webhook processing error: %s', exc)
        return JsonResponse({'error': 'Processing failed'}, status=500)

def get_secret_key():
    from django.conf import settings
    return settings.WEBHOOK_SECRET

def verify_signature(payload, signature, secret):
    if not signature or not secret:
        return False

    expected_signature = 'sha256=' + hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(expected_signature, signature)

def handle_webhook(payload):
    logger.info('Processing webhook', extra={'payload': payload})

    # Your logic here
    # Fulfill orders, send confirmation emails, etc.
```

</TabItem>

</Tabs>

---

## 6. Webhook Events

Each event type has its own payload shape inside the `data` object.

### Event: `receivePayment`

Sent when a QRIS payment status is updated.

#### Payload schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event` | string | Yes | Always `receivePayment`. |
| `data.trxId` | string | Yes | MawarPay transaction identifier. |
| `data.trxReference` | string | Yes | Merchant-provided reference from the original request. |
| `data.rrn` | string | Yes | Retrieval Reference Number for the QRIS payment. |
| `data.amount` | string | Yes | Payment amount (decimal string). |
| `data.currencyCode` | string | Yes | Currency code (for example `IDR`). |
| `data.description` | string | Yes | Payment description. |
| `data.customerName` | string | Yes | Customer name. |
| `data.customerEmail` | string | Yes | Customer email address. |
| `data.customerPhone` | string | Yes | Customer phone number. |
| `data.merchantId` | integer | Yes | Merchant identifier. |
| `data.merchantName` | string | Yes | Merchant display name. |
| `data.paymentMethod` | string | Yes | Always `QRIS` for this event. |
| `message` | string | Yes | Human-readable event summary. |
| `status` | string | Yes | Current transaction status (for example `completed`). |
| `timestamp` | integer | Yes | Unix timestamp of the event. |

#### Example

```json
{
  "event": "receivePayment",
  "data": {
    "trxId": "TRXJ0LFYU8CAT",
    "trxReference": "37c84bdb-e6b7-4893-9b02-e4931d90cdce",
    "rrn": "fb96da8d931c",
    "amount": "1000.00",
    "currencyCode": "IDR",
    "description": "Receive Payment from QRIS",
    "customerName": "John Doe",
    "customerEmail": "john@doe.com",
    "customerPhone": "62323232222",
    "merchantId": 1,
    "merchantName": "Demo Brand",
    "paymentMethod": "QRIS"
  },
  "message": "Receive Payment via QRIS",
  "status": "completed",
  "timestamp": 1762927877
}
```

---

### Event: `receiveVirtualAccountPayment`

Sent when a Virtual Account payment status is updated.

#### Payload schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event` | string | Yes | Always `receiveVirtualAccountPayment`. |
| `data.trxId` | string | Yes | MawarPay transaction identifier. |
| `data.trxReference` | string | Yes | Merchant-provided reference from the original request. |
| `data.vaCode` | string | Yes | Virtual Account number assigned to the payment. |
| `data.amount` | string | Yes | Payment amount (decimal string). |
| `data.currencyCode` | string | Yes | Currency code (for example `IDR`). |
| `data.description` | string | Yes | Payment description. |
| `data.customerName` | string | Yes | Customer name (may be empty). |
| `data.customerEmail` | string | Yes | Customer email (may be empty). |
| `data.customerPhone` | string | Yes | Customer phone (may be empty). |
| `data.merchantId` | integer | Yes | Merchant identifier. |
| `data.merchantName` | string | Yes | Merchant display name. |
| `data.paymentMethod` | string | Yes | Always `VIRTUAL_ACCOUNT` for this event. |
| `message` | string | Yes | Human-readable event summary. |
| `status` | string | Yes | Current transaction status (for example `expired`). |
| `timestamp` | integer | Yes | Unix timestamp of the event. |

#### Example

```json
{
  "event": "receiveVirtualAccountPayment",
  "data": {
    "trxId": "TRXVA39CVH0SOFGDK808XIIQ8",
    "trxReference": "57c4db72-96d0-4442-a2cb-25be291a409e",
    "vaCode": "9999992006674170",
    "amount": "10000.00",
    "currencyCode": "IDR",
    "description": "Virtual Account",
    "customerName": "",
    "customerEmail": "",
    "customerPhone": "",
    "merchantId": 3,
    "merchantName": "Demo Brand Baru",
    "paymentMethod": "VIRTUAL_ACCOUNT"
  },
  "message": "Receive Virtual Account payment via Demo Brand Baru",
  "status": "expired",
  "timestamp": 1778697331
}
```

---

### Event: `withdraw`

Sent when a withdrawal (payout) status is updated.

#### Payload schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `event` | string | Yes | Always `withdraw`. |
| `data.trxId` | string | Yes | MawarPay transaction identifier. |
| `data.trxReference` | string | Yes | Merchant-provided reference from the original request. |
| `data.amount` | integer | Yes | Withdrawal amount. |
| `data.netAmount` | integer | Yes | Net amount after fees. |
| `data.payableAmount` | integer | Yes | Total payable amount including fees. |
| `data.currencyCode` | string | Yes | Currency code (for example `IDR`). |
| `data.status` | string | Yes | Current withdrawal status (for example `completed`). |
| `data.description` | string | Yes | Withdrawal description. |
| `data.merchantId` | integer | Yes | Merchant identifier. |
| `data.merchantName` | string | Yes | Merchant display name. |
| `data.withdrawalMethod` | string | Yes | Withdrawal method (for example `Bank Transfer`). |
| `data.accountName` | string | Yes | Account name. |
| `data.accountHolderName` | string | Yes | Account holder name. |
| `data.accountBankName` | string | Yes | Bank name. |
| `data.accountNumber` | string | Yes | Bank account number. |
| `data.accountBankCode` | string | Yes | Bank code. |
| `data.trxFee` | integer | Yes | Transaction fee amount. |
| `data.remarks` | string | Yes | Additional remarks from the processing partner. |
| `data.environment` | string | Yes | Environment identifier (for example `production`). |
| `data.isSandbox` | boolean | Yes | Whether the transaction is in sandbox mode. |
| `message` | string | Yes | Human-readable event summary. |
| `timestamp` | integer | Yes | Unix timestamp of the event. |

#### Example

```json
{
  "event": "withdraw",
  "data": {
    "trxId": "TRX-2025.11.14-1-BDH2JD8NNY170XO",
    "trxReference": "95a190c6-ee73-488b-a386-382310f2d0c1",
    "amount": 50000,
    "netAmount": 50000,
    "payableAmount": 54000,
    "currencyCode": "IDR",
    "status": "completed",
    "description": "Withdrawal request is completed by Bank Partner",
    "merchantId": 1,
    "merchantName": "Demo Brand",
    "withdrawalMethod": "Bank Transfer",
    "accountName": "John Doe",
    "accountHolderName": "John Doe",
    "accountBankName": "John Doe",
    "accountNumber": "123456789",
    "accountBankCode": "01",
    "trxFee": 2000,
    "remarks": "Withdrawal request is completed by Financial Institution",
    "environment": "production",
    "isSandbox": false
  },
  "message": "Withdrawal request is completed by Financial Institution",
  "timestamp": 1763101871
}
```

---

## 7. Transaction Status Reference

The `status` field in webhook payloads reflects the transaction state at the time of delivery. Status values depend on the payment channel and flow.

These values can appear in webhook payloads, [Check Transaction Status](/docs/transactions/check-status) responses, and the sandbox [Set Transaction Status](/docs/set-status-v1) API:

| Status | Description |
|--------|-------------|
| `pending` | Awaiting payer action or initial processing. |
| `awaiting_fi_process` | Withdrawal awaiting processing by the financial institution. |
| `awaiting_pg_process` | Withdrawal queued at the payment gateway. |
| `awaiting_user_action` | Merchant or customer action required. |
| `awaiting_admin_approval` | Waiting for administrator approval. |
| `completed` | Transaction successfully finalized. |
| `canceled` | Canceled by user or system. |
| `failed` | Terminated with an error. |
| `refunded` | Funds returned after completion or reversal (withdrawals). |
| `expired` | Payment session or validity window elapsed. |

Common transitions:

- **Pay-in (QRIS, Virtual Account):** `pending` → `completed` (if paid) or `expired` / `failed` (if not paid)
- **Payout (withdrawal):** `pending` → `completed` or `failed` → `refunded` (if applicable)

For withdrawal-specific processing states, see [Create Withdrawal — Available withdraw status](/docs/withdraw#available-withdraw-status).

---

## 8. Retry Policy

MawarPay retries webhook deliveries when your endpoint does not accept the event. Retries help ensure your system receives status updates even during brief outages or deployments.

| Detail | Behavior |
|--------|----------|
| Maximum attempts | Up to **5** retries |
| Backoff strategy | Exponential backoff between attempts |
| Trigger | Any response other than a successful acceptance |

### HTTP response behavior

| HTTP response | MawarPay behavior |
|---------------|-------------------|
| `200` | Delivery accepted. No further retries for this attempt. |
| `4xx` | Delivery not accepted. MawarPay retries with exponential backoff. |
| `5xx` | Delivery not accepted. MawarPay retries with exponential backoff. |

:::note[Reliable Delivery]
MawarPay retries failed webhook deliveries up to 5 times using exponential backoff.
:::

Return `HTTP 200 OK` as soon as you have verified the signature and queued the event for processing. Do not perform heavy work before responding.

---

## 9. Webhook Response Handling

Your endpoint must respond to every webhook delivery.

### Expected response

| Property | Value |
|----------|-------|
| HTTP status | `200 OK` |
| Body | Optional JSON acknowledgment |

Example:

```json
{
  "status": "received"
}
```

Your handler may return any simple JSON body (for example `{"status": "processed"}`) as long as the HTTP status is `200`.

### Processing guidelines

- **Respond quickly** — Acknowledge the webhook within a few seconds. MawarPay treats non-`200` responses as failed deliveries.
- **Defer heavy work** — Queue order fulfillment, email notifications, and database writes to a background job after returning `200`.
- **Return errors only for verification failures** — If signature verification fails, return `401`. Avoid returning `5xx` for business-logic errors after the event is valid.

---

## 10. Duplicate Event Handling

Webhook delivery is **at-least-once**. The same event may be delivered more than once if a previous attempt timed out or your server returned a non-`200` status after processing began.

Use **`trxReference`** and **`trxId`** as unique identifiers to detect duplicates:

```
IF transaction already processed (trxId or trxReference exists):
    Ignore duplicate event
    Return HTTP 200 OK
ELSE:
    Process transaction
    Store trxId and trxReference
    Return HTTP 200 OK
```

Store processed transaction IDs in your database before returning `200`. This ensures retries do not cause double fulfillment or duplicate ledger entries.

---

## 11. Production Best Practices

| Practice | Why |
|----------|-----|
| Store webhook payloads | Keep an audit log of received events for debugging and reconciliation. |
| Log webhook delivery | Record timestamps, event types, and HTTP response codes. |
| Verify every signature | Reject unverified requests before processing. |
| Use idempotent processing | Check `trxId` / `trxReference` before applying business logic. |
| Process asynchronously | Return `200` immediately; handle fulfillment in background workers. |
| Do not expose the webhook secret | Keep the secret in server-side configuration only. |
| Use HTTPS | Required for production endpoints. Keep **Verify SSL** enabled unless testing locally. |
| Test before going live | Use **Send Test Webhook** to validate your handler end to end. |

---

## 12. Troubleshooting

### Webhook not received

| Check | Action |
|-------|--------|
| Endpoint uses HTTPS | MawarPay requires HTTPS for production webhook URLs. |
| Webhook is enabled | Confirm **Enable webhook** is turned on in the dashboard. |
| Firewall / network | Ensure your server accepts inbound `POST` requests from MawarPay. |
| SSL certificate | Keep **Verify SSL** enabled for valid certificates. Disable only for local self-signed certs. |
| Correct merchant | Verify the webhook URL is configured on the merchant that owns the transaction. |

### Invalid signature

| Check | Action |
|-------|--------|
| Correct secret | Use the webhook secret from **Webhook Settings**, not an API key. |
| Raw request body | Hash the exact bytes received — do not re-serialize parsed JSON. |
| Header name | Read the `x-signature` header (lowercase). |
| Secret rotation | If you regenerated the secret, update your server configuration. |

### Repeated retries

| Check | Action |
|-------|--------|
| Response status | Return `HTTP 200` after successful verification, even for duplicate events. |
| Response time | Respond within a few seconds. Move slow processing to a background queue. |
| Server errors | Fix unhandled exceptions that cause `5xx` responses before the acknowledgment is sent. |

---

## 13. Changelog

### v1.0.0

- Initial webhook release for API v1.
- Events: `receivePayment`, `receiveVirtualAccountPayment`, `withdraw`.
- HMAC-SHA256 signature verification via `x-signature` header.
- Dashboard configuration with test webhook delivery and retry policy (up to 5 attempts with exponential backoff).
