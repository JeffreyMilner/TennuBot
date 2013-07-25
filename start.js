var config = require('./config/mibbit.json');
var Client = require('tennu').Client;
var tennu = Client(config);

String.prototype.beginsWith = function (string) {
    return(this.indexOf(string) === 0);
};

tennu.on('privmsg', function (privmsg) {
    if(/dies/i.test(privmsg.message.toLowerCase()) &&
        privmsg.nick.search(/r3/i) !== -1) {
        tennu.say(privmsg.channel, "Stop dying r3!");
        tennu.act(privmsg.channel, "brings r3 back to life");
    }
});

tennu.on('privmsg', function (privmsg) {
    if(/facepalms/i.test(privmsg.message.toLowerCase())) { 
        tennu.act(privmsg.channel, "palmfaces");
    }
});

tennu.on('privmsg', function (msg) { 
    //tennu.say(msg.channel, msg.args[1].substring(0,5));
    if(msg.args[1].substring(0,5) == '@join') {
        if(msg.args[1] == "" || msg.args[1] == null) {
            tennu.say(msg.channel, "Usage: " + config.trigger + "join <#channel>[, #channel]");
        } else if (RegExp(config.ownerID).test(msg.sender)) {      
            newMsg = msg.args[1].substring(5).trim();
            newMsg = newMsg.split(',');

            for(ix = 0; ix < newMsg.length; ix++) {
                tennu.join(newMsg[ix]);
            };
        } else {
            tennu.say(command.sender, "You do not hve permission to use this command");
        }
    } else if(msg.args[1].substring(0,5) == '@quit') {
        if(msg.args[1] == "" || msg.args[1] == null) {
            tennu.say(msg.channel, "Usage: " + config.trigger + "join <#channel>[, #channel]");
        } else if (RegExp(config.ownerID).test(msg.sender)) {      
            newMsg = msg.args[1].substring(5).trim();
            newMsg = newMsg.split(',');

            for(ix = 0; ix < newMsg.length; ix++) {
                tennu.part(newMsg[ix]);
            };
        } else {
            tennu.say(command.sender, "You do not hve permission to use this command");
        }
    }
});

tennu.on('privmsg', function (privmsg) {
    if( (/\bhey\b/i.test(privmsg.message.) ||
         /\bhi\b/i.test(privmsg.message.) ||
         /\bhello\b/i.test(privmsg.message.) ||
         /\bwelcome\b/i.test(privmsg.message.) ||
         /\bhowdy\b/i.test(privmsg.message.) 
        ) 
        && (RegExp('\\b' + tennu.nick() + '\\b', 'i').test(privmsg.message.))) { 

        tennu.say(privmsg.channel, (greetings[Math.floor(Math.random()*greetings.length)]) + " " + privmsg.nick);
    }
});

var greetings = [
    'Hi',
    'Hello',
    'Howdy',
    'Hey'
]

tennu.connect();
