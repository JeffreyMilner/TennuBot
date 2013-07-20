module.exports = function TennuEightBallModule (tennu) {

    function EightBall (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: @8ball <Yes or no question>");
        } else {
            tennu.say(command.channel, command.args[0] + "  " + (answers[Math.floor(Math.random()*answers.length)]));
        }
    };

    var answers = [
        'As I see it, yes',
        'It is certain',
        'It is decidedly so',
        'Most likely',
        'Outlook good',
        'Signs point to yes',
        'Without a doubt',
        'Yes',
        'You may rely on it',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ];

    return {
        handlers : {
            "!8ball" : EightBall
        }
    };
};
