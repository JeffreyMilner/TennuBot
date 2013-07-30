if [[ "$1" = "chuck" ]]; then
    cat ~/bots/bot3-tennu/lists/chucky.txt | shuf | head -1
elif [[ "$1" = "topic" ]]; then
    cat ~/bots/bot3-tennu/lists/topic.txt | shuf | head -1
elif [[ "$1" = "quotes" ]]; then
    cat ~/bots/bot3-tennu/lists/quotes.txt | shuf | head -1
else
    echo "Not a current choice"
fi
