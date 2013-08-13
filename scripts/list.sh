if [[ "$1" = "chuck" ]]; then
    cat ~/bots/bot3-tennu/lists/chucky.txt | shuf | head -1
elif [[ "$1" = "topic" ]]; then
    cat ~/bots/bot3-tennu/lists/topic.txt | shuf | head -1
elif [[ "$1" = "quote" ]]; then
    cat ~/bots/bot3-tennu/lists/quotes.txt | shuf | head -1
elif [[ "$1" = "anagram" ]]; then
    cat ~/bots/bot3-tennu/lists/lib.txt | shuf | head -1
elif [[ "$1" = "hangman" ]]; then
    cat ~/bots/bot3-tennu/lists/lib.txt | shuf | head -1
elif [[ "$1" = "joke" ]]; then
    category=$2
    file="/tmp/joke.txt"

    lynx -dump "http://www.randomjoke.com/topic/$category.php" > $file 2>&1

    sed -i -n -e '/next joke|/,/Jokes served./p' $file  # Deletes everything from next joke to jokes served
    sed -i '/next joke/d' $file                         # Deletes the line with next joke
    sed -i '/Jokes served./d' $file                     # Deletes the line with jokes served
    cat $file

    rm $file
    exit
elif [[ "$1" = "fact" ]]; then
    file="/tmp/fact.txt"

    wget -q -O $file http://freehostedscripts.net/fq.php

    sed -i 's/\(.\{24\}\)//' $file     # Gets rid of the first 24 characters
    sed -i 's/<br>.*$//' $file         # Gets rid of everything after the <br>

    cat $file
    rm $file
elif [[ "$1" = "trans" ]]; then
    file="/tmp/translate.txt"

    url=$2

    curl -A "Mozilla/5.0" -O $file $url > $file

    sed -i 's/\(.\{24\}\)//' $file     # Gets rid of the first 24 characters
    sed -i 's/\/.*$//' $file         # Gets rid of everything after the /

    cat $file
    rm $file
elif [[ "$1" = "horo" ]]; then
    file="/tmp/horo.txt"
    
    category=$2

    lynx -dump "http://my.horoscope.com/astrology/free-daily-horoscope-$category.html" > $file 2>&1

    sed -i '0,/twitter.png/d' $file     # Deletes everything from the start to "twitter.png"
    sed -i '/ADD/,$d' $file             # Deletes all from ADD to the end
    sed -i '/^$/d' $file                # Deletes any blank line

    cat $file
    rm $file
else
    echo "Not a current choice"
fi
