var config = require('../config/mibbit.json');

module.exports = function TennuSayActModule (tennu) {

    function say (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "say <target> <message>");
        } else {
            tennu.say(command.args[0], command.args.slice(1).join(' '));
        }
    }

    function act (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "act <target> <message>");
        } else {
            tennu.act(command.args[0], command.args.slice(1).join(' '));
        }
    }

    return {
        handlers : {
            "!say" : say,
            "!act" : act
        }
    };
};
