---
id: api-endpoints-v1
slug: /api-endpoints-v1
title: API Endpoints
description: Indexed view of API v1 endpoints by domain with standard request requirements.
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## API Endpoints

Use the following endpoint index to navigate API v1 operations.

:::tip[Use This Page as an Index]
Each linked endpoint page follows a consistent structure: overview, endpoint details, request, response, and reliability notes.
:::

## Endpoint Format Standard

All endpoints in this documentation follow this structure:

### Request

- Method: `GET` / `POST` / `PUT` / `DELETE`
- URL: endpoint path relative to selected base URL
- Headers:
  - `Authorization: Bearer {token}`
  - `Content-Type: application/json`
  - `X-API-KEY: {apiKey}`
- Body Parameters (if applicable):

| Field | Type | Required | Description |
|---|---|---|---|
| amount | number | yes | Transaction amount |
| reference | string | yes | Unique transaction reference |

## Endpoint Index

<Tabs defaultValue="auth" values={[
  {label: 'Authentication', value: 'auth'},
  {label: 'Pay-in', value: 'payin'},
  {label: 'Payout', value: 'payout'},
  {label: 'Monitoring', value: 'monitoring'},
  {label: 'Reference Data', value: 'reference'},
]}>
<TabItem value="auth">

- [Login](/docs/auth/login-v1)
- [Refresh Token](/docs/auth/refresh-v1)

</TabItem>
<TabItem value="payin">

- [Create QRIS](/docs/qris-create)
- [Create Virtual Account](/docs/virtual-account-create)

</TabItem>
<TabItem value="payout">

- [Create Withdrawal](/docs/withdraw)
- [Create Withdrawal Account](/docs/withdraw-account)

</TabItem>
<TabItem value="monitoring">

- [Check Transaction Status](/docs/transactions/check-status)
- [Webhooks](/docs/webhooks-v1)

</TabItem>
<TabItem value="reference">

- [Banks List](/docs/banks/list-v1)
- [Wallets List](/docs/wallets/list-v1)
- [Response Code](/docs/response-code-v1)

</TabItem>
</Tabs>

:::warning[Protected Endpoints]
Most endpoints require both `Authorization: Bearer {token}` and `X-API-KEY`. Always confirm required headers on each endpoint page before going live.
:::
