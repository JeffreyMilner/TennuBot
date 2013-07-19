module.exports = function TennuDanceModule (tennu) {

    function dance (command) {
        tennu.act(command.channel, "dances with " + command.args[0]);
    }

    return {
        handlers : {
            "!dance" : dance
        }
    };
};
