var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function TennuFactModule (tennu) {

    function fact (command) {
        target = "~/bots/bot3-tennu/scripts/fact.sh";


        if(command.args[0] == "" || command.args[0] == null) {
            child = exec(target, function (error, stdout, stderr) {
                output = stdout.toString().replace(/(\r\n|\n|\r)/gm," ");
                output = output.replace(/(\s+|\t)/gm, " ");
                output = output.trim();
                outArray = output.match(/.{1,450}/g);
                for(ix = 0; ix < outArray.length; ix++) {
                    tennu.say(command.channel, outArray[ix]);
                }
            });
        } else if(command.args[0] == "-h") {
            help = "" + config.trigger + "fact [-h]"
            tennu.say(command.channel, help);
        }
    }


    return {
        handlers : {
            "!fact" : fact
        }
    };
};
