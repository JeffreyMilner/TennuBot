#!/bin/bash 

file="/tmp/translate.txt"

url=$1

curl -A "Mozilla/5.0" -O $file $url > $file

sed -i 's/\[\[\["\([^"]*\).*/\1/' $file

cat $file
