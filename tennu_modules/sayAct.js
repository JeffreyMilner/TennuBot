module.exports = function TennuSayActModule (tennu) {

    function say (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @say <target> <message>");
        } else {
            tennu.say(command.args[0], command.args.slice(1).join(' '));
        }
    }

    function act (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @act <target> <message>");
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
