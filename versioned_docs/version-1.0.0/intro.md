---
id: intro
slug: /
title: Introduction
description: API v1 integration guide for authentication, pay-in, payout, and transaction monitoring.
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API Docs v1

Welcome to the MawarPay API v1 documentation. This guide provides everything needed to integrate secure, reliable payment workflows in web-based systems using RESTful APIs and JSON.

:::tip[Environment Separation]
Use `https://sandbox.mawarpay.com` for development/testing and `https://production.mawarpay.com` for live traffic. Keep credentials and tokens separated per environment.
:::

## Overview

API v1 is designed for backend-to-backend integrations with a focus on:

- Consistent JSON response structure
- Token-based authentication using JWT
- Predictable response code conventions
- Secure and scalable integration patterns

## Base URL

Use the base URL according to your environment:

- **Sandbox:** `https://sandbox.mawarpay.com`
- **Production:** `https://production.mawarpay.com`

All endpoint paths in this documentation are relative to the selected base URL.

## Quick Start by Use Case

<Tabs defaultValue="payin" values={[
  {label: 'Pay-in', value: 'payin'},
  {label: 'Payout', value: 'payout'},
  {label: 'Monitoring', value: 'monitoring'},
]}>
<TabItem value="payin">

1. Authenticate with [Login](/docs/auth/login-v1).
2. Create a payment using [Create QRIS](/docs/qris-create) or [Create Virtual Account](/docs/virtual-account-create).
3. Track status via [Check Transaction Status](/docs/transactions/check-status) or [Webhooks](/docs/webhooks-v1).

</TabItem>
<TabItem value="payout">

1. Authenticate with [Login](/docs/auth/login-v1).
2. Fetch destination metadata from [Banks List](/docs/banks/list-v1).
3. (Optional) Register destination using [Create Withdrawal Account](/docs/withdraw-account).
4. Submit payout with [Create Withdrawal](/docs/withdraw).

</TabItem>
<TabItem value="monitoring">

1. Persist `trxId` and `trxReference` for each transaction.
2. Poll [Check Transaction Status](/docs/transactions/check-status) on a safe interval.
3. Configure [Webhooks](/docs/webhooks-v1) for near real-time push updates.

</TabItem>
</Tabs>

## Authentication Model

API v1 uses bearer token authentication:

1. Authenticate via login endpoint to obtain `accessToken`
2. Send token in request header for protected endpoints:

```http
Authorization: Bearer <accessToken>
```

3. Refresh token before expiration (if refresh flow is enabled in your implementation)

## Request and Response Standards

### Request Standards

- Use `Content-Type: application/json` for JSON payloads
- Use `Accept: application/json` to receive JSON responses
- Validate all required fields before sending requests

### Response Standards

Responses are returned in structured JSON:

```json
{
  "code": 2000107,
  "message": "Login successful",
  "data": {}
}
```

- `code`: Composite application code (HTTP + service + case)
- `message`: Human-readable result
- `data`: Payload for successful operations
- `errors`: Optional validation details for invalid requests

## Getting Started

Recommended integration order:

1. Create an [API key](/docs/settings/api-keys) in the merchant portal
2. Configure [Webhook Settings](/docs/webhooks-v1) for status push updates
3. Allow your server IPs in [API Client IP Allowlist](/docs/settings/ip-allowlist)
4. Implement authentication (`Login`)
5. Integrate master data endpoints (`Banks List`, `Wallets List`)
6. Add pay-in and payout flows, and keep [Check Transaction Status](/docs/transactions/check-status) as a fallback

:::note[Documentation Scope]
This documentation set is for API v1. For predictable behavior, always validate integration logic against the v1 response code and status conventions.
:::

## Security Best Practices

- Always use HTTPS in non-local environments
- Store API credentials and tokens in secure server-side storage
- Never expose secrets in browser code or logs
- Restrict API access with the [API Client IP Allowlist](/docs/settings/ip-allowlist) on production merchants
- Apply rate limiting and monitoring on authentication endpoints
- Rotate secrets and revoke compromised tokens immediately

## Versioning and Compatibility

- This document set is for **API v1** only
- New additions should remain backward-compatible where possible
- Breaking changes should be released under a new major version

## Support

If you encounter integration issues, include request ID, endpoint, timestamp, and sanitized payload/response samples when contacting support.
