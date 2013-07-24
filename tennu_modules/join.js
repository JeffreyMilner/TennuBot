var config = require('../config/mibbit.json');

module.exports = function TennuJoinModule (tennu) {

    function join (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "join <channel>");
        } else if((command.sender == config.owner)) {  // Need to work on this to get the info from nickserv
            tennu.join(command.args[0]);
        } else {
            tennu.say(command.sender, "You are not currently allowed to use this command");
        }
    }

    return {
        handlers : {
            "!join" : join,
        }
    };
};
