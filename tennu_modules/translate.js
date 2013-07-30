var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

var langs = ["af", "ar", "az", "be", "bg", "ca", "cs", "cy", "da", "de", "el", "en", "es", "et", "eu", "fa", "fi", "fr", "ga", "gl", "hr", "ht", "hu", "hy", "id", "is", "it", "iw", "ja", "ka", "ko", "lt", "lv", "mk", "ms", "mt", "nl", "no", "pl", "pt", "ro", "sk", "sl", "sq", "sr", "sw", "th", "tl", "tr", "uk", "ur", "vi", "yi", "zh-CN", "zh-TW"]

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

module.exports = function TennuTranslateModule (tennu) {

    function translate (command) {
        target = "~/bots/bot3-tennu/scripts/translate.sh ";
        helpString = "Usage: " + config.trigger + "translate [-l] [-h] <From> <To> <TextToTranslate>"
        langString = langs.join(", ");

         if(command.args[0] == "" || command.args[0] == null || command.args[0] == "-h") {
            tennu.say(command.channel, helpString);
        } else if(command.args[0] == "-l") {
            tennu.say(command.channel, "Supported languages: " + langString);
        } else { 
            from = command.args[0];
            to = command.args[1];
            if(!langs.contains(from) && !langs.contains(to)) {
                tennu.say(command.channel, "Neither " + from + " nor " + to + " are valid language choices, please try again");
                tennu.say(command.channel, "supported languages: " + langString);
                tennu.say(command.channel, helpString);
                return 0;
            } else if(!langs.contains(from)) {
                tennu.say(command.channel, from + " is not a valid language choice, please try again");
                tennu.say(command.channel, "supported languages: " + langString);
                tennu.say(command.channel, helpString);
                return 0;
            } else if(!langs.contains(to)) {
                tennu.say(command.channel, to + " is not a valid language choice, please try again");
                tennu.say(command.channel, "supported languages: " + langString);
                tennu.say(command.channel, helpString);
                return 0;
            } 
            text = command.args.slice(2).join(' ');

            text = text.replace(/[\!\@\#\$\%\^\&\*\(\)\-\=\+\_\;\:\'\"\/\?\>\<\~\`\[\]\{\}\\\|\.\,]/gm, "");
            text = text.toLowerCase();

            url =  "http://translate.google.com/translate_a/t?client=p&text=";
            url += text; 
            url += "/start.sh%22&hl=en&sl=";
            url += from;
            url += "&tl=";
            url += to;
            url += "&ie=UTF-8&oe=UTF-8"

            target += encodeURI(url);
            target = target.replace(/&/g, "\\&")
            child = exec(target, function (error, stdout, stderr) {
                output = stdout.toString().replace(/(\r\n|\n|\r)/gm,"");
                outArray = output.match(/.{1,450}/g);
                for(ix = 0; ix < outArray.length; ix++) {
                    tennu.say(command.channel, outArray[ix]);
                }
            });
        }
    }


    return {
        handlers : {
            "!translate" : translate
        }
    };
};
