module.exports = function TennuHelperModule (tennu) {

    function helper (command) {
        comList = commands.join(", ");
        tennu.say(command.channel, "Commands: " + comList);
    }


    var commands = [
        '8ball',
        'act',
        'd20',
        'dance',
        'google',
        'help',
        'roulette',
        'say',
        'slap'    
    ];

    return {
        handlers : {
            "!help" : helper
        }
    };
};
