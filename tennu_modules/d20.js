module.exports = function TennuD20Module (tennu) {

    function d20 (command) {
        var roll = Math.floor(Math.random()*20);
        if(command.args[0].match(/#\w+/g)) {
            if(roll == 20 || roll == 1)
                tennu.say(command.args[0], roll + "!");
            else
                tennu.say(command.args[0], roll + ".");
        } else {
            if(roll == 20 || roll == 1)
                tennu.say(command.channel, roll + "!");
            else
                tennu.say(command.channel, roll + ".");
        }
    }

    return {
        handlers : {
            "!d20" : d20
        }
    };
};
