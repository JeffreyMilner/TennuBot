var config = require('../config/mibbit.json');

module.exports = function TennuSlapModule (tennu) {

    function slap (command) {
        var safeList = [ config.nick.toLowerCase(), "jeff"]
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "slap <target>");
        } else {
            for (i in slaps) {
                eval(i + ' = slaps.' + i + '[Math.floor(Math.random()*slaps.' + i + '.length)];');
            }
            if(command.args[0].match(/#\w+/g)) {
                target = command.args[1];
                if( safeList.contains(target.toLowerCase())) {
                    target = command.sender;
                }
                if(desc1.match(/^[aeiou]/g)) {
                    tennu.act(command.args[0], verbs + ' ' + target + ' ' + how + ' with an ' + desc1 + ', ' + desc2 + ', ' + color + ' ' + tools, true);
                } else {
                    tennu.act(command.args[0], verbs + ' ' + target + ' ' + how + ' with a ' + desc1 + ', ' + desc2 + ', ' + color + ' ' + tools, true);
                }
            } else {
                target = command.args[0];
                if( safeList.contains(target.toLowerCase())) {
                    target = command.sender;
                }
                if(desc1.match(/^[aeiou]/g)) {
                    tennu.act(command.channel, verbs + ' ' + target + ' ' + how + ' with an ' + desc1 + ', ' + desc2 + ', ' + color + ' ' + tools, true);
                } else {
                    tennu.act(command.channel, verbs + ' ' + target + ' ' + how + ' with a ' + desc1 + ', ' + desc2 + ', ' + color + ' ' + tools, true);
                }
            }
        }
    };

    Array.prototype.contains = function(element){
        return this.indexOf(element) > -1;
    };




    // Add encasings (encased in, surrounded by, dripping from etc), and (stuff for it to be surrounded/ dripping with
    var slaps = {
        verbs: [ "assaults", "attacks", "bashes", "beats", "blats", "bludgeons", "chokes", "claws", 
                 "crushes", "destroys", "elbows", "flattens", "hacks", "hits", "ignites", "jabs", "jostles", 
                 "kicks", "lassos", "maims", "mauls", "negates", "ostracizes", "penetrates", 
                 "pulverizes", "pummels", "punches", "quartered", "riddles", "scathes", "shoots", 
                 "slaps", "smacks", "smashes", "stabs", "steamrolls", "tackles", "terminates", "tranquilizes", "trips", "upends", 
                 "uppercuts", "violates", "wastes", "zaps" ],
        how:   [ "aggressively", "algebraically", "as if possessed", "cataclysmically", 
                 "catastrophically", "destructively", "detrimentally", "distractedly", 
                 "energetically", "in the face", "irrationally", "maniacally", "outrageously", 
                 "passionately", "repeatedly", "savagely", "severely", "strongly", 
                 "to death", "uncontrollably", "viciously" ],
        desc1: [ "absurd", "authentic", "awkward", "bizarre", "blasphemous", "coarse", 
                 "dull", "elegant", "enormous", "fancy", "faultless", "feeble", "fluffy", 
                 "foolish", "frail", "gargantuan", "godly", "hardy", "hideous", "horribile", 
                 "huge", "incredible", "ironic", "large", "miniscule", "mystical", "neat", 
                 "radioactive", "profound", "pure", "rustic", "small", "thin", "tiny", "trivial", 
                 "ugly", "weak" ],
        desc2: [ "acidic", "admirable", "broken", "bouncy", "caustic", "cold", 
                 "crisp", "discrete", "distinguished", "elastic", "feathery", 
                 "fickle", "firm", "fleshy", "foul", "furry", "fuzzy", "glassy", 
                 "grassy", "hard", "hot", "indiscrete", "insignificant", "mediocre", 
                 "moist", "oily", "prickly", "shrewd", "silly", "subtle", "uncleaned", 
                 "unpolished", "unreliable", "worthless" ],
        color: [ "amber", "amethyst", "aqua", "aquamarine", "azure", 
                 "black", "blue", "brass", "bright", "brilliant", "bronze", "burgundy", 
                  "charcoal", "chartreuse", "chrome", 
                 "clear", "cobalt", "copper", "coral", "cordovan", 
                 "cream", "crimson", "crystalline", "cyan", "dark", 
                 "ebony", "emerald", "fuchsia", 
                 "glassy", "gold", "green", "grizzly", "indigo", 
                 "iridescent", "ivory", "jade", "khaki", "lavender", 
                 "lemon", "light", "lilac", "lime", "magenta", "mahogany", "maize", 
                 "maroon", "mauve", "milky", "mustard", "navy", "obsidian", 
                 "olive", "onyx", "opaque", "orange", "orchid", "pale", 
                 "peach", "pearl", "pearly", "pink", "plum", 
                 "purple", "red", "rose", "ruby", "ruddy", "rust", 
                 "saffron", "salmon", "sapphire", "scarlet", "sepia", "shimmering", 
                 "silver", "slate", "smoky", "snowy", "sooty", "spruce", 
                 "tan", "topaz", "translucent", "transparent", "turquoise", "twinkling", 
                 "umber", "vermilion", "violet", "white", "yellow" ],
        tools: [ "axe", "bear", "pair of brass knuckles", "bullwhip", "carrot", "cello", 
                 "claw", "club", "corn on the cob", "cricket bat", "dagger", "fork", 
                 "french fry", "golf club", "hammer", "hook", "hot dog", "knife", 
                 "lightsaber", "mosquito", "mouse", "piano", "pick", 
                 "rolling pin", "rose", "screwdriver", "sewing needle", "giant squid", 
                 "staff", "swarm of nano bots", "sword", "trout", "vacuum" ]
    };


    return {
        handlers : {
            "!slap" : slap
        }
    };
};
