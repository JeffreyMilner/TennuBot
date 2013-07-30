file="/tmp/fact.txt"

wget -q -O $file http://freehostedscripts.net/fq.php

sed -i 's/\(.\{24\}\)//' $file     # Gets rid of the first 24 characters
sed -i 's/<br>.*$//' $file         # Gets rid of everything after the <br>

cat $file
