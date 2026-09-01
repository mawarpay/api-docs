---
id: faq-v1
title: FAQ
sidebar_position: 14
---

## FAQ

### Environment apa yang sebaiknya dipakai untuk testing?
Gunakan sandbox: `https://sandbox.mawarpay.com`.

### Bagaimana cara mendapatkan API key?
Masuk di [portal.mawarpay.com](https://portal.mawarpay.com), buka **Merchants**, pilih merchant, lalu gunakan tab **API Keys** untuk membuat dan menyalin key. Lihat [API Keys](/docs/settings/api-keys).

### Bagaimana cara menambahkan IP ke allowlist?
Pada halaman detail merchant yang sama, buka tab **IP Whitelist**, klik **Add IP**, lalu simpan formulir. Lihat [Allowlist IP](/docs/settings/ip-allowlist).

### Bagaimana cara autentikasi request API?
Gunakan `Authorization: Bearer {token}` dan `X-API-KEY: {apiKey}`.

### Apa yang harus disimpan untuk rekonsiliasi?
Simpan `trxId` dan `trxReference`.

### Apakah saya harus polling status transaksi terus-menerus?
Gunakan interval polling yang wajar dan berhenti saat status final. Jika tersedia, utamakan pembaruan via webhook.

### Bagaimana cara menangani validation error?
Cek HTTP `422`, lalu parse objek `errors` per field.
