#!/bin/sh

[ "$(git symbolic-ref --short -q HEAD)" = "$1" ] && exit 0

exec >&2
echo
echo 'Releases must be done on the `'"$1"'` branch. Please ensure it is checked out'
echo

exit 1
