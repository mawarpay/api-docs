#!/usr/bin/env bash
set -euo pipefail

REPO="${GITHUB_REPO:-mawarpay/api-docs}"
DEFAULT_PROJECT_NAME="api-docs"

die() {
  echo "error: $*" >&2
  exit 1
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "$1 is required but not installed"
}

prompt() {
  local var_name=$1
  local message=$2
  local default=${3:-}
  local secret=${4:-false}
  local value=""

  if [[ -n "$default" ]]; then
    printf '%s [%s]: ' "$message" "$default"
  else
    printf '%s: ' "$message"
  fi

  if [[ "$secret" == "true" ]]; then
    IFS= read -rs value
    echo
  else
    IFS= read -r value
  fi

  if [[ -z "$value" && -n "$default" ]]; then
    value=$default
  fi

  if [[ -z "$value" ]]; then
    die "$var_name is required"
  fi

  printf -v "$var_name" '%s' "$value"
}

main() {
  require_cmd gh

  if ! gh auth status >/dev/null 2>&1; then
    die "GitHub CLI is not authenticated. Run: gh auth login"
  fi

  echo "Setting GitHub Actions secrets for ${REPO}"
  echo
  echo "You will need:"
  echo "  1. Cloudflare API token with Cloudflare Pages -> Edit"
  echo "     https://dash.cloudflare.com/profile/api-tokens"
  echo "  2. Cloudflare account ID (Workers & Pages -> Overview -> Account ID)"
  echo "     https://dash.cloudflare.com/"
  echo "  3. Cloudflare Pages project name (this repo uses wrangler name: ${DEFAULT_PROJECT_NAME})"
  echo

  prompt CLOUDFLARE_API_TOKEN "Cloudflare API token" "" true
  prompt CLOUDFLARE_ACCOUNT_ID "Cloudflare account ID"
  prompt CLOUDFLARE_PAGES_PROJECT_NAME "Cloudflare Pages project name" "$DEFAULT_PROJECT_NAME"

  echo
  echo "Saving secrets to ${REPO}..."

  printf '%s' "$CLOUDFLARE_API_TOKEN" | gh secret set CLOUDFLARE_API_TOKEN --repo "$REPO"
  printf '%s' "$CLOUDFLARE_ACCOUNT_ID" | gh secret set CLOUDFLARE_ACCOUNT_ID --repo "$REPO"
  printf '%s' "$CLOUDFLARE_PAGES_PROJECT_NAME" | gh secret set CLOUDFLARE_PAGES_PROJECT_NAME --repo "$REPO"

  echo
  echo "Secrets configured:"
  gh secret list --repo "$REPO" | grep 'CLOUDFLARE_' || true

  echo
  read -r -p "Trigger Deploy to Cloudflare Pages workflow now? [y/N] " run_now
  if [[ "${run_now,,}" == "y" || "${run_now,,}" == "yes" ]]; then
    gh workflow run cloudflare-pages-deploy.yml --repo "$REPO" --ref main
    echo "Workflow triggered. Check status with:"
    echo "  gh run list --repo ${REPO} --workflow cloudflare-pages-deploy.yml --limit 1"
  else
    echo "Done. Push to main or run manually:"
    echo "  gh workflow run cloudflare-pages-deploy.yml --repo ${REPO} --ref main"
  fi
}

main "$@"
