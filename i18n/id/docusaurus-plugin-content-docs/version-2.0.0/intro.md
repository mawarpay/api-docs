---
id: intro
slug: /
title: Pengantar
description: Panduan integrasi API v1 untuk autentikasi, pay-in, payout, dan pemantauan transaksi.
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dokumentasi API v1

Selamat datang di dokumentasi MawarPay API v1. Panduan ini menyediakan semua yang dibutuhkan untuk mengintegrasikan alur pembayaran yang aman dan andal pada sistem berbasis web menggunakan RESTful API dan JSON.

:::tip Pemisahan Environment
Gunakan `https://sandbox.mawarpay.com` untuk pengembangan/pengujian dan `https://production.mawarpay.com` untuk trafik produksi. Pisahkan kredensial dan token per environment.
:::

## Ringkasan

API v1 dirancang untuk integrasi backend-to-backend dengan fokus pada:

- Struktur respons JSON yang konsisten
- Autentikasi berbasis token menggunakan JWT
- Konvensi kode respons yang dapat diprediksi
- Pola integrasi yang aman dan skalabel

## Base URL

Gunakan base URL sesuai environment Anda:

- **Sandbox:** `https://sandbox.mawarpay.com`
- **Production:** `https://production.mawarpay.com`

Semua path endpoint dalam dokumentasi ini relatif terhadap base URL yang dipilih.

## Mulai cepat berdasarkan use case

<Tabs defaultValue="payin" values={[
  {label: 'Pay-in', value: 'payin'},
  {label: 'Payout', value: 'payout'},
  {label: 'Monitoring', value: 'monitoring'},
]}>
<TabItem value="payin">

1. Autentikasi dengan [Login](/docs/auth/login-v1).
2. Buat pembayaran menggunakan [Create QRIS](/docs/qris-create) atau [Create Virtual Account](/docs/virtual-account-create).
3. Pantau status lewat [Check Transaction Status](/docs/transactions/check-status) atau [Webhooks](/docs/webhooks-v1).

</TabItem>
<TabItem value="payout">

1. Autentikasi dengan [Login](/docs/auth/login-v1).
2. Ambil metadata tujuan dari [Banks List](/docs/banks/list-v1).
3. (Opsional) Daftarkan tujuan menggunakan [Create Withdrawal Account](/docs/withdraw-account).
4. Kirim payout dengan [Create Withdrawal](/docs/withdraw).

</TabItem>
<TabItem value="monitoring">

1. Simpan `trxId` dan `trxReference` untuk setiap transaksi.
2. Lakukan polling [Check Transaction Status](/docs/transactions/check-status) dengan interval yang aman.
3. Konfigurasikan [Webhooks](/docs/webhooks-v1) untuk pembaruan push yang hampir real-time.

</TabItem>
</Tabs>

## Model Autentikasi

API v1 menggunakan autentikasi bearer token:

1. Autentikasi melalui endpoint login untuk mendapatkan `accessToken`
2. Kirim token pada header request untuk endpoint yang dilindungi:

```http
Authorization: Bearer <accessToken>
```

3. Refresh token sebelum kedaluwarsa (jika alur refresh diaktifkan pada implementasi Anda)

## Standar Request dan Response

### Standar Request

- Gunakan `Content-Type: application/json` untuk payload JSON
- Gunakan `Accept: application/json` untuk menerima respons JSON
- Validasi semua field wajib sebelum mengirim request

### Standar Response

Respons dikembalikan dalam JSON terstruktur:

```json
{
  "code": 2000107,
  "message": "Login successful",
  "data": {}
}
```

- `code`: Kode aplikasi komposit (HTTP + service + case)
- `message`: Hasil dalam bentuk teks yang mudah dibaca
- `data`: Payload untuk operasi yang berhasil
- `errors`: Detail validasi opsional untuk request yang tidak valid

## Memulai

Urutan integrasi yang direkomendasikan:

1. Buat [API key](/docs/settings/api-keys) di portal merchant
2. Atur [Webhook Settings](/docs/webhooks-v1) untuk pembaruan status
3. Izinkan IP server di [Allowlist IP](/docs/settings/ip-whitelist)
4. Implementasikan autentikasi (`Login`)
5. Integrasikan endpoint master data (`Banks List`, `Wallets List`)
6. Tambahkan alur pay-in dan payout, dan tetap gunakan [Cek Status Transaksi](/docs/transactions/check-status) sebagai cadangan

:::note Cakupan Dokumentasi
Set dokumentasi ini untuk API v1. Untuk perilaku yang konsisten, selalu validasi logika integrasi terhadap konvensi kode respons dan status v1.
:::

## Praktik Keamanan Terbaik

- Selalu gunakan HTTPS pada environment non-lokal
- Simpan kredensial API dan token pada penyimpanan server-side yang aman
- Jangan pernah mengekspos secret pada kode browser atau log
- Terapkan rate limiting dan monitoring pada endpoint autentikasi
- Rotasi secret dan cabut token yang terkompromi secepatnya

## Versioning dan Kompatibilitas

- Set dokumen ini hanya untuk **API v1**
- Penambahan baru sebisa mungkin tetap backward-compatible
- Breaking change sebaiknya dirilis pada major version baru

## Dukungan

Jika Anda mengalami kendala integrasi, sertakan request ID, endpoint, timestamp, serta contoh payload/response yang sudah disamarkan (tanpa data sensitif) saat menghubungi support.
