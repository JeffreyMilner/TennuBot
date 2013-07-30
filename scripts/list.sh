if [[ "$1" = "chuck" ]]; then
    cat ~/bots/bot3-tennu/lists/chucky.txt | shuf | head -1
elif [[ "$1" = "topic" ]]; then
    cat ~/bots/bot3-tennu/lists/topic.txt | shuf | head -1
elif [[ "$1" = "quote" ]]; then
    cat ~/bots/bot3-tennu/lists/quotes.txt | shuf | head -1
elif [[ "$1" = "joke" ]]; then
    category=$2
    file="/tmp/joke.txt"

    lynx -dump "http://www.randomjoke.com/topic/$category.php" > $file 2>&1

    sed -i -n -e '/next joke|/,/Jokes served./p' $file
    sed -i '/next joke/d' $file
    sed -i '/Jokes served./d' $file
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
else
    echo "Not a current choice"
fi
