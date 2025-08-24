#!/usr/bin/env bash
set -e
BASE="${1:-https://delhi-derma-clinic.vercel.app}"
SECRET="ddc_reval_2025_ZS9Gk3u4"
echo "Revalidating on $BASE ..."
curl -sS -X POST "$BASE/api/revalidate?secret=$SECRET&path=/" && echo
curl -sS -X POST "$BASE/api/revalidate?secret=$SECRET&path=/services" && echo
echo "Done."
