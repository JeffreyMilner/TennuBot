module.exports = function TennuRouletteModule (tennu) {

    chambers = [ 0, 0, 0, 0, 0, 0 ];

    function reload() {
        chambers = [ 0, 0, 0, 0, 0, 0 ];
        chambers[Math.floor(Math.random()*chambers.length)] = 1;
        return 'reloads.';
    }

    function roulette (command) {
        var bullet = chambers.shift();
        var output = "chamber " + (6 - chambers.length) + " of 6 => ";

        if(bullet) {
            tennu.act(command.channel, "shoots " + output + "*BANG*");
            tennu.say(command.channel, command.sender + " has been shot");
            tennu.act(command.channel, reload(), true);
        } else {
            tennu.act(command.channel, "shoots " + output + "+click+");
        }
    };
    reload();

    return {
        handlers : {
            "!roulette" : roulette
        }
    };
};
