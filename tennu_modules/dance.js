module.exports = function TennuDanceModule (tennu) {

    function dance (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @dance <target>");
        } else {
            if(command.args[0].match(/#\w+/g)) {
                tennu.act(command.args[0], "dances with " + command.args[1]);
            } else {
                tennu.act(command.channel, "dances with " + command.args[0]);
            }
        }
    }

    return {
        handlers : {
            "!dance" : dance
        }
    };
};
