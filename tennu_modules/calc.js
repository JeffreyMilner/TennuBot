var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function TennuCalcModule (tennu) {

    function calc (command) {
        target = command.args.join(' '); 
        all = "echo \"" + target + "\" | bc";

        if(command.args[0] != "" || command.args[0] != null) {
            child = exec(all, function (error, stdout, stderr) {
                output = stdout.toString().replace(/(\r\n|\n|\r)/gm," ");
                tennu.say(command.channel, target + " = " + output);
            });
        } else if(command.args[0] == "-h") {
            help = "" + config.trigger + "calc [-h] <mathToBeSolved>"
            tennu.say(command.channel, help);
        }
    }


    return {
        handlers : {
            "!calc" : calc
        }
    };
};
