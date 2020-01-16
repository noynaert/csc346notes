#!/bin/bash
if [ $# -ne 1 ]; then
  echo "Usage: $0 file.html | url"
  exit 1
fi
if [ -f $1 ]; then
  pandoc $1 | w3m -T text/html
elif grep "https:" <<< "$1" ; then
  curl -s $1 | pandoc | w3m -T text/html
else
  echo "File or URL \"$1\" does not exist.  ***Aborting***"
  exit 2
fi
