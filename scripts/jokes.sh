#clear

#### Jokes Category ####
# Uncomment ONE of the following:


if [[ "$1" = "oneliners" ]]; then
    JokeCategory='oneliners'  # - http://www.randomjoke.com/topic/oneliners.php
elif [[ "$1" = "news" ]]; then
    JokeCategory='news'  # - http://www.randomjoke.com/topic/news.php
elif [[ "$1" = "signs" ]]; then
    JokeCategory='signs'  # - http://www.randomjoke.com/topic/signs.php
elif [[ "$1" = "nerd" ]]; then
    JokeCategory='nerd'  # - http://www.randomjoke.com/topic/nerd.php
elif [[ "$1" = "professional" ]]; then
    JokeCategory='professional'  # - http://www.randomjoke.com/topic/professional.php
elif [[ "$1" = "quotes" ]]; then
    JokeCategory='quotes'  # - http://www.randomjoke.com/topic/quotes.php
elif [[ "$1" = "lightbulb" ]]; then
    JokeCategory='lightbulb'  # - http://www.randomjoke.com/topic/lightbulb.php
elif [[ "$1" = "couples" ]]; then
    JokeCategory='couples'  # - http://www.randomjoke.com/topic/couples.php
elif [[ "$1" = "riddles" ]]; then
    JokeCategory='riddles'  # - http://www.randomjoke.com/topic/riddles.php
elif [[ "$1" = "religion" ]]; then
    JokeCategory='religion'  # - http://www.randomjoke.com/topic/religion.php
elif [[ "$1" = "gross" ]]; then
    JokeCategory='gross'  # - http://www.randomjoke.com/topic/gross.php
elif [[ "$1" = "blonde" ]]; then
    JokeCategory='blonde'  # - http://www.randomjoke.com/topic/blonde.php
elif [[ "$1" = "politics" ]]; then
    JokeCategory='politics'  # - http://www.randomjoke.com/topic/politics.php
elif [[ "$1" = "doit" ]]; then
    JokeCategory='doit'  # - http://www.randomjoke.com/topic/doit.php
elif [[ "$1" = "laws" ]]; then
    JokeCategory='laws'  # - http://www.randomjoke.com/topic/laws.php
elif [[ "$1" = "defs" ]]; then
    JokeCategory='defs'  # - http://www.randomjoke.com/topic/defs.php
elif [[ "$1" = "dirty" ]]; then
    JokeCategory='dirty'  # - http://www.randomjoke.com/topic/dirty.php
elif [[ "$1" = "ethnic" ]]; then
    JokeCategory='ethnic'  # - http://www.randomjoke.com/topic/ethnic.php
elif [[ "$1" = "zippergate" ]]; then
    JokeCategory='zippergate'  # - http://www.randomjoke.com/topic/zippergate.php
else
    JokeCategory='haha'  # - http://www.randomjoke.com/topic/haha.php
fi

recordid='/tmp/'$JokeCategory'id'
category=$JokeCategory
file1="/tmp/jokes_full_page.txt"
file2="/tmp/jokes_only.txt"
file3="/tmp/jokes_.txt"

if [ -f "$recordid"  ];
then
    id=`cat $recordid`
fi

lynx -dump "http://www.randomjoke.com/topic/$category.php?$id" > $file1 2>&1

grep "$category.php?" $file1 | grep -v '#' | cut -d'?' -f2 | head -1 > $recordid

sed -n -e '/next joke|/,/Jokes served./p' $file1 > $file2
sed -i '/next joke/d' $file2; sed -i '/Jokes served./d' $file2

cat $file2 >> $file3
cat $file3

rm /tmp/jokes_*
exit
