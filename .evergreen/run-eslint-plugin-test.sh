#!/bin/bash

if [ -z "$NODE_VERSION" ]; then
  echo "NODE_VERSION environment variable must be specified"
  exit 1
fi

NODE_ARTIFACTS_PATH="${PROJECT_DIRECTORY}/node-artifacts"

export PATH="/opt/mongodbtoolchain/v2/bin:$PATH"
export NVM_DIR="${NODE_ARTIFACTS_PATH}/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

cd etc/eslint/no-bigint-usage
npm install
npm run test
