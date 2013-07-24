var config = require('../config/mibbit.json');

module.exports = function TennuQuitModule (tennu) {

    function quit (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "quit <channel> [reason]");
        } else if((command.sender == config.owner)) {  // Need to work on this to get the info from nickserv
            tennu.part(command.args[0]);
        } else {
            tennu.say(command.sender, "You are not currently allowed to use this command");
        }
    }

    return {
        handlers : {
            "!quit" : quit,
        }
    };
};
