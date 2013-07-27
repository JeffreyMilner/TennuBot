var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function TennuTranslateModule (tennu) {

    function translate (command) {
        target = "~/bots/bot3-tennu/scripts/translate.sh ";


        if(command.args[0] != "" || command.args[0] != null) {
            from = command.args[0];
            to = command.args[1];
            text = command.args.slice(2).join(' ');
            url="http://translate.google.com/translate_a/t?client=t&text=";
            url=url+text;
            url=url+"&hl=en";
            url=url+"&sl=";
            url=url+from;
            url=url+"&tl=";
            url=url+to;
            target += encodeURI(url);
            target = target.replace(/&/g, "\\&")
            child = exec(target, function (error, stdout, stderr) {
                output = stdout.toString().replace(/(\r\n|\n|\r)/gm,"");
                tennu.say(command.channel, output);
            });
        } else { // if(command.args[0] == "-h") {
            helpString = "" + config.trigger + "translate <From> <To> <Text>"
            tennu.say(command.channel, helpString);
        }
    }


    return {
        handlers : {
            "!translate" : translate
        }
    };
};
