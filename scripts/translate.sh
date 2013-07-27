#!/bin/bash 

file="/tmp/translate.txt"

url=$1

curl -A "Mozilla/5.0" -O $file $url > $file


sed -i 's/\(.\{24\}\)//' $file     # Gets rid of the first 24 characters
sed -i 's/\/\sstart.*$//' $file         # Gets rid of everything after the /

cat $file
