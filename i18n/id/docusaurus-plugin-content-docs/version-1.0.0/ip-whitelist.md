---
id: ip-whitelist
slug: /settings/ip-whitelist
title: Allowlist IP
description: Izinkan akses API dari alamat IP atau rentang CIDR tertentu di portal merchant MawarPay.
sidebar_position: 3
displayed_sidebar: tutorialSidebar
---

# Allowlist IP

Batasi akses API merchant ke IP server yang dikenal. Tambahkan setiap alamat atau CIDR pada halaman detail merchant, lalu jaga daftar agar sesuai dengan host yang mengirim permintaan `X-API-KEY`.

Buat [API key](/docs/settings/api-keys) terlebih dahulu, lalu buka tab **IP Whitelist** pada merchant yang sama (label tab di portal tetap **IP Whitelist**).

## Tambah IP dari portal

1. Masuk di [portal.mawarpay.com](https://portal.mawarpay.com).
2. Buka menu **Merchants**.
3. Klik salah satu nama merchant pada daftar untuk membuka detail merchant.
4. Buka tab **IP Whitelist**.
5. Klik **Add IP**.
6. Isi formulir, lalu klik **Add**.

## Formulir Add IP

Klik **Add IP** untuk membuka formulir ini:

![Formulir Add IP](/img/ip-whitelist-form.png)

| Field | Wajib | Isi |
|---|---|---|
| IP address or CIDR | Ya | Alamat tunggal, misalnya `182.253.240.95`, atau CIDR. |
| Description | Tidak | Catatan opsional agar tim dapat mengenali host. |
| IP range | Tidak | Rentang CIDR jika mengizinkan subnet, misalnya `10.0.0.0/24`. |
| Type | Ya | Jenis entri. Gunakan **Individual** untuk satu IP. |
| Expires at | Tidak | Tanggal dan waktu opsional. Kosongkan jika tanpa masa berlaku. |
| Active | Tidak | Biarkan tercentang agar entri berlaku setelah klik **Add**. |

Klik **Add** untuk menyimpan entri, atau **Cancel** untuk menutup formulir tanpa mengubah daftar.

## Setelah IP ditambahkan

Tab **IP Whitelist** menampilkan banner sukses dan tabel allowlist:

![Tab IP Whitelist di Detail Merchant](/img/ip-whitelist-list.png)

| Kolom | Keterangan |
|---|---|
| IP / CIDR | Alamat atau rentang yang ditambahkan |
| Description | Catatan dari formulir, atau `—` jika kosong |
| Type | Jenis entri, misalnya `individual` |
| Active | `Yes` jika entri sedang berlaku |
| Expires at | Masa berlaku dari formulir, atau `—` jika tidak ada |
| Created | Waktu entri ditambahkan |
| Actions | **Edit**, toggle aktif, dan **Delete** |

Banner hijau mengonfirmasi **IP added to whitelist** setelah penambahan berhasil.

## Pengaturan dashboard berikutnya

Jika belum, buat [API key](/docs/settings/api-keys) dan atur [Pengaturan Webhook](/docs/webhooks-v1) pada halaman detail merchant yang sama.
