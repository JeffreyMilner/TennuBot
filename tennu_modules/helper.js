var config = require('../config/mibbit.json');

module.exports = function TennuHelperModule (tennu) {

 var commands = [ "8ball", 
                  "act", 
                  "bomb",
                  "calc",
                  "chuck",
                  "d20",
                  "dance", 
                  "fact",
                  "fortune",
                  "google", 
                  "hangman",
                  "help", 
                  "joke",
                  "quote",
                  "roulette", 
                  "say",
                  "slap",
                  "topic",
                  "translate",
                  "wikipedia" ];

    function helper (command) {
        if(command.args[0] == "" || command.args[0] == null){
            comList = commands.join(", ");
            tennu.say(command.channel, "Commands: " + comList);
        } else if(command.args[0] == "8ball") {
            tennu.say(command.channel, "Useage: " + config.trigger + "8ball <yes or no question>")
        } else if(command.args[0] == "act") {
            tennu.say(command.channel, "Useage: " + config.trigger + "act <target> <message>")
        } else if(command.args[0] == "bomb") {
            tennu.say(command.channel, "Useage: " + config.trigger + "bomb <target>")
        } else if(command.args[0] == "calc") {
            tennu.say(command.channel, "Useage: " + config.trigger + "calc [-h] <mathToBeSolved>")
        } else if(command.args[0] == "chuck") {
            tennu.say(command.channel, "Useage: " + config.trigger + "chuck");
        } else if(command.args[0] == "d20") {
            tennu.say(command.channel, "Useage: " + config.trigger + "d20");
        } else if(command.args[0] == "dance") {
            tennu.say(command.channel, "Useage: " + config.trigger + "dance [target]");
        } else if(command.args[0] == "fact") {
            tennu.say(command.channel, "Useage: " + config.trigger + "fact");
        } else if(command.args[0] == "fortune") {
            tennu.say(command.channel, "Useage: " + config.trigger + "fortune");
        } else if(command.args[0] == "google") {
            tennu.say(command.channel, "Useage: " + config.trigger + "google <search phrase>");
        } else if(command.args[0] == "hangman") {
            tennu.say(command.channel, "Useage: " + config.trigger + "hangman");
        } else if(command.args[0] == "help") {
            tennu.say(command.channel, "Useage: " + config.trigger + "help [command]");
        } else if(command.args[0] == "joke") {
            tennu.say(command.channel, "Useage: " + config.trigger + "joke [oneliners | news | signs | nerd | professional | quotes | lightbulb | couples | riddles | religion | gross | blonde | politics | doit | laws | defs | dirty | ethnic | zippergate]");
        } else if(command.args[0] == "quote") {
            tennu.say(command.channel, "Useage: " + config.trigger + "quote");
        } else if(command.args[0] == "roulette") {
            tennu.say(command.channel, "Useage: " + config.trigger + "roulette");
        } else if(command.args[0] == "say") {
            tennu.say(command.channel, "Useage: " + config.trigger + "say <target> <message>");
        } else if(command.args[0] == "slap") {
            tennu.say(command.channel, "Useage: " + config.trigger + "slap [channel] <target>");
        } else if(command.args[0] == "topic") {
            tennu.say(command.channel, "Useage: " + config.trigger + "topic");
        } else if(command.args[0] == "translate") {
            tennu.say(command.channel, "Useage: " + config.trigger + "translate [-l] [-h] <fromLang> <toLang> <Message>");
        } else if(command.args[0] == "wikipedia") {
            tennu.say(command.channel, "Useage: " + config.trigger + "wikipedia <search phrase>") ;
        } else {
            tennu.say(command.channel, "Useage: " + config.trigger + "help [command]");
        }
        
    }

    return {
        handlers : {
            "!help" : helper
        }
    };
};
