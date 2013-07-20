var config = require('./config/mibbit.json');
var Client = require('tennu').Client;
var tennu = Client(config);


// ##### Dances whenever it sees the word dance or dances ####
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

//tennu.on('privmsg', function (privmsg) {
    //if(/!slap/.test(privmsg.message.toLowerCase())) { 
        //tennu.slap(privmsg.nick);
//        tennu.say(privmsg.channel, "@slap " + privmsg.nick);
    //}
//});

tennu.on('privmsg', function (privmsg) {
    if( (/hey/.test(privmsg.message.toLowerCase()) ||
         /hi/.test(privmsg.message.toLowerCase()) ||
         /hello/.test(privmsg.message.toLowerCase()) ||
         /howdy/.test(privmsg.message.toLowerCase()) 
        ) 
        && (/r4/.test(privmsg.message.toLowerCase()))) { 

        tennu.say(privmsg.channel, (greetings[Math.floor(Math.random()*greetings.length)]) + " " + privmsg.nick);
    }
});

var greetings = [
    'Hi',
    'Hello',
    'Howdy',
    'Hey'
]

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

tennu.connect();
