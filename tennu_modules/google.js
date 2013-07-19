module.exports = function TennuGoogleModule (tennu) {

    function google (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @google <search term>");
        } else {
            tennu.say(command.channel, encodeURI("http://google.com/search?q=" + command.args.join(" ")));
        }
    }

    return {
        handlers : {
            "!google" : google
        }
    };
};
