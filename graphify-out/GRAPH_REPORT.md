# Graph Report - api-docs  (2026-08-20)

## Corpus Check
- 189 files · ~132,518 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1511 nodes · 1915 edges · 136 communities (120 shown, 16 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 153 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Check Withdraw Status
- Webhook Signature Verification
- Withdraw Account CRUD
- ID Withdraw Account CRUD
- ID Error Retry Practices
- v1 Withdraw Account CRUD
- Docusaurus Core Packages
- Package Dependencies
- Vercel Deploy Workflow
- JWT Auth Model
- API Authentication Intro
- Payout Status Lifecycle
- Sandbox vs Production
- ID Withdraw Account Details
- Banks List Payout
- Withdraw Account Methods
- ID Wallet List API
- ID Create QRIS
- Payment Status Management
- Transaction Reference Fields
- Bank Account Verification
- Webhook Dashboard Config
- Refresh Token Errors
- v1 Sandbox Testing
- QRIS Create Lifecycle
- Create Withdrawal API
- ID Banks Wallets Lists
- v1 Response Codes
- QRIS Payment Initiation
- ID API Introduction
- ID Payin Status Polling
- Bank Wallet Service Codes
- ID Create Withdrawal
- Virtual Account Create
- Protected Endpoint Headers
- Response Case Codes
- Auth Error Responses
- Wallets and Withdrawal
- ID Webhook Handlers
- ID Check Transaction
- ID Virtual Account Create
- ID Withdraw Account Create
- Merchant API Credentials
- v1 Wallet Endpoints
- Check Transaction Status
- API v1 Overview
- ID Wallet Details
- ID API Endpoint Index
- ID Error Handling FAQ
- v1.1 Webhook IPN
- Login Endpoint
- IP Whitelist Guide
- ID Generate QRIS
- ID IP Whitelist
- Generate QRIS Examples
- ID IP Whitelist Config
- ID Login Endpoint
- ID Environment Changelog
- Docs Site Illustrations
- v1 IP Whitelist
- Environment Base URLs
- Composite Response Codes
- Sandbox Testing Guide
- Withdraw Account Index
- ID Sandbox Guide
- Withdraw Account Validation
- Wallet Balance Filters
- ID Refresh Token
- IP Whitelist UI Modal
- QRIS Order Lifecycle
- VA Order Lifecycle
- Support Error Codes
- Check Withdraw Docs
- Generate QRIS Docs
- Response Codes Docs
- Withdrawal Statuses
- ID Support Error Codes
- ID Withdrawal Request
- QRIS Payment Service
- ID HTTP Error Codes
- ID Withdrawal API
- ID Success Error Responses
- ID HTTP Error Responses
- Environment Separation
- ID Wallet List v1
- Payout Polling States
- Vercel Site Config
- API Headers Standard
- HTTP Error Responses
- ID Set Payment Status
- v1 Generate QRIS
- v1 Withdrawal Request
- Response Code Integration
- Support Page
- Wallet Details Docs
- Wallet List Docs
- Payment Webhook Events
- ID Wallet Details Page
- ID Wallet List Page
- ID Auth Error Responses
- ID Server Error Responses
- Auth Success Errors
- IP Whitelist Form UI
- MawarPay Brand Lockup
- Set Status Form UI
- Easy to Use Illustration
- Powered by React Illustration
- v1 Auth Intro
- Request Validation Rules
- ID Tutorial Intro
- Docusaurus Social Card
- Rose Envelope Brand Icon
- Docusaurus Cactus Logo
- MawarPay Favicon
- SDK Code Examples
- ID Wallets Index
- Search Bar Component
- Docusaurus Logo
- MawarPay Light Logo
- Docusaurus Config
- QRIS VA Fee Types
- Sidebar Navigation
- Markdown Page Example
- IP Address Fields
- Reconcile Category
- Active Toggle
- Description Field
- Expires At Picker
- Type Dropdown
- Night Sky Illustration
- Ground Rocks Illustration
- Stylized Trees Illustration
- Withdraw Status Flowchart

## God Nodes (most connected - your core abstractions)
1. `Case Codes` - 25 edges
2. `X-API-KEY` - 25 edges
3. `Webhook IPN` - 20 edges
4. `Check Transaction Status` - 19 edges
5. `Webhooks` - 18 edges
6. `Create Withdrawal` - 18 edges
7. `X-MERCHANT-KEY` - 18 edges
8. `Sandbox Environment` - 18 edges
9. `MawarPay API Documentation` - 17 edges
10. `Withdrawal Account Management` - 17 edges

## Surprising Connections (you probably didn't know these)
- `Check Withdrawal Status` --semantically_similar_to--> `withdraw Event`  [INFERRED] [semantically similar]
  versioned_docs/version-1.1.0/check-withdraw.md → docs/webhooks.md
- `HMAC-SHA256 Signature` --semantically_similar_to--> `IP Whitelist`  [INFERRED] [semantically similar]
  i18n/id/docusaurus-plugin-content-docs/version-1.0.0/webhooks.md → docs/ip-whitelist.md
- `receive_payment Event` --semantically_similar_to--> `Payment Status Codes`  [INFERRED] [semantically similar]
  docs/webhooks.md → i18n/id/docusaurus-plugin-content-docs/current/set-status.md
- `Available Balance` --semantically_similar_to--> `GET /api/v1/withdraw-accounts/{id}/info`  [INFERRED] [semantically similar]
  docs/wallets/details.md → versioned_docs/version-1.0.0/withdraw-account-management/info.md
- `GET /api/v1/check-status/{trxId}` --semantically_similar_to--> `Webhook IPN`  [INFERRED] [semantically similar]
  versioned_docs/version-1.0.0/set-status.md → i18n/id/docusaurus-plugin-content-docs/version-1.1.0/webhooks.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Merchant API Header Authentication** — docs_intro_authentication, docs_intro_x_merchant_key, docs_intro_x_api_key [EXTRACTED 1.00]
- **Withdrawal Account CRUD** — docs_withdraw_account_management_index_api, docs_withdraw_account_management_list_list_accounts, docs_withdraw_account_management_create_create_account, docs_withdraw_account_management_details_get_details, docs_withdraw_account_management_update_update_account, docs_withdraw_account_management_delete_delete_account [EXTRACTED 1.00]
- **Withdrawal Processing Flow** — docs_withdrawal_create_withdrawal_request, docs_check_withdraw_check_withdrawal_status, docs_webhooks_withdraw_event, docs_withdrawal_withdrawal_statuses [INFERRED 0.85]
- **API Authentication Headers** — i18n_id_docusaurus_plugin_content_docs_current_intro_authentication [EXTRACTED 1.00]
- **Withdrawal Payout Flow** — i18n_id_docusaurus_plugin_content_docs_current_wallets_list_list_wallets, i18n_id_docusaurus_plugin_content_docs_current_withdraw_account_management_list_list_accounts, i18n_id_docusaurus_plugin_content_docs_current_withdrawal_withdraw_api [INFERRED 0.85]
- **Withdraw Account CRUD** — i18n_id_docusaurus_plugin_content_docs_current_withdraw_account_management_list_list_accounts, i18n_id_docusaurus_plugin_content_docs_current_withdraw_account_management_create_create_account, i18n_id_docusaurus_plugin_content_docs_current_withdraw_account_management_details_account_details, i18n_id_docusaurus_plugin_content_docs_current_withdraw_account_management_update_update_account, i18n_id_docusaurus_plugin_content_docs_current_withdraw_account_management_delete_delete_account [EXTRACTED 1.00]
- **Merchant Payout Flow** — i18n_id_docusaurus_plugin_content_docs_version_1_0_0_wallets_list_get_wallets [INFERRED 0.85]
- **Withdrawal Payout Flow** — i18n_id_docusaurus_plugin_content_docs_version_1_1_0_withdrawal_withdraw_api, i18n_id_docusaurus_plugin_content_docs_version_1_1_0_wallets_list_list_wallets_api, i18n_id_docusaurus_plugin_content_docs_version_1_1_0_withdraw_account_management_list_list_accounts_api, i18n_id_docusaurus_plugin_content_docs_version_1_1_0_withdraw_account_management_info_info_api [INFERRED 0.85]
- **API Authentication Defense** — i18n_id_docusaurus_plugin_content_docs_version_1_1_0_intro_server_side_secrets [INFERRED 0.85]
- **Webhook Delivery and Verification** — i18n_id_docusaurus_plugin_content_docs_version_1_1_0_webhooks_ipn, i18n_id_docusaurus_plugin_content_docs_version_1_1_0_webhooks_hmac_sha256 [EXTRACTED 1.00]
- **Alur autentikasi JWT v1** — i18n_id_docusaurus_plugin_content_docs_version_2_0_0_intro_authentication_model [EXTRACTED 1.00]
- **Alur pay-in dan pemantauan status** — i18n_id_docusaurus_plugin_content_docs_version_2_0_0_webhooks_webhook [EXTRACTED 1.00]
- **QRIS Payment Lifecycle** — versioned_docs_version_1_0_0_generate_qris_initiate_payment_qris, versioned_docs_version_1_0_0_set_status_check_status, versioned_docs_version_1_0_0_webhooks_receive_payment [INFERRED 0.85]
- **Withdrawal Disbursement Flow** — versioned_docs_version_1_0_0_wallets_list_list_wallets, versioned_docs_version_1_0_0_withdraw_account_management_list_list_withdrawal_accounts, versioned_docs_version_1_0_0_withdrawal_create_withdrawal, versioned_docs_version_1_0_0_webhooks_withdraw_event [INFERRED 0.85]
- **Withdrawal Account CRUD** — versioned_docs_version_1_0_0_withdraw_account_management_list_list_withdrawal_accounts, versioned_docs_version_1_0_0_withdraw_account_management_create_create_withdrawal_account, versioned_docs_version_1_0_0_withdraw_account_management_details_get_withdrawal_account_details, versioned_docs_version_1_0_0_withdraw_account_management_update_update_withdrawal_account, versioned_docs_version_1_0_0_withdraw_account_management_delete_delete_withdrawal_account [EXTRACTED 1.00]
- **Composite Response Code Format** — versioned_docs_version_1_1_0_response_codes_http_status_code [EXTRACTED 1.00]
- **Withdrawal Status Lifecycle** — versioned_docs_version_1_1_0_withdraw_create_withdrawal, versioned_docs_version_1_1_0_check_withdraw_check_withdrawal_status [INFERRED 0.85]
- **Merchant API Key Authentication** — versioned_docs_version_1_1_0_withdraw_create_withdrawal, versioned_docs_version_1_1_0_check_withdraw_check_withdrawal_status [EXTRACTED 1.00]
- **Pay-in Quick Start** — versioned_docs_version_2_0_0_auth_login, versioned_docs_version_2_0_0_qris_create, versioned_docs_version_2_0_0_virtual_account_create, versioned_docs_version_2_0_0_check_transaction_check_transaction_status, versioned_docs_version_2_0_0_webhooks_webhooks [EXTRACTED 1.00]
- **Payout Quick Start** — versioned_docs_version_2_0_0_auth_login, versioned_docs_version_2_0_0_banks_list_banks_list, versioned_docs_version_2_0_0_withdraw_account, versioned_docs_version_2_0_0_withdraw_create_withdrawal [EXTRACTED 1.00]
- **Transaction Monitoring Quick Start** — versioned_docs_version_2_0_0_check_transaction_trx_id, versioned_docs_version_2_0_0_check_transaction_trx_reference, versioned_docs_version_2_0_0_check_transaction_check_transaction_status, versioned_docs_version_2_0_0_webhooks_webhooks [EXTRACTED 1.00]
- **Docusaurus Social Card Brand Layout** — static_img_docusaurus_social_card_wordmark, static_img_docusaurus_social_card_mascot, static_img_docusaurus_social_card_value_proposition [EXTRACTED 1.00]
- **Docusaurus Brand Mark** — static_img_docusaurus_logo, static_img_docusaurus_mascot, static_img_docusaurus_notepad [EXTRACTED 1.00]
- **Rose Envelope Stamp Brand Mark** — static_img_icon_rose, static_img_icon_envelope, static_img_icon_postage_stamp [EXTRACTED 1.00]
- **Add IP Whitelist Entry Form** — static_img_ip_whitelist_v1_add_ip_to_whitelist, static_img_ip_whitelist_v1_ip_address_or_cidr, static_img_ip_whitelist_v1_description, static_img_ip_whitelist_v1_ip_range, static_img_ip_whitelist_v1_type, static_img_ip_whitelist_v1_expires_at, static_img_ip_whitelist_v1_active, static_img_ip_whitelist_v1_add [EXTRACTED 1.00]
- **IP Whitelist Entry Form Fields** — static_img_ip_whitelist_add_new_ip_address_form, static_img_ip_whitelist_ip_address_field, static_img_ip_whitelist_tipe_field, static_img_ip_whitelist_deskripsi_field, static_img_ip_whitelist_ip_range_cidr, static_img_ip_whitelist_expires_at, static_img_ip_whitelist_aktif_toggle [EXTRACTED 1.00]
- **Merchant API Credentials** — static_img_key_merchant_id, static_img_key_api_key, static_img_key_api_secret_key [EXTRACTED 1.00]
- **Complete Docusaurus Logo Composition** — static_img_logo_cactus_mascot, static_img_logo_lined_notepad, static_img_logo_arm_blossoms [EXTRACTED 1.00]
- **Unified Rose-Wallet Favicon** — static_img_mawar_favicon_rose, static_img_mawar_favicon_wallet, static_img_mawar_favicon_gold_chip [EXTRACTED 1.00]
- **Mawarpay Light Brand Lockup** — static_img_mawar_light_logo_logo, static_img_mawar_light_logo_rose_wallet_emblem, static_img_mawar_light_logo_wordmark [EXTRACTED 1.00]
- **MawarPay Horizontal Brand Lockup** — static_img_mawar_logo_lockup, static_img_mawar_logo_icon, static_img_mawar_logo_wordmark [EXTRACTED 1.00]
- **Pending to Mutually Exclusive Terminal Statuses** — static_img_qris_pending, static_img_qris_success, static_img_qris_expired, static_img_qris_failed [EXTRACTED 1.00]
- **Merchant Follow-up After Terminal Status** — static_img_qris_doneok, static_img_qris_doneex, static_img_qris_donefl [EXTRACTED 1.00]
- **Payment Status Update Flow** — static_img_set_status_payment_id_transaksi, static_img_set_status_payment_status_dropdown, static_img_set_status_payment_update_button [EXTRACTED 1.00]
- **Mountain Landscape Backdrop** — static_img_undraw_docusaurus_mountain_mountain_range, static_img_undraw_docusaurus_mountain_night_sky, static_img_undraw_docusaurus_mountain_trees, static_img_undraw_docusaurus_mountain_rocks, static_img_undraw_docusaurus_mountain_hiker [EXTRACTED 1.00]
- **Powered by React Homepage Scene** — static_img_undraw_docusaurus_react_seated_developer, static_img_undraw_docusaurus_react_docusaurus_keytar, static_img_undraw_docusaurus_react_react_logo [EXTRACTED 1.00]
- **Documentation Site Mockup** — static_img_undraw_docusaurus_tree_browser_window, static_img_undraw_docusaurus_tree_file_tree_sidebar, static_img_undraw_docusaurus_tree_content_pane [EXTRACTED 1.00]
- **Documentation Article Layout** — static_img_undraw_docusaurus_tree_heading_bar, static_img_undraw_docusaurus_tree_body_text_lines, static_img_undraw_docusaurus_tree_cta_button [EXTRACTED 1.00]
- **VA Status Lifecycle Flow** — static_img_va_create_201, static_img_va_pending, static_img_va_paid_or_completed, static_img_va_expired, static_img_va_failed, static_img_va_finalize_order, static_img_va_release_reservation, static_img_va_handle_failure [EXTRACTED 1.00]
- **Pending Three-Way Outcome Fork** — static_img_va_pending, static_img_va_paid_or_completed, static_img_va_expired, static_img_va_failed [EXTRACTED 1.00]
- **Merchant Terminal Follow-up Actions** — static_img_va_finalize_order, static_img_va_release_reservation, static_img_va_handle_failure [EXTRACTED 1.00]
- **Webhook Settings Configuration Form** — static_img_webhook_v1_webhook_endpoint, static_img_webhook_v1_verify_ssl, static_img_webhook_v1_webhook_secret [EXTRACTED 1.00]
- **Webhook Delivery Controls** — static_img_webhook_v1_webhook_endpoint, static_img_webhook_v1_send_test_webhook [EXTRACTED 1.00]
- **Webhook Settings Form** — static_img_webhook_enable_webhooks, static_img_webhook_verify_ssl_certificates, static_img_webhook_endpoint_url, static_img_webhook_secret_key [EXTRACTED 1.00]
- **Webhook Delivery Pipeline** — static_img_webhook_endpoint_url, static_img_webhook_https_post, static_img_webhook_hmac_sha256, static_img_webhook_secret_key [EXTRACTED 1.00]
- **Webhook Signature Scheme** — static_img_webhook_secret_key, static_img_webhook_hmac_sha256, static_img_webhook_x_signature [EXTRACTED 1.00]
- **Withdraw Transaction Status Lifecycle** — static_img_withdraw_flowchart, static_img_withdraw_created, static_img_withdraw_pending, static_img_withdraw_awaiting, static_img_withdraw_completed, static_img_withdraw_failed, static_img_withdraw_refunded, static_img_withdraw_doneok, static_img_withdraw_donerf [EXTRACTED 1.00]

## Communities (136 total, 16 thin omitted)

### Community 0 - "Check Withdraw Status"
Cohesion: 0.05
Nodes (53): Service Codes, Model Kode Respons 7 Digit, Check Withdrawal Status, Code Examples, Path Parameters, Request Headers, Responses, trxID Path Parameter (+45 more)

### Community 1 - "Webhook Signature Verification"
Cohesion: 0.05
Nodes (42): Webhook Secret, HMAC-SHA256 Signature Verification, Payload Webhook, Signature Verification, Webhook Headers, Webhooks, Fitur Khusus Sandbox, Kredensial Sandbox (+34 more)

### Community 2 - "Withdraw Account CRUD"
Cohesion: 0.05
Nodes (30): Code Examples, Request Headers, Responses, Code Examples, Request Body, Request Headers, Responses, Code Examples (+22 more)

### Community 3 - "ID Withdraw Account CRUD"
Cohesion: 0.05
Nodes (30): Contoh Kode, Header Permintaan, Responses, Body Permintaan, Contoh Kode, Header Permintaan, Responses, Contoh Kode (+22 more)

### Community 4 - "ID Error Retry Practices"
Cohesion: 0.05
Nodes (39): Kelas Error HTTP, Retry Kondisi Transien, Exponential Backoff, Retry-After, Autentikasi Dua Faktor (80-89), Case Codes Autentikasi 21-30, Case Codes Rekening Bank 95-99, Best Practices (+31 more)

### Community 5 - "v1 Withdraw Account CRUD"
Cohesion: 0.05
Nodes (30): Code Examples, Request Headers, Responses, Code Examples, Request Body, Request Headers, Responses, Code Examples (+22 more)

### Community 6 - "Docusaurus Core Packages"
Cohesion: 0.05
Nodes (37): clsx, @docusaurus/core, @docusaurus/faster, @docusaurus/plugin-client-redirects, @docusaurus/preset-classic, @docusaurus/theme-live-codeblock, @docusaurus/theme-mermaid, @easyops-cn/docusaurus-search-local (+29 more)

### Community 7 - "Package Dependencies"
Cohesion: 0.06
Nodes (35): @docusaurus/module-type-aliases, @docusaurus/types, husky, browserslist, development, production, devDependencies, @docusaurus/module-type-aliases (+27 more)

### Community 8 - "Vercel Deploy Workflow"
Cohesion: 0.07
Nodes (28): VERCEL_TOKEN, Deploy to Vercel Workflow, @docusaurus/tsconfig, @docusaurus/tsconfig, Build, Clear Cache, Contributing, Deployment (+20 more)

### Community 9 - "JWT Auth Model"
Cohesion: 0.09
Nodes (25): JWT, Rotasi Refresh Token, Model Autentikasi JWT, Base URL, Dokumentasi API v1, Dukungan, Memulai, Model Autentikasi (+17 more)

### Community 10 - "API Authentication Intro"
Cohesion: 0.15
Nodes (22): Authentication, MawarPay RESTful API, Required Credentials, Tutorial Intro, X-API-KEY, X-MERCHANT-KEY, GET /api/v1/check-status/{trxId}, Available Balance Calculation (+14 more)

### Community 11 - "Payout Status Lifecycle"
Cohesion: 0.09
Nodes (23): Siklus Status Payout, Available status values, Berhasil (`200 OK`), Contoh kode, Endpoint, Request body, Request headers, Response (+15 more)

### Community 12 - "Sandbox vs Production"
Cohesion: 0.14
Nodes (20): Production Environment, Sandbox Environment, Sandbox Testing, X-Environment Header, API Authentication, MawarPay Payment Gateway, MawarPay RESTful API, Sandbox Testing Guide (+12 more)

### Community 13 - "ID Withdraw Account Details"
Cohesion: 0.10
Nodes (20): Hapus Akun Penarikan, Contoh Kode, Header Permintaan, Path Parameters, Responses, Detail Akun Penarikan, Header Permintaan, Path Parameters (+12 more)

### Community 14 - "Banks List Payout"
Cohesion: 0.11
Nodes (20): Banks List, Code Example, Endpoint Details, Overview, Request, Request Headers, Security and Reliability Notes, Payout Flow (+12 more)

### Community 15 - "Withdraw Account Methods"
Cohesion: 0.19
Nodes (19): Withdrawal Payment Methods, GET /api/v1/withdraw-accounts/methods, method_id, GET /api/v1/withdraw-accounts/lists, POST /api/v1/withdraw-accounts, Production Bank Account Verification, DELETE /api/v1/withdraw-accounts/{id}, Permanent Withdraw Account Delete (+11 more)

### Community 16 - "ID Wallet List API"
Cohesion: 0.13
Nodes (18): Smallest Currency Unit Amounts, Contoh Kode, Daftar Dompet, Field Response, GET /api/v1/wallets, Header Permintaan, Positive Balance Filter, Responses (+10 more)

### Community 17 - "ID Create QRIS"
Cohesion: 0.12
Nodes (19): Buat QRIS, Catatan Keamanan dan Keandalan, Contoh Kode, Detail Endpoint, Field Respons, Request, Request Body, Request Headers (+11 more)

### Community 18 - "Payment Status Management"
Cohesion: 0.12
Nodes (17): IP Whitelist, Available Payment Status, Check Transaction Status, Check Transaction Status API, Code Examples, Path Parameters, Payment Status Management, Payment Statuses (+9 more)

### Community 19 - "Transaction Reference Fields"
Cohesion: 0.16
Nodes (18): payload EMV QR, trxReference QRIS, paymentType VA, vaNumber, event receivePayment, trxReference withdrawal, trxId, trxReference (+10 more)

### Community 20 - "Bank Account Verification"
Cohesion: 0.16
Nodes (17): bank_code from lists, Production Bank Verification, Informasi Akun, Header Permintaan, Path Parameters, Responses, Response Code 2000301, Response Code 4040003 (+9 more)

### Community 21 - "Webhook Dashboard Config"
Cohesion: 0.17
Nodes (17): Webhook Configuration Dashboard, Enable Webhooks Toggle, Webhook Endpoint URL, HMAC-SHA256 Signature Verification, HTTPS-Only URL Constraint, HTTPS POST Delivery, Payment Webhook Events, Webhook Secret Key (+9 more)

### Community 22 - "Refresh Token Errors"
Cohesion: 0.12
Nodes (17): Refresh Token, `400 Bad Request`, `401 Unauthorized`, `422 Validation Error`, `500 Internal Server Error`, Code Example, Endpoint Details, Error Responses (+9 more)

### Community 23 - "v1 Sandbox Testing"
Cohesion: 0.12
Nodes (14): Comprehensive Testing Scenarios, Payment Testing, Ready for Production?, Sandbox Credentials, Sandbox Environment, Sandbox-Specific Features, Sandbox Testing Guide, Wallet & Features Testing (+6 more)

### Community 24 - "QRIS Create Lifecycle"
Cohesion: 0.14
Nodes (16): Create QRIS, Common `data.status` values (QRIS), Endpoint Details, Overview, QRIS status lifecycle, Response, Response Fields, Responses (+8 more)

### Community 25 - "Create Withdrawal API"
Cohesion: 0.13
Nodes (16): Available withdraw Status, Code Examples, Create Withdrawal, Endpoint Details, Operational Notes, Overview, Payment Method Codes, Request (+8 more)

### Community 26 - "ID Banks Wallets Lists"
Cohesion: 0.13
Nodes (15): Dapatkan Daftar Bank dan Dompet, Contoh Kode, Header Permintaan, Responses, Buat Akun Penarikan, Body Permintaan, Contoh Kode, Header Permintaan (+7 more)

### Community 27 - "v1 Response Codes"
Cohesion: 0.13
Nodes (14): API Response Codes Documentation, Auth Service (01), Case Codes by Service, Common Response Code Examples, General Service (00), HTTP Status Code Reference, Notes, Overview (+6 more)

### Community 28 - "QRIS Payment Initiation"
Cohesion: 0.19
Nodes (14): QRIS Expiration Time, POST /api/v1/initiate-payment-qris, qrImage, QRIS, ref_trx Unique Transaction Reference, DUPLICATE_REFERENCE, EXPIRED_SESSION, POST /api/v1/initiate-payment-qris (+6 more)

### Community 29 - "ID API Introduction"
Cohesion: 0.15
Nodes (14): Pengantar, Autentikasi, Kredensial yang Diperlukan, MawarPay, Pengantar Tutorial, Sandbox Environment URL, Sandbox Mode, API Cek Status Transaksi (+6 more)

### Community 30 - "ID Payin Status Polling"
Cohesion: 0.16
Nodes (14): Siklus Status Payin, Polling Status Transaksi, trxId, Nilai `data.status` yang umum (QRIS), Siklus status QRIS, Kebijakan Umum, Panduan Retry untuk `429`, Rate Limit (+6 more)

### Community 31 - "Bank Wallet Service Codes"
Cohesion: 0.18
Nodes (14): Bank (90-94), wallet balance, event withdraw, bankCode akun withdrawal, bankCode, GET /api/v1/banks, ServiceCodeBank, ServiceCodeWallet (+6 more)

### Community 32 - "ID Create Withdrawal"
Cohesion: 0.15
Nodes (14): Buat Withdrawal, Catatan Keamanan dan Keandalan, Catatan Operasional, Contoh Kode, Detail Endpoint, Field Respons, Payment Method Codes, Request (+6 more)

### Community 33 - "Virtual Account Create"
Cohesion: 0.14
Nodes (14): Create Virtual Account, Code Example, Common `data.status` values (VA), Endpoint Details, Overview, Request, Request Body, Request Headers (+6 more)

### Community 34 - "Protected Endpoint Headers"
Cohesion: 0.18
Nodes (13): Endpoint yang Dilindungi, Best Practices, Contoh Penggunaan Header, Header, Header Standar, Protected Endpoints, FAQ, How do I authenticate API requests? (+5 more)

### Community 35 - "Response Case Codes"
Cohesion: 0.15
Nodes (13): Authentication Errors (21-30), Bank (90-94), Bank Account (95-99), Business Logic (45-54), Case Codes, Conflict (65-69), Email Change (70-74), Not Found (31-44) (+5 more)

### Community 36 - "Auth Error Responses"
Cohesion: 0.17
Nodes (13): `401 Unauthorized`, `500 Internal Server Error`, Code Example, Endpoint Details, Error Responses, Overview, Request, Request Headers (+5 more)

### Community 37 - "Wallets and Withdrawal"
Cohesion: 0.18
Nodes (10): Available Endpoints, Wallets, List Withdrawal Accounts, Code Examples, Create Withdrawal Request, Payment Method Examples, Request Body, Request Headers (+2 more)

### Community 38 - "ID Webhook Handlers"
Cohesion: 0.17
Nodes (11): Contoh Handler Express.js, Contoh Verifikasi, Field Penting, Header Webhook, Menangani Webhook, Menguji Webhook, Payload Webhook, Status Webhook (+3 more)

### Community 39 - "ID Check Transaction"
Cohesion: 0.18
Nodes (12): Catatan Operasional, Cek Status Transaksi, Contoh Kode, Detail Endpoint, Field Respons, Request, Request Body, Request Headers (+4 more)

### Community 40 - "ID Virtual Account Create"
Cohesion: 0.17
Nodes (12): Buat Virtual Account, Catatan Keamanan dan Keandalan, Contoh Kode, Detail Endpoint, Field Respons, Request, Request Body, Request Headers (+4 more)

### Community 41 - "ID Withdraw Account Create"
Cohesion: 0.17
Nodes (12): Buat Akun Withdrawal, Catatan Keamanan dan Keandalan, Contoh Kode, Detail Endpoint, Field Respons, Request, Request Body, Request Headers (+4 more)

### Community 42 - "Merchant API Credentials"
Cohesion: 0.21
Nodes (12): API Implementation Guide, API Key, API Secret Key, Copy to Clipboard, API Credential Security Warning, Merchant API Configuration, Merchant ID, Multiple Payment Gateways (+4 more)

### Community 43 - "v1 Wallet Endpoints"
Cohesion: 0.17
Nodes (10): Code Examples, Get Wallet Details, Path Parameters, Request Headers, Responses, Code Examples, List Wallets, Request Headers (+2 more)

### Community 44 - "Check Transaction Status"
Cohesion: 0.18
Nodes (12): Check Transaction Status, Code Example, Endpoint Details, Operational Notes, Overview, Request, Request Body, Request Headers (+4 more)

### Community 45 - "API v1 Overview"
Cohesion: 0.17
Nodes (12): API Docs v1, Authentication Model, Base URL, Getting Started, Overview, Quick Start by Use Case, Request and Response Standards, Request Standards (+4 more)

### Community 46 - "ID Wallet Details"
Cohesion: 0.20
Nodes (11): Available Balance, Contoh Kode, Detail Dompet, GET /api/v1/wallets/{uuid}, Header Permintaan, Wallet Ownership Check, Path Parameters, Responses (+3 more)

### Community 47 - "ID API Endpoint Index"
Cohesion: 0.22
Nodes (11): Endpoint API, Indeks Endpoint, Request, Standar Format Endpoint, Catatan Keamanan dan Keandalan, Contoh Kode, Daftar Bank, Detail Endpoint (+3 more)

### Community 48 - "ID Error Handling FAQ"
Cohesion: 0.22
Nodes (11): Format Respons Error, Kelas Error HTTP yang Umum, Penanganan Error, Rekomendasi Implementasi, Apa yang harus disimpan untuk rekonsiliasi?, Apakah saya harus polling status transaksi terus-menerus?, Bagaimana cara autentikasi request API?, Bagaimana cara menangani validation error? (+3 more)

### Community 49 - "v1.1 Webhook IPN"
Cohesion: 0.22
Nodes (10): HMAC-SHA256, IPN URL, Payload Webhook, Webhook Retry Logic, Signature Verification, Webhook Headers, Webhooks, x-signature (+2 more)

### Community 50 - "Login Endpoint"
Cohesion: 0.18
Nodes (11): Login, Code Example, Endpoint Details, Notes, Overview, Request, Request Body, Request Headers (+3 more)

### Community 51 - "IP Whitelist Guide"
Cohesion: 0.20
Nodes (9): Benefits of IP Whitelisting, Best Practices, Find Your Server IP Address, How to Add IP Addresses, IP Whitelist Response Codes, Managing the IP Whitelist, Supported IP Formats, Testing IP Access (+1 more)

### Community 52 - "ID Generate QRIS"
Cohesion: 0.20
Nodes (9): Code Examples, cURL, Error Response, Inisiasi Pembayaran QRIS, Node.js, PHP/Laravel, Request Headers, Request Parameters (+1 more)

### Community 53 - "ID IP Whitelist"
Cohesion: 0.20
Nodes (9): Cara Menambahkan Alamat IP, Cari Alamat IP Server Anda, Format IP yang Didukung, Kode Respon Whitelist IP, Manfaat Daftar Putih IP, Mengelola Daftar Putih IP, Menguji Akses IP, Pemecahan Masalah (+1 more)

### Community 54 - "Generate QRIS Examples"
Cohesion: 0.20
Nodes (10): Generate QRIS API, Code Examples, cURL, Error Response, Inisiasi Pembayaran QRIS, Node.js, PHP/Laravel, Request Headers (+2 more)

### Community 55 - "ID IP Whitelist Config"
Cohesion: 0.20
Nodes (10): Konfigurasi Daftar Putih IP, Cara Menambahkan Alamat IP, Cari Alamat IP Server Anda, Format IP yang Didukung, Kode Respon Whitelist IP, Manfaat Daftar Putih IP, Mengelola Daftar Putih IP, Menguji Akses IP (+2 more)

### Community 56 - "ID Login Endpoint"
Cohesion: 0.20
Nodes (10): Login, Catatan, Catatan Keamanan dan Keandalan, Contoh Kode, Detail Endpoint, Request, Request Body, Request Headers (+2 more)

### Community 57 - "ID Environment Changelog"
Cohesion: 0.27
Nodes (10): Aturan Environment, Base URL dan Environment, Environment, Konvensi Path Endpoint, 2.0.0, Changelog, Alur Kerja Integrasi, Komponen SDK Internal yang Disarankan (+2 more)

### Community 58 - "Docs Site Illustrations"
Cohesion: 0.24
Nodes (10): Body Text Placeholders, Documentation Browser Window, Decorative Cactus, Documentation Content Pane, Call-to-Action Button, Document Card in Tree, File Tree Sidebar, Page Heading Bar (+2 more)

### Community 59 - "v1 IP Whitelist"
Cohesion: 0.20
Nodes (9): Benefits of IP Whitelisting, Best Practices, Find Your Server IP Address, How to Add IP Addresses, IP Whitelist Response Codes, Managing the IP Whitelist, Supported IP Formats, Testing IP Access (+1 more)

### Community 60 - "Environment Base URLs"
Cohesion: 0.27
Nodes (10): Base URL and Environment, Endpoint Path Convention, Environment Rules, Environments, 2.0.0, Changelog, General Policy, Rate Limits (+2 more)

### Community 61 - "Composite Response Codes"
Cohesion: 0.39
Nodes (9): Auth Service (01), Case Codes by Service, Composite Response Code, General Service (00), Payment Service (02), Transaction Service (05), Validation Service (06), Wallet Service (04) (+1 more)

### Community 62 - "Sandbox Testing Guide"
Cohesion: 0.22
Nodes (8): Comprehensive Testing Scenarios, Payment Testing, Ready for Production?, Sandbox Credentials, Sandbox Environment, Sandbox-Specific Features, Sandbox Testing Guide, Wallet & Features Testing

### Community 63 - "Withdraw Account Index"
Cohesion: 0.39
Nodes (9): Banks and Wallets Lists, Create Withdrawal Account, Delete Withdrawal Account, Get Withdrawal Account Details, Withdrawal Account Management, API Resource Responses, Withdrawal Account Information, Withdrawal Methods (+1 more)

### Community 64 - "ID Sandbox Guide"
Cohesion: 0.22
Nodes (8): Fitur Khusus Sandbox, Kredensial Sandbox, Lingkungan Sandbox, Panduan Pengujian Sandbox, Pengujian Dompet & Fitur, Pengujian Pembayaran, Siap ke Produksi?, Skenario Pengujian Komprehensif

### Community 65 - "Withdraw Account Validation"
Cohesion: 0.33
Nodes (9): Wallet Ownership Validation, GET /api/v1/withdraw-accounts/lists, Production Bank Verification, POST /api/v1/withdraw-accounts, DELETE /api/v1/withdraw-accounts/{id}, GET /api/v1/withdraw-accounts/{id}, Withdraw Account Management, GET /api/v1/withdraw-accounts (+1 more)

### Community 66 - "Wallet Balance Filters"
Cohesion: 0.28
Nodes (9): Wallet Ownership Validation, GET /api/v1/wallets/{uuid}, Smallest Currency Unit Amounts, GET /api/v1/wallets, Positive Balance Filter, GET /api/v1/withdraw-accounts, Wallet-Account Currency Match, Withdrawal Day Schedule (+1 more)

### Community 67 - "ID Refresh Token"
Cohesion: 0.22
Nodes (9): Refresh Token, Catatan Keamanan dan Keandalan, Contoh Kode, Detail Endpoint, Request, Request Body, Request Headers, Ringkasan (+1 more)

### Community 68 - "IP Whitelist UI Modal"
Cohesion: 0.28
Nodes (9): Active Status Checkbox, Add Whitelist Entry Button, Add IP to Whitelist Modal, Cancel Button, Optional Description Field, Expires At Datetime Picker, IP Address or CIDR Field, IP Range Field (+1 more)

### Community 69 - "QRIS Order Lifecycle"
Cohesion: 0.42
Nodes (9): POST api/v1/qris/create - 201, Release stock or cancel order, Handle failure, Finalize order, expired - past expiredAt, failed - not completed, pending - QR shown to payer, QRIS Status Lifecycle Flowchart (+1 more)

### Community 70 - "VA Order Lifecycle"
Cohesion: 0.33
Nodes (9): POST virtual-account/create 201, Expired Past expiredAt, Failed Not Completed, Finalize Order, Handle Failure, Paid or Completed Funds Received, Pending VA Details Shown to Payer, Release Reservation or Cancel Order (+1 more)

### Community 71 - "Support Error Codes"
Cohesion: 0.31
Nodes (8): Composite Response Code, Response Structure, Transaction Service Code 05, API Error Codes, Error Codes, Error Response Format, HTTP Status Codes, Support

### Community 72 - "Check Withdraw Docs"
Cohesion: 0.25
Nodes (7): Check Withdrawal Status, Code Examples, Path Parameters, Request Headers, Responses, Withdrawal Statuses, Withdrawal Statuses

### Community 73 - "Generate QRIS Docs"
Cohesion: 0.25
Nodes (7): Code Examples, Error Response, Initiate QRIS Payment, QRIS, Request Headers, Request Parameters, Success Response

### Community 74 - "Response Codes Docs"
Cohesion: 0.25
Nodes (7): API Response Codes Documentation, Common Response Code Examples, HTTP Status Code Reference, Notes, Overview, Response Structure, Service Codes

### Community 75 - "Withdrawal Statuses"
Cohesion: 0.25
Nodes (8): withdraw Event, awaiting_fi_process, awaiting_pg_process, completed, expired, failed, refunded, Withdrawal Statuses

### Community 76 - "ID Support Error Codes"
Cohesion: 0.29
Nodes (7): 403 Access Denied, API Error Codes, Dukungan, Error Response Format, Format Error Response, HTTP Status Codes, Kode Error

### Community 77 - "ID Withdrawal Request"
Cohesion: 0.25
Nodes (7): Body Permintaan, Contoh Kode, Contoh Metode Pembayaran, Header Permintaan, Membuat Permintaan Penarikan, Respons Berhasil, Respons Galat

### Community 78 - "QRIS Payment Service"
Cohesion: 0.29
Nodes (8): QRIS, POST /api/v1/initiate-payment-qris, QRIS qrImage, QRIS, QRIS ref_trx, Payment Service Code 02, receive_payment Webhook Event, Withdrawal ref_trx

### Community 79 - "ID HTTP Error Codes"
Cohesion: 0.32
Nodes (8): 403 IP Not Whitelisted, Dukungan & Kode Error, API Error Codes, Dukungan, Format Error Response, HTTP Status Codes, Kode Error, HTTP Status Codes

### Community 80 - "ID Withdrawal API"
Cohesion: 0.25
Nodes (8): API Penarikan Dana, Body Permintaan, Contoh Kode, Contoh Metode Pembayaran, Header Permintaan, Membuat Permintaan Penarikan, Respons Berhasil, Respons Galat

### Community 81 - "ID Success Error Responses"
Cohesion: 0.25
Nodes (8): `400 Bad Request`, `401 Unauthorized`, `422 Validation Error`, `500 Internal Server Error`, Field Respons, Respons Berhasil (`200 OK`), Respons Error, Response

### Community 82 - "ID HTTP Error Responses"
Cohesion: 0.25
Nodes (8): `400 Bad Request`, `401 Unauthorized`, `422 Validation Error`, `500 Internal Server Error`, Berhasil (`200 OK`), Field Respons, Respons Error, Response

### Community 83 - "Environment Separation"
Cohesion: 0.25
Nodes (8): Pemisahan Environment, Production https://production.mawarpay.com, Sandbox https://sandbox.mawarpay.com, Production, Sandbox, Set Status Hanya Sandbox, POST /api/v1/transaction-set-status, Sandbox-Only Status Simulation

### Community 84 - "ID Wallet List v1"
Cohesion: 0.29
Nodes (8): Pengantar, Catatan Keamanan dan Keandalan, Contoh Kode, Daftar Wallet, Detail Endpoint, Request, Request Headers, Ringkasan

### Community 85 - "Payout Polling States"
Cohesion: 0.25
Nodes (8): awaiting_fi_process / awaiting_pg_process / awaiting_user_action / awaiting_admin_approval, completed — payout finalized, POST /withdraw — 201 Created, Stop polling — final success, Stop polling — reconciled, failed — process terminated, pending, refunded — funds returned to merchant balance

### Community 86 - "Vercel Site Config"
Cohesion: 0.25
Nodes (7): buildCommand, devCommand, framework, headers, installCommand, outputDirectory, trailingSlash

### Community 87 - "API Headers Standard"
Cohesion: 0.32
Nodes (8): API Endpoints, Endpoint Format Standard, Endpoint Index, Request, Best Practices, Header Usage Example, Headers, Standard Headers

### Community 88 - "HTTP Error Responses"
Cohesion: 0.25
Nodes (8): `400 Bad Request`, `401 Unauthorized`, `422 Validation Error`, `500 Internal Server Error`, Error Responses, Response, Response Fields, Success Response (`200 OK`)

### Community 89 - "ID Set Payment Status"
Cohesion: 0.29
Nodes (6): API Cek Status Transaksi, Contoh Kode, Header Permintaan, Manajemen Status Pembayaran, Parameter Path, Status Pembayaran yang Tersedia

### Community 90 - "v1 Generate QRIS"
Cohesion: 0.29
Nodes (6): Code Examples, Error Response, Initiate QRIS Payment, Request Headers, Request Parameters, Success Response

### Community 91 - "v1 Withdrawal Request"
Cohesion: 0.29
Nodes (6): Code Examples, Create Withdrawal Request, Payment Method Examples, Request Body, Request Headers, Responses

### Community 92 - "Response Code Integration"
Cohesion: 0.33
Nodes (7): Best Practices, Build and Parse Logic, Example, Integration Guidance, Overview, Response Code, Service Codes

### Community 93 - "Support Page"
Cohesion: 0.33
Nodes (5): API Error Codes, Error Codes, Error Response Format, HTTP Status Codes, Support

### Community 94 - "Wallet Details Docs"
Cohesion: 0.33
Nodes (5): Code Examples, Get Wallet Details, Path Parameters, Request Headers, Responses

### Community 95 - "Wallet List Docs"
Cohesion: 0.33
Nodes (5): Code Examples, List Wallets, Request Headers, Response Fields, Responses

### Community 96 - "Payment Webhook Events"
Cohesion: 0.40
Nodes (6): receive_payment Event, HMAC-SHA256 Signature Verification, Webhook IPN, Payment Webhook Events, Webhook Retry Logic, Webhook Payment Events

### Community 97 - "ID Wallet Details Page"
Cohesion: 0.33
Nodes (5): Contoh Kode, Detail Dompet, Header Permintaan, Path Parameters, Responses

### Community 98 - "ID Wallet List Page"
Cohesion: 0.33
Nodes (5): Contoh Kode, Daftar Dompet, Field Response, Header Permintaan, Responses

### Community 99 - "ID Auth Error Responses"
Cohesion: 0.33
Nodes (6): `401 Unauthorized`, `500 Internal Server Error`, Berhasil (`200 OK`), Field Respons, Respons Error, Response

### Community 100 - "ID Server Error Responses"
Cohesion: 0.33
Nodes (6): `401 Unauthorized`, `500 Internal Server Error`, Berhasil (`200 OK`), Field Respons, Respons Error, Response

### Community 101 - "Auth Success Errors"
Cohesion: 0.33
Nodes (6): `401 Unauthorized`, `500 Internal Server Error`, Error Responses, Response, Response Fields, Success (`200 OK`)

### Community 102 - "IP Whitelist Form UI"
Cohesion: 0.40
Nodes (5): Add IP Address Submit Button, Add New IP Address Form, Back to List Button, Brand-Scoped IP Whitelist, Stacked Labeled Form Layout

### Community 103 - "MawarPay Brand Lockup"
Cohesion: 0.60
Nodes (5): Rose-in-Wallet Icon, MawarPay Brand Lockup, Red Rose Motif, Wallet Motif, mawarpay Wordmark

### Community 104 - "Set Status Form UI"
Cohesion: 0.70
Nodes (5): Set Payment Status Form, Set Payment Status Gradient Header, ID Transaksi Input, Payment Status Dropdown, Update Payment Status Button

### Community 105 - "Easy to Use Illustration"
Cohesion: 0.50
Nodes (5): Docusaurus Keytar Mascot, Easy to Use Illustration, Person on Hill, Laptop Keyboard, Snow-Capped Mountain Range

### Community 106 - "Powered by React Illustration"
Cohesion: 0.60
Nodes (5): Docusaurus Keytar Mascot, Powered by React Illustration, React Logo, Seated Developer, Triple-Monitor Workstation

### Community 107 - "v1 Auth Intro"
Cohesion: 0.40
Nodes (4): Authentication, Required Credentials, Tutorial Intro, Auth Service Code 01

### Community 108 - "Request Validation Rules"
Cohesion: 0.40
Nodes (5): Code Example, Request, Request Body, Request Headers, Validation Rules (Recommended)

### Community 109 - "ID Tutorial Intro"
Cohesion: 0.50
Nodes (3): Autentikasi, Kredensial yang Diperlukan, Pengantar Tutorial

### Community 110 - "Docusaurus Social Card"
Cohesion: 0.67
Nodes (4): Docusaurus Dinosaur Mascot, Docusaurus Open Graph Social Card, Build Optimized Websites Tagline, Docusaurus Gradient Wordmark

### Community 111 - "Rose Envelope Brand Icon"
Cohesion: 0.67
Nodes (4): Rose and Envelope Brand Icon, Navy Envelope Base, Gold Postage Stamp, Gold-Trimmed Red Rose

### Community 112 - "Docusaurus Cactus Logo"
Cohesion: 0.67
Nodes (4): Cactus Arm Blossoms, Green Cactus Mascot, Docusaurus Site Logo, Yellow Lined Notepad

### Community 113 - "MawarPay Favicon"
Cohesion: 0.67
Nodes (4): MawarPay Favicon, Gold Card-Chip Accent, Gold-Outlined Red Rose, Navy Wallet Base

### Community 114 - "SDK Code Examples"
Cohesion: 0.67
Nodes (4): Example Naming Conventions, Integration Workflow, SDK and Code Examples, Suggested Internal SDK Components

### Community 117 - "Docusaurus Logo"
Cohesion: 1.00
Nodes (3): Docusaurus Logo, Docusaurus Dinosaur Mascot, Yellow Documentation Notepad

### Community 118 - "MawarPay Light Logo"
Cohesion: 1.00
Nodes (3): Mawarpay Light Logo, Rose-Wallet Emblem, Mawarpay Wordmark

## Ambiguous Edges - Review These
- `Base URL and Environment` → `POST /api/v1/transactions`  [AMBIGUOUS]
  versioned_docs/version-2.0.0/base-url-environment.md · relation: conceptually_related_to
- `receive_payment Event` → `Payment Webhook Events`  [AMBIGUOUS]
  i18n/id/docusaurus-plugin-content-docs/current/webhooks.md · relation: conceptually_related_to
- `receive_payment Event` → `Webhook Payment Events`  [AMBIGUOUS]
  i18n/id/docusaurus-plugin-content-docs/version-1.0.0/webhooks.md · relation: conceptually_related_to
- `X-IPN-SIGNATURE Header` → `x-signature Header`  [AMBIGUOUS]
  i18n/id/docusaurus-plugin-content-docs/version-1.0.0/webhooks.md · relation: conceptually_related_to

## Knowledge Gaps
- **802 isolated node(s):** `Code Examples`, `Request Headers`, `Responses`, `Code Examples`, `Request Body` (+797 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Base URL and Environment` and `POST /api/v1/transactions`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `receive_payment Event` and `Payment Webhook Events`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `receive_payment Event` and `Webhook Payment Events`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `X-IPN-SIGNATURE Header` and `x-signature Header`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `X-API-KEY` connect `API Authentication Intro` to `Check Withdraw Status`, `Protected Endpoint Headers`, `v1 Auth Intro`, `Sandbox vs Production`, `QRIS Payment Service`, `ID Error Handling FAQ`, `Payment Status Management`, `QRIS Payment Initiation`, `ID API Introduction`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `FAQ` connect `ID Error Handling FAQ` to `Protected Endpoint Headers`, `API Authentication Intro`, `ID Create QRIS`, `Environment Separation`, `Transaction Reference Fields`, `ID Environment Changelog`, `ID Payin Status Polling`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Why does `Introduction` connect `Sandbox vs Production` to `Virtual Account Create`, `Auth Error Responses`, `JWT Auth Model`, `Check Transaction Status`, `API v1 Overview`, `Banks List Payout`, `Login Endpoint`, `QRIS Create Lifecycle`, `Create Withdrawal API`, `Response Code Integration`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._