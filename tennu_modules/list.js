var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function TennuChuckModule (tennu) {

    function list (channel) {
        child = exec(target, function (error, stdout, stderr) {
            output = stdout.toString().replace(/(\r\n|\n|\r)/gm," ");
            output = output.replace(/(\s+|\t)/gm, " ");
            output = output.trim();
            outArray = output.match(/.{1,450}/g);
            for(ix = 0; ix < outArray.length; ix++) {
                tennu.say(channel, outArray[ix]);
            }
        }); 
    }

    function chuck (command) {
        target = "~/bots/bot3-tennu/scripts/list.sh chuck";
        list(command.channel);
    }

    function fact (command) {
        target = "~/bots/bot3-tennu/scripts/fact.sh";
        list(command.channel);
    }

    function fortune (command) {
        target = "fortune";
        list(command.channel);
    }

    function topic (command) {
        target = "~/bots/bot3-tennu/scripts/list.sh topic"
        list(command.channel);
    }

    function joke (command) {
        target = "~/bots/bot3-tennu/scripts/jokes.sh";
        query = command.args[0];
        target = target + " " + query;
        list(command.channel);
    }

    function quote (command) {
        target = "~/bots/bot3-tennu/scripts/list.sh quotes"
        list(command.channel);
    }

    return {
        handlers : {
            "!chuck" : chuck,
            "!fact" : fact,
            "!fortune" : fortune,
            "!topic" : topic,
            "!joke" : joke,
            "!quote" : quote
        }
    };
};
