module.exports = function TennuSayActModule (tennu) {

    function say (command) {
        //if(command.sender != "o11c")
            tennu.say(command.args[0], command.args.slice(1).join(' '));
    }

    function act (command) {
        //if(command.sender != "o11c")
            tennu.act(command.args[0], command.args.slice(1).join(' '));
    }

    return {
        handlers : {
            "!say" : say,
            "!act" : act
        }
    };
};
