#!/bin/bash
if [ $# -ne 1 ]; then
  echo "Usage: $0 file.html"
  exit 1
fi
if [ ! -f $1 ]; then
  echo "File \"$1\" does not exist.  ***Aborting***"
  exit 2
else
  pandoc $1 | w3m -T text/html
fi
