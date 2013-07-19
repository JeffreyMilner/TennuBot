module.exports = function TennuSayActModule (tennu) {

    function say (command) {
        tennu.say(command.args[0], command.args.slice(1).join(' '));
    }

    function act (command) {
        tennu.act(command.args[0], command.args.slice(1).join(' '));
    }

    return {
        handlers : {
            "!say" : say,
            "!act" : act
        }
    };
};
