module.exports = function TennuSlapModule (tennu) {

    function slap (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @slap <target>");
        } else {
            for (i in slaps) {
                eval(i + ' = slaps.' + i + '[Math.floor(Math.random()*slaps.' + i + '.length)];');
            }
            if(command.args[0].match(/#\w+/g)) {
                tennu.act(command.args[0], verb + ' ' + command.args[1] + ' ' + area + ' with a(n) ' + size + ' ' + tool, true);
            } else {
                tennu.act(command.channel, verb + ' ' + command.args[0] + ' ' + area + ' with a(n) ' + size + ' ' + tool, true);
            }
        }
    };

    var slaps = {
        verb: [ "slaps", "hits", "smashes", "beats", "bashes", "smacks", "blats", "punches", "stabs", "maims", "violates", "crushes" ],
        area: [ "around the head", "viciously", "repeatedly", "in the face", "to death", "around a bit" ],
        size: [ "large", "huge", "small", "tiny", "miniscule", "enormous", "gargantuan", "fluffy" ],
        tool: [ "trout", "fork", "mouse", "bear", "piano", "cello", "vacuum", "mosquito", "sewing needle", "french fry", "large trout" ]
    };


    return {
        handlers : {
            "!slap" : slap
        }
    };
};
