module.exports = function TennuSayActModule (tennu) {

    if(/dance/.test(command.args.join(' ').toLowerCase())) {
        tennu.say(command.args[0], command.args.slice(1).join(' '));
    }

    return {
    };
};
