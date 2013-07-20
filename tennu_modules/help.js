module.exports = function TennuHelperModule (tennu) {

    var commands = [
        "8ball",
        "act",
        "d20",
        "dance",
        "google",
        "help",
        "roulette",
        "say",
        "slap"    
    ];

    comList = commands.join(", ");

    function helper (command) {
        tennu.say(command.channel, "8ball, act, d20, dance, google, help, roulette, say, slap");
    }

    return {
        handlers : {
            "!help" : helper
        }
    };
};
