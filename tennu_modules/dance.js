var config = require('../config/mibbit.json');

module.exports = function TennuDanceModule (tennu) {

    function dance (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.act(command.channel, "dances with " + command.sender);
        } else {
            tennu.act(command.channel, "dances with " + command.args[0]);
        }
    }

    return {
        handlers : {
            "!dance" : dance
        }
    };
};
