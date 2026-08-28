---
id: api-endpoints-v1
slug: /api-endpoints-v1
title: Endpoint API
description: Daftar indeks endpoint API v1 per domain beserta kebutuhan request standar.
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Endpoint API

Gunakan indeks endpoint berikut untuk menavigasi operasi API v1.

:::tip Gunakan Halaman Ini sebagai Indeks
Setiap halaman endpoint yang ditautkan mengikuti struktur yang konsisten: ringkasan, detail endpoint, request, response, dan catatan keandalan.
:::

## Standar Format Endpoint

Semua endpoint dalam dokumentasi ini mengikuti struktur berikut:

### Request

- Method: `GET` / `POST` / `PUT` / `DELETE`
- URL: path endpoint relatif terhadap base URL yang dipilih
- Headers:
  - `Authorization: Bearer {token}`
  - `Content-Type: application/json`
  - `X-API-KEY: {apiKey}`
- Parameter Body (jika ada):

| Field | Type | Required | Description |
|---|---|---|---|
| amount | number | yes | Jumlah transaksi |
| reference | string | yes | Referensi transaksi unik |

## Indeks Endpoint

<Tabs defaultValue="auth" values={[
  {label: 'Autentikasi', value: 'auth'},
  {label: 'Pay-in', value: 'payin'},
  {label: 'Payout', value: 'payout'},
  {label: 'Monitoring', value: 'monitoring'},
  {label: 'Data Referensi', value: 'reference'},
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

:::warning Endpoint yang Dilindungi
Sebagian besar endpoint memerlukan `Authorization: Bearer {token}` dan `X-API-KEY`. Selalu cek header yang dibutuhkan pada setiap halaman endpoint sebelum go-live.
:::
