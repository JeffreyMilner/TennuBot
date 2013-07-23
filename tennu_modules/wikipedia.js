var config = require('../config/mibbit.json');

module.exports = function TennuWikipediaModule (tennu) {

    function wiki (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "wikipedia <search term>");
        } else {
            tennu.say(command.channel, encodeURI("http://en.wikipedia.org/w/index.php?search=" + command.args.join(" ")));
        }
    }

    return {
        handlers : {
            "!wikipedia" : wiki
        }
    };
};
