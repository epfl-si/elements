#!/bin/sh

set -e

CURRENT_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

# Check if the environment is ready for publishing ===========================
if [ "$CURRENT_BRANCH" != "dev" ]
then
    echo "⚠️  Please run this script from the dev branch"
    exit 1;
fi

if [[ $(git status -s) ]]
then
    echo "⚠️  The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

if [ $2 ]
then
  npm whoami || { echo "⚠️  You must be logged in to NPM to push a new release" ; exit 1; }
fi

jq --version || { echo "⚠️  You need jq installed on your machine (brew install jq)" ; exit 1; }

# Proceed =====================================================================
echo "rebuild frontend assets"
yarn build

