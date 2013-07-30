var config = require('./config/mibbit.json');
var Client = require('tennu').Client;
var tennu = Client(config);

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

String.prototype.beginsWith = function (string) {
    return(this.indexOf(string) === 0);
};

// ########## Other functs ########## {{{
// ######################################
tennu.on('privmsg', function (privmsg) {
    if(/dies/i.test(privmsg.message) &&
        privmsg.nick.search(/r3/i) !== -1) {
        tennu.say(privmsg.channel, "Stop dying r3!");
        tennu.act(privmsg.channel, "brings r3 back to life");
    }
});

tennu.on('privmsg', function (privmsg) {
    if(/facepalms/i.test(privmsg.message)) { 
        tennu.act(privmsg.channel, "palmfaces");
    }
});

//tennu.on('!nick', function (privmsg) {
        //tennu.raw("NICK " + privmsg.args[0]);
//});


// ################################ }}}
// ########## Join/ Quit ########## {{{
// ####################################
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
            tennu.say(command.sender, "You do not have permission to use this command");
        }
    } else if(msg.args[1].substring(0,5) == '@part') {
        if(msg.args[1] == "" || msg.args[1] == null) {
            tennu.say(msg.channel, "Usage: " + config.trigger + "join <#channel>[, #channel]");
        } else if (RegExp(config.ownerID).test(msg.sender)) {      
            newMsg = msg.args[1].substring(5).trim();
            newMsg = newMsg.split(',');

            for(ix = 0; ix < newMsg.length; ix++) {
                tennu.part(newMsg[ix]);
            };
        } else {
            tennu.say(command.sender, "You do not have permission to use this command");
        }
    } else if(msg.args[1].substring(0,5) == '@nick') {
        if(msg.args[1] == "" || msg.args[1] == null) {
            tennu.say(msg.channel, "Usage: " + config.trigger + "join <#channel>[, #channel]");
        } else if (RegExp(config.ownerID).test(msg.sender)) {      
            newMsg = msg.args[1].substring(5).trim();
            tennu.raw("NICK " + newMsg);

        } else {
            tennu.say(command.sender, "You do not have permission to use this command");
        }
    }
});
// ################################ }}}
// ########### Greeting ########### {{{
// ####################################
tennu.on('privmsg', function (privmsg) {
    for(ix = 0; ix < greetings.length; ix++) {
        if((RegExp('\\b' + greetings[ix] + '\\b', 'i').test(privmsg.message)) 
            && (RegExp('\\b' + tennu.nick() + '\\b', 'i').test(privmsg.message))) { 
            tennu.say(privmsg.channel, (greetings[Math.floor(Math.random()*greetings.length)]) + " " + privmsg.nick);
        }
    }
});

var greetings = [
    'Aloha',
    'Bonjour',
    'Buenos dias',
    'Ciao',
    'Hei',
    'Hi',
    'Hello',
    'Hey',
    'Hey there',
    'Hiya',
    'Hola',
    'Howdy',
    'Shalom'
]

tennu.on('join', function (message) {
    if(message.actor != tennu.nick()) {
        if(message.channel != "#havvy") {
            tennu.say(message.channel, "Welcome " + message.actor + "!");
        }
    }
});
// ################################ }}}

tennu.connect();
