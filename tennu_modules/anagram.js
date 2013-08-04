var config = require('../config/mibbit.json');

var fs = require('fs');

module.exports = function TennuAnagramModule (tennu) {

    String.prototype.shuffle = function () {
        var a = this.split(""),
            n = a.length;

        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    channel = "";
    realWord = "";
    shuffeledWord = "";
    seconds = 60;
    solved = false;
    words = ["anagram", "seashell"];
    running = false;
    wordArray = [];

    function anagram (command) {
        if(!running) {
            channel = command.channel;
            solved = false;
            target = "/home/jeff/bots/bot3-tennu/lists/lib.txt";

            wordArray = fs.readFileSync(target).toString().split("\n");
            for(i in wordArray) {
                wordArray[i] = wordArray[i].toString().replace(/(\r\n|\n|\r)/gm,"");
            }

            realWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            shuffeledWord = realWord.shuffle();
            tennu.say(channel, "You have " + seconds + " seconds to unscramble this word: \"" + shuffeledWord + "\"   Using the " + config.trigger + "solve <answer> command");
            timer.start();
        } else {
            tennu.say(channel, "There is already an anagram waiting to be solved, please solve that before trying to start another")
        }
    }

    function solve (command) {
        channel = command.channel;
        if(!running) {
            tennu.say(channel, "There is no anagram waiting to be solveed, please use " + config.trigger + "anagram to start a puzzle");
        } else if(command.args[0] == realWord) {
            solved = true;
            end(command.sender);
        } else {
            tennu.say(channel, "I'm sorry, but that was the wrong word, please try again")
        }
    }

    function end(solver) {
        timer.stop();
        if(solved) {
            tennu.say(channel, solver + " has solved the puzzle, the word was " + realWord);
        } else {
            tennu.say(channel, "Time's up! Correct solution was: " + realWord);
        }
    }

    var timer = new Countdown({  
        seconds:seconds, 
        onUpdateStatus: function(sec){
            if(sec <= 5) {
                tennu.say(channel, sec);
            }
        },
        onCounterEnd: function(){
            end("no one");
        }  
    });

    function Countdown(options) {
        var timer,
            instance = this,
            seconds = options.seconds,
            updateStatus = options.onUpdateStatus,
            counterEnd = options.onCounterEnd;

        function decrementCounter() {
                updateStatus(seconds);
                if (seconds === 0) {
                    counterEnd();
                    instance.stop();
                }
                seconds--;
        }

        this.start = function () {
            clearInterval(timer);
            timer = 0;
            running = true;
            seconds = options.seconds;
            timer = setInterval(decrementCounter, 1000);
        };

        this.stop = function () {
            running = false;
            clearInterval(timer);
        };
    }

    return {
        handlers : {
            "!anagram" : anagram,
            "!solve" : solve
        }
    };
};
