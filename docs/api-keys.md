---
id: api-keys
slug: /settings/api-keys
title: API Keys
description: Create and copy your merchant API key from the MawarPay portal for use as the X-API-KEY header.
sidebar_position: 1
displayed_sidebar: tutorialSidebar
---

# API Keys

API v1 requests send your merchant API key in the `X-API-KEY` header together with a Bearer token from [Login](/docs/auth/login-v1). Create that key in the merchant portal, then copy it into server-side config.

:::warning[Keep credentials server-side]
Copy a new key immediately. The full value is shown once. Never embed API keys in client-side or mobile apps.
:::

## Get an API key from the portal

1. Sign in at [portal.mawarpay.com](https://portal.mawarpay.com).
2. Open the **Merchants** menu.
3. Click a merchant name in the list to open merchant detail.
4. Open the **API Keys** tab.
5. Click **Create API key** (callout **1**).
6. Fill the create form, then click **Create**.
7. Copy the new key from the green banner right away — it is not shown in full again.
8. For an existing key, use **Copy** on the key row (callout **2**). Use **Reveal** only when you need to confirm the suffix.

## Create API key form

Clicking **Create API key** opens this form:

![Create API key form](/img/api-key-form.png)

| Field | Required | What to enter |
|---|---|---|
| Name | Yes | Label for this key, for example `Production key` or `base`. |
| Scopes (permissions) | Yes | Check the permissions this key needs. The list is scrollable. |
| Expires at | No | Optional date and time. Leave empty for no expiry. |

Visible scopes include `read`, `write`, `transactions:read`, `transactions:write`, and `merchants:read`. Scroll the list for the rest, and only enable what your integration needs.

Click **Create** to issue the key, or **Cancel** to close the form without creating one.

## After you create a key

The **API Keys** tab shows the new key, recent activity, and the key list:

![API Keys tab in Merchant Detail](/img/api-key.png)

| Area | Description |
|---|---|
| Green banner | Full key after create. Copy it now — it will not be shown again. |
| Recent API key activity | Log of key events, for example `Created`. |
| Key | Masked key with **Reveal** and **Copy** |
| Name | Label you set in the create form |
| Created | When the key was issued |
| Last used | Last successful API use, or `—` if unused |
| Status | Toggle to enable or disable the key without revoking it |
| Actions | **Revoke** permanently invalidates the key |

## Use the key in API requests

Send the copied value as `X-API-KEY` on protected endpoints. See [Headers](/docs/headers-v1).

```http
Authorization: Bearer <accessToken>
X-API-KEY: <apiKey>
```

```bash
curl --location 'https://sandbox.mawarpay.com/api/v1/example' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {token}' \
  --header 'X-API-KEY: {apiKey}'
```

## Next dashboard settings

After the API key is saved on your server, open **Webhook Settings** and **IP Whitelist** on the same merchant detail page. See [Webhooks](/docs/webhooks-v1) and [API Client IP Allowlist](/docs/settings/ip-allowlist).
