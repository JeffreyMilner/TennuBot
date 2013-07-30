var config = require('../config/mibbit.json');

module.exports = function TennuSeenModule (tennu) {

    function seen (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "seen <nick>");
        } else { 
            nick = command.args[0];
            if(RegExp('\\b' + nick + '\\b', 'i').test(tennu.nick())) {
                tennu.say(command.channel, "I'm right here.");
            }
            if(RegExp('\\b' + nick + '\\b', 'i').test(command.sender)) {
                tennu.say(command.channel, "You may want to go look in a mirror " + command.sender);
            }
            //if () { // Needs to be worked on
            //tennu.say(command.channel, "I've never seen "+nick+'.');
            //}
            //tennu.say(command.channel, nick + ' last spoke ' + lastTimeSeen);
        }
    }

    return {
        handlers : {
            "!seen" : seen
        }
    };
};
