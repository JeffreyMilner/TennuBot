var config = require('../config/mibbit.json');

var fs = require('fs');

module.exports = function TennuHangmanModule (tennu) {
    channel = "";
    guesses = 0;
    seconds = 120; // 2 min
    running = false;
    lives = 10;

    function hangman (command) {
        if(!running) {
            channel = command.channel;
            guesses = 0;
            guessed = " ";

            wordToGuess = secretWord();
            tennu.say(channel, "You have " + seconds + " seconds to find the following word");
            displayToGuess();
            tennu.say(channel, "But don't forget, you have only " + lives + " lives.");
            tennu.say(channel, "To guess, use the command: " + config.trigger + "guess");
            timer.start();
        } else {
            tennu.say(channel, "There is already a hangman puzzle waiting to be solved, please solve that one before trying to start another")
        }
    }

    function displayToGuess() {  
        wordSoFar="";
        for(ix = 0; ix < wordToGuess.length; ++ix) {
            if(guessed.indexOf(wordToGuess.charAt(ix)) != -1) {
                wordSoFar += (wordToGuess.charAt(ix) + " ");
            } else {
                wordSoFar += "_ ";
            }
        }
        tennu.say(channel, "The word so far is: " + wordSoFar + " and these letters have been guessed: " + displayGuessed());
    }   

    function winner() {
        for(ix = 0; ix < wordToGuess.length; ix++) {
            if(guessed.indexOf(wordToGuess.charAt(ix)) == -1) {
                return false;
            }
        }
        return true;
    }

    function secretWord() {
        target = "/home/jeff/bots/bot3-tennu/lists/lib.txt";
        wordArray = fs.readFileSync(target).toString().split("\n");
        for(ix in wordArray) {
            wordArray[ix] = wordArray[ix].toString().replace(/(\r\n|\n|\r)/gm,"");
        }
        return wordArray[Math.floor(Math.random() * wordArray.length)];
    }

    function displayGuessed() {
        guessedarray = guessed.split('');
        guessedarray.sort();
        guessed = guessedarray.join('');
        //tennu.say(channel, "you have guessed these letters so far:" + guessed);
        return guessed;
    }

    function guess (command) {
        channel = command.channel;
        if(!running) {
            tennu.say(channel, "There is no hangman puzzle waiting to be solved, please use " + config.trigger + "hangman to start a puzzle");
        } else {
            if(command.args == "" || command.args == null) {
                tennu.say(channel, "You must enter a letter!");
                return 0;
            }
            letter = command.args[0][0];
            if(guessed.indexOf(letter) == -1) {
                guessed = guessed + letter;
            } else {
                tennu.say(channel, "You have already used the letter: " + letter);
            }
            if(wordToGuess.indexOf(letter) == -1) {
                guesses++;
            }
            displayToGuess();
            displayGuessed();
            if(guesses >= lives) {
                end(command.sender, "dead");
            }
            if(winner()) {
                end(command.sender, "won");
            }
        } 
    }

    function end(solver, reason) {
        timer.stop();
        if(reason == "won") {
            tennu.say(channel, solver + " has solved the puzzle, the word was " + wordToGuess);
        } else if(reason == "time") {
            tennu.say(channel, "Time's up! Correct solution was: " + wordToGuess);
        } else if(reason = "dead") {
            tennu.say(channel, "You have run out of lives! Correct solution was: " + wordToGuess);
        }
    }

    var timer = new Countdown({  
        seconds:seconds, 
        onUpdateStatus: function(sec) {
            if(sec <= 5) {
                tennu.say(channel, sec);
            }
        },
        onCounterEnd: function() {
            end("time");
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
            "!guess" : guess,
            "!hangman" : hangman,
        }
    };
};
