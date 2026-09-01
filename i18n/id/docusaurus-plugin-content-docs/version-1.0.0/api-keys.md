---
id: api-keys
slug: /settings/api-keys
title: API Keys
description: Buat dan salin API key merchant dari portal MawarPay untuk header X-API-KEY.
sidebar_position: 1
displayed_sidebar: tutorialSidebar
---

# API Keys

Permintaan API v1 mengirim API key merchant pada header `X-API-KEY` bersama Bearer token dari [Login](/docs/auth/login-v1). Buat key tersebut di portal merchant, lalu salin ke konfigurasi server.

:::warning[Simpan kredensial di server]
Salin key baru segera. Nilai lengkap hanya ditampilkan sekali. Jangan menanam API key di aplikasi klien atau mobile.
:::

## Ambil API key dari portal

1. Masuk di [portal.mawarpay.com](https://portal.mawarpay.com).
2. Buka menu **Merchants**.
3. Klik salah satu nama merchant pada daftar untuk membuka detail merchant.
4. Buka tab **API Keys**.
5. Klik **Create API key** (penanda **1**).
6. Isi formulir pembuatan, lalu klik **Create**.
7. Salin key baru dari banner hijau segera — nilai lengkap tidak ditampilkan lagi.
8. Untuk key yang sudah ada, gunakan **Copy** pada baris key (penanda **2**). Gunakan **Reveal** hanya untuk memastikan akhiran key.

## Formulir Create API key

Klik **Create API key** untuk membuka formulir ini:

![Formulir Create API key](/img/api-key-form.png)

| Field | Wajib | Isi |
|---|---|---|
| Name | Ya | Label key, misalnya `Production key` atau `base`. |
| Scopes (permissions) | Ya | Centang izin yang dibutuhkan key ini. Daftar dapat di-scroll. |
| Expires at | Tidak | Tanggal dan waktu opsional. Kosongkan jika tanpa masa berlaku. |

Scope yang terlihat meliputi `read`, `write`, `transactions:read`, `transactions:write`, dan `merchants:read`. Scroll daftar untuk opsi lainnya, dan aktifkan hanya yang dibutuhkan integrasi.

Klik **Create** untuk menerbitkan key, atau **Cancel** untuk menutup formulir tanpa membuat key.

## Setelah key dibuat

Tab **API Keys** menampilkan key baru, aktivitas terbaru, dan daftar key:

![Tab API Keys di Detail Merchant](/img/api-key.png)

| Area | Keterangan |
|---|---|
| Banner hijau | Key lengkap setelah dibuat. Salin sekarang — tidak ditampilkan lagi. |
| Recent API key activity | Log event key, misalnya `Created`. |
| Key | Key tersamarkan dengan **Reveal** dan **Copy** |
| Name | Label yang diisi pada formulir |
| Created | Waktu key diterbitkan |
| Last used | Pemakaian API terakhir, atau `—` jika belum dipakai |
| Status | Toggle untuk mengaktifkan atau menonaktifkan tanpa revoke |
| Actions | **Revoke** membatalkan key secara permanen |

## Gunakan key pada permintaan API

Kirim nilai yang disalin sebagai `X-API-KEY` pada endpoint terlindungi. Lihat [Headers](/docs/headers-v1).

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

## Pengaturan dashboard berikutnya

Setelah API key disimpan di server, buka **Webhook Settings** dan **IP Whitelist** pada halaman detail merchant yang sama. Lihat [Pengaturan Webhook](/docs/webhooks-v1) dan [Allowlist IP](/docs/settings/ip-allowlist).
