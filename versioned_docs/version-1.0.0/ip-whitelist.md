---
id: ip-whitelist
slug: /settings/ip-whitelist
title: IP Whitelist
description: Allow API access from specific IP addresses or CIDR ranges in the MawarPay merchant portal.
sidebar_position: 3
displayed_sidebar: tutorialSidebar
---

# IP Whitelist

Restrict merchant API access to known server IPs. Add each address or CIDR on the merchant detail page, then keep the list in sync with the hosts that send `X-API-KEY` requests.

Create your [API key](/docs/settings/api-keys) first, then open the **IP Whitelist** tab on the same merchant.

## Add an IP from the portal

1. Sign in at [portal.mawarpay.com](https://portal.mawarpay.com).
2. Open the **Merchants** menu.
3. Click a merchant name in the list to open merchant detail.
4. Open the **IP Whitelist** tab.
5. Click **Add IP**.
6. Fill the form, then click **Add**.

## Add IP to whitelist form

Clicking **Add IP** opens this form:

![Add IP to whitelist form](/img/ip-whitelist-form.png)

| Field | Required | What to enter |
|---|---|---|
| IP address or CIDR | Yes | Single address, for example `182.253.240.95`, or a CIDR. |
| Description | No | Optional note so your team can identify the host. |
| IP range | No | CIDR range when you allow a subnet, for example `10.0.0.0/24`. |
| Type | Yes | Entry kind. Use **Individual** for a single IP. |
| Expires at | No | Optional date and time. Leave empty for no expiry. |
| Active | No | Keep checked so the entry is enforced after you click **Add**. |

Click **Add** to save the entry, or **Cancel** to close the form without changing the list.

## After you add an IP

The **IP Whitelist** tab shows a success banner and the whitelist table:

![IP Whitelist tab in Merchant Detail](/img/ip-whitelist-list.png)

| Column | Description |
|---|---|
| IP / CIDR | Address or range you added |
| Description | Note from the form, or `—` if empty |
| Type | Entry kind, for example `individual` |
| Active | `Yes` when the entry is enforced |
| Expires at | Expiry from the form, or `—` if none |
| Created | When the entry was added |
| Actions | **Edit**, toggle active, and **Delete** |

A green banner confirms **IP added to whitelist** after a successful add.

## Next dashboard settings

If you have not done so yet, create an [API key](/docs/settings/api-keys) and configure [Webhook Settings](/docs/webhooks-v1) on the same merchant detail page.
