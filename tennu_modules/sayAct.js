module.exports = function TennuSayActModule (tennu) {

    function say (command) {
        tennu.say(command.channel, command.args.join(' '));
    }

    function act (command) {
        tennu.act(command.channel, command.args.join(' '));
    }

    return {
        handlers : {
            "!say" : say,
            "!act" : act
        }
    };
};
