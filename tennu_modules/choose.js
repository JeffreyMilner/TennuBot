var config = require('../config/mibbit.json');

module.exports = function TennuChooseModule (tennu) {

    function choose (command) {
        channel = command.channel;
        args = [];
        if(command.args[0] == "" || command.args[0] == null){
        } else {
            args = command.args;
            argString = args.join(" ");
            argString = argString.replace(/[\!\?\@\#\$\%\^\&\*\(\)\-\=\+\_\;\:\'\"\/\>\<\~\`\[\]\{\}\\\|\,\.]/gm, " ");
            argString = argString.replace(/(\s+|\t)/gm, " ");
            args = argString.split(' ');
            chosen = args[Math.floor(Math.random()*args.length)];
            tennu.say(channel, "I choose: " + chosen)
        }
    }

    return {
        handlers : {
            "!choose" : choose
        }
    };
};
