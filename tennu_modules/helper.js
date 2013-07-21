var config = require('../config/mibbit.json');

module.exports = function TennuHelperModule (tennu) {

    function helper (command) {
        comList = config.modules.join(", ");
        if(command.args[0].match(/#\w+/g)) {
            tennu.say(command.args[0], "Commands: " + comList);
        } else {
            tennu.say(command.channel, "Commands: " + comList);
        }
    }

    return {
        handlers : {
            "!help" : helper
        }
    };
};
