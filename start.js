var config = require('./config/mibbit.json');
var Client = require('tennu').Client;
var tennu = Client(config);


// ##### Dances whenever it sees the wird dance or dances ####
//tennu.on('privmsg', function (privmsg) {
    //if((/dance/.test(privmsg.message.toLowerCase())) || 
        //(/dances/.test(privmsg.message.toLowerCase()))) {
        ////tennu.act(privmsg.channel, "┌(・。・)┘ ♪ └(・1。・)┐ ♪ ┌(・。・)┘");
        //tennu.act(privmsg.channel, "dances with " + privmsg.nick);
    //}
//});

tennu.on('privmsg', function (privmsg) {
    if(/dies/.test(privmsg.message.toLowerCase()) &&
        privmsg.nick.search(/r3/i) !== -1) {
        tennu.say(privmsg.channel, "Stop dying r3!");
        tennu.act(privmsg.channel, "brings r3 back to life");
    }
});

tennu.on('privmsg', function (privmsg) {
    if(/!slap/.test(privmsg.message.toLowerCase())) { 
        tennu.say(privmsg.channel, "!slap " + privmsg.nick);
        //tennu.say(privmsg.channel, "It's not nice to go around slapping people " + privmsg.nick);
    }
});

/*
// Simple echo capabilities.  (Don't want echo capabilities)
tennu.on('privmsg', function (privmsg) {
    // Only echo in channels.
    if (privmsg.isQuery) {
        return;
    }

    // Don't repeat yourself.
    if (privmsg.sender === tennu.nick()) {
        return;
    }

    var said = privmsg.args.join(' ');
    var chan = privmsg.channel;
    tennu.say(chan, said);
});
*/
//tennu.require('./tennu_modules/sayAct');

tennu.connect();
