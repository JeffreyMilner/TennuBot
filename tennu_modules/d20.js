module.exports = function TennuD20Module (tennu) {

    function d20 (command) {
        var roll = Math.floor(Math.random()*20);
        tennu.say(command.channel, "You have rolled: " + roll);
    }

    return {
        handlers : {
            "!d20" : d20
        }
    };
};
