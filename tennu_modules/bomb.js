var config = require('../config/mibbit.json');

module.exports = function TennuBombModule (tennu) {

    time = 10;
    defused = false;
    colorList = ["red", "blue", "green", "yellow", "black"];
    defuseColor = "";
    reciever = "";
    channel = "";
    running = false;

    var timer = new Countdown({  
        seconds:time, 
        onUpdateStatus: function(sec){
            if(sec <= 5) {
                tennu.say(channel, sec);
            }
        },
        onCounterEnd: function(){
            det(channel);
        }  
    });

    function bomb (command) {
        channel = command.channel;
        if(command.args[0] == "" || command.args[0] == null){
            //tennu.say(channel, "You need to specify a target " + command.sender);
            reciever = command.sender;
        } else if(running) {
            tennu.say(channel, "There is already a bomb in play") 
        } else {
            running = true;
            reciever = command.args[0];
            tennu.say(channel, reciever + " recieves the bomb. You have " + time + " seconds to defuse it using by cutting the right cable with (" + config.trigger + "cut <color>).");
            tennu.say(channel, "Your choices are: " + colorList.join(", "));
            defuseColor = colorList[Math.floor(Math.random() * colorList.length)];
            timer.start();
        }
    }

    function cut (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(channel, "You need to specify a color to cut " + command.sender);
        } else if(!running) {
            tennu.say(channel, "There is currently no bomb to cut into little pieces");
        } else if(command.sender != reciever) {
            tennu.say(channel, "The bomb is not yours to defuse");
        } else {
            if(colorList.contains(command.args[0])) {
                if(command.args[0] != defuseColor) {
                    timer.stop();
                    det(channel); 
                } else {
                    tennu.say(channel, reciever + " has defused he bomb in time.");
                    reciever = "";
                }
            } else {
                tennu.say(channel, command.args[0] + " is not one of the availible colors");
            }
        }
    }

    function det (channel) {
        tennu.say(channel,"The bomb has exploded in " + reciever + "'s hands, the correct color would have been: " + defuseColor);
        defused = true;
        reciever = "";
    }

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
            running = true;
            timer = 0;
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
            "!bomb" : bomb,
            "!cut" : cut
        }
    };
};
