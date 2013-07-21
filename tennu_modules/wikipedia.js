module.exports = function TennuWikipediaModule (tennu) {

    function wiki (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @wikipedia <search term>");
        } else {
            if(command.args[0].match(/#\w+/g)) {
                tennu.say(command.args[0], encodeURI("http://en.wikipedia.org/w/index.php?search=" + command.args.join(" ")));
            } else {
                tennu.say(command.channel, encodeURI("http://en.wikipedia.org/w/index.php?search=" + command.args.join(" ")));
            }
        }
    }

    return {
        handlers : {
            "!wikipedia" : wiki
        }
    };
};
