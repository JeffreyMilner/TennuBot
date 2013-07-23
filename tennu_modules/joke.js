var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function TennuJokeModule (tennu) {

    function joke (command) {
        target = "~/bots/bot3-tennu/scripts/jokes.sh";

        maxLen = 450;

        if(command.args[0] == "" || command.args[0] == null) {
            query = command.args[0];
            child = exec(target, function (error, stdout, stderr) {
                output = stdout.toString().replace(/(\r\n|\n|\r)/gm," ");
                output = output.replace(/(\s+|\t)/gm, " ");
                output = output.trim();
                output = output.trim();
                outArray = output.match(/.{1,450}/g);
                for(ix = 0; ix < outArray.length; ix++) {
                    tennu.say(command.channel, outArray[ix]);
                }
            });
        } else if(command.args[0] == "-h") {
            help = "" + config.trigger + "joke <oneliners | news | signs | nerd | professional | quotes | lightbulb | couples | riddles | religion | gross | blonde | politics | doit | laws | defs | dirty | ethnic | zippergate> - displ ays a random joke"

                tennu.say(command.channel, help);
        } else {
            query = command.args[0];
            target = target + " " + query;
            child = exec(target, function (error, stdout, stderr) {
                var output = stdout.toString().replace(/(\r\n|\n|\r)/gm," ");
                output = output.replace(/(\s+|\t)/gm, " ");
                output = output.trim();
                outArray = output.match(/.{1,450}/g);
                for(ix = 0; ix < outArray.length; ix++) {
                    tennu.say(command.channel, outArray[ix]);
                }
            });
        }
    }


    return {
        handlers : {
            "!joke" : joke
        }
    };
};
