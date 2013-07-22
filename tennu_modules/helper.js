module.exports = function TennuHelperModule (tennu) {

 var commands = [ "8ball", 
              "d20",
              "dance", 
              "google", 
              "help", 
              "joke",
              "roulette", 
              "say",
              "act", 
              "slap",
              "wikipedia" ];

    function helper (command) {
        comList = commands.join(", ");
        tennu.say(command.channel, "Commands: " + comList);
    }

    return {
        handlers : {
            "!help" : helper
        }
    };
};
