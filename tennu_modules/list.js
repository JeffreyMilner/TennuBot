var config = require('../config/mibbit.json');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

module.exports = function TennuChuckModule (tennu) {

    Array.prototype.contains = function(element){
        return this.indexOf(element) > -1;
    };
    
    function list (channel) {
        child = exec(target, function (error, stdout, stderr) {
            output = stdout.toString().replace(/(\r\n|\n|\r)/gm," ");
            if(output == "" || output == null) {
                console.log("EMPTY!!!!!" + error);
                return 0;
            }
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
        target = "~/bots/bot3-tennu/scripts/list.sh fact";
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
        jokes = [ "oneliners", "news", "signs", "nerd", "professional", "quotes", "lightbulb", "couples", "riddles", "religion", "gross", "blonde", "politics", "doit", "laws", "defs", "dirty", "ethnic", "zippergate" ];
        target = "~/bots/bot3-tennu/scripts/list.sh joke ";
        query = command.args[0];
        if(jokes.contains(query.toLowerCase())){
            target = target + query;
        } else {
            target = target + " haha";
        }
        list(command.channel);
    }

    function horo (command) {
        categories = [ "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn" ];
        if(command.args == "" || command.args == null) {
            tennu.say(command.channel, "Usage: " + config.trigger + "horo < " + categories.join(" | ") + " >");
            return 0;
        }
        target = "~/bots/bot3-tennu/scripts/list.sh horo ";
        query = command.args[0];
        if(categories.contains(query.toLowerCase())){
            target = target + " " + query;
        } else {
            target = target + " haha";
        }
        list(command.channel);
    }

    function quote (command) {
        target = "~/bots/bot3-tennu/scripts/list.sh quote"
        list(command.channel);
    }


    return {
        handlers : {
            "!chuck" : chuck,
            "!fact" : fact,
            "!fortune" : fortune,
            "!horo" : horo,
            "!joke" : joke,
            "!quote" : quote,
            "!topic" : topic
        }
    };
};
