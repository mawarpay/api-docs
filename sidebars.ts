import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [
        'base-url-environment-v1',
        'headers-v1',
        'rate-limits-v1',
        'error-handling-v1',
        'api-endpoints-v1',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: false,
      items: [
        {type: 'doc', id: 'ip-allowlist', label: 'API Client IP Allowlist'},
      ],
    },
    {
      type: 'category',
      label: 'Settings',
      collapsed: false,
      items: [
        {type: 'doc', id: 'api-keys', label: 'API Keys'},
        {type: 'doc', id: 'webhooks', label: 'Webhooks'},
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      collapsed: false,
      items: ['auth-login-v1', 'auth-refresh-v1'],
    },
    {
      type: 'category',
      label: 'Payout',
      collapsed: false,
      items: ['withdraw'],
    },
    {
      type: 'category',
      label: 'Pay-in',
      collapsed: false,
      items: ['qris-create-v1', 'virtual-account-create'],
    },
    {
      type: 'category',
      label: 'Transaction status',
      collapsed: false,
      items: ['check-transaction-v1'],
    },
    {
      type: 'category',
      label: 'Sandbox',
      collapsed: false,
      items: ['set-status-v1'],
    },
    {
      type: 'category',
      label: 'Reference data',
      collapsed: false,
      items: ['banks-list-v1', 'wallets-list-v1'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'response-code-v1',
        'sdk-code-examples-v1',
        'faq-v1',
        'changelog-v1',
      ],
    },
  ],
};

export default sidebars;
