var config = require('../config/mibbit.json');

module.exports = function TennuSlapModule (tennu) {
    safeList = config.safeList;

    function slap (command) {
        if(command.args[0] == "" || command.args[0] == null){
            tennu.say(command.channel, "Usage: " + config.trigger + "slap <target>");
        } else {
            for (i in slaps) {
                eval(i + ' = slaps.' + i + '[Math.floor(Math.random()*slaps.' + i + '.length)];');
            }
            if(command.args[0].match(/#\w+/g)) {
                target = command.args[1];
                channel = command.args[0];
                if(safeList.contains(target.toLowerCase() || target == tennu.nick())) {
                    if(safeList.contains(command.sender.toString().toLowerCase())) {
                        target = command.args[1]; 
                    } else {
                        target = command.sender;
                    }
                }
                if(desc1.match(/^[aeiou]/g)) {
                    tennu.act(channel, verbs + ' ' + target + ' ' + how + ' with an ' + desc1 + ', ' + desc2 + ' ' + tools + ' because ' + because, true);
                } else {
                    tennu.act(channel, verbs + ' ' + target + ' ' + how + ' with a ' + desc1 + ', ' + desc2 + ' ' + tools + ' because ' + because, true);
                }
            } else {
                target = command.args[0];
                channel = command.channel;
                if(safeList.contains(target.toLowerCase())) {
                    if(safeList.contains(command.sender.toString().toLowerCase())) {
                        target = command.args[0]; 
                    } else {
                        target = command.sender;
                    }
                }
                if(desc1.match(/^[aeiou]/g)) {
                    tennu.act(channel, verbs + ' ' + target + ' ' + how + ' with an ' + desc1 + ', ' + desc2 + ' ' + tools + ' because ' + because, true);
                } else {
                    tennu.act(channel, verbs + ' ' + target + ' ' + how + ' with a ' + desc1 + ', ' + desc2 + ' ' + tools + ' because ' + because, true);
                }
            }
        }
    };

    Array.prototype.contains = function(element){
        return this.indexOf(element) > -1;
    };

    // Add encasings (encased in, surrounded by, dripping from etc), and (stuff for it to be surrounded/ dripping with)
    var slaps = {
        // r4
        verbs: [ 
            "ambushes", "annihilates", "assaults", "attacks", "backhands", 
            "bags", "bangs", "bashes", "bats", "beats", "beheads", "blats", 
            "blends", "blindsides", "bludgeons", "bombards", "burns", "chews on", 
            "breaks", "chokes", "claws", "crushes", "decapitates", "demolishes", 
            "destroys", "dominates", "eats", "elbows", "eliminates", "fights", 
            "flattens", "gorges on", "hacks", "hangs", "harasses", "hits", 
            "hurts", "ignites", "jabs", "jostles", "kamikazes", "kicks", 
            "kills", "lacerates", "lashes", "lassos", "maims", "mauls", 
            "murders", "negates", "ostracizes", "penetrates", "plots against", 
            "provokes", "pulverizes", "pummels", "punches", "quartered", 
            "riddles", "scathes", "scratches", "shoots", "slaps", "slaughters", 
            "smacks", "smashes", "spanks", "stabs", "steamrolls", "strikes", 
            "tackles", "terminates", "threatens", "torches", "tranquilizes", 
            "trips", "upends", "uppercuts", "violates", "wastes", "whips", 
            "wounds", "zaps" 
        ],
        // targetName
        how:   [ 
            "abruptly", "absentmindedly", "aggressively", "algebraically", "anxiously", "as if possessed", "carefully", 
            "carelessly", "cataclysmically", "catastrophically", "coldly", "continuously", "delicately", 
            "destructively", "detrimentally", "distractedly", "energetically", 
            "fearfully", "ferociously", "foolishly", "gleefully", "grudgingly", 
            "harshly", "in the face", "irrationally", "maniacally", "mysteriously", "outrageously", 
            "passionately", "powerfully", "questionably", "recklessly", 
            "repeatedly", "savagely", "shyly", "severely", "smoothly", 
            "softly", "strongly", "swiftly", "to death", "unconsiously", 
            "uncontrollably", "unexpectedly", "unkindly", "untimely", "viciously" 
        ],
        // with a
        desc1: [ 
            "absurd", "authentic", "awkward", "bizarre", "blasphemous", "coarse", "cute", 
            "dull", "elegant", "enormous", "fancy", "faultless", "feeble", 
            "fluffy", "foolish", "frail", "gargantuan", "godly", "hardy", 
            "hideous", "horribile", "huge", "humble", "inappropriately", "incredible", "ironic", 
            "large", "long", "miniscule", "minute", "muddy", "mystical", "mythical", "nasty", "neat", 
            "profound", "pure", "radioactive", "rough", "rustic", "sharp", "small", "smooth", "terrible", 
            "thin", "tiny", "trivial", "ugly", "voilent", "weak", "wiggly" 
        ],
        // ,
        desc2: [ 
            "acidic", "admirable", "broken", "bouncy", "caustic", "cold", 
            "crisp", "decrepid", "discrete", "distinguished", "elastic", 
            "feathery", "fickle", "firm", "fleshy", "fluffy", "foul", "fresh", 
            "furry", "fuzzy", "gassy", "glassy", "grassy", "gross", "hairy", "hairless", 
            "hard", "hot", "indiscrete", "insignificant", "mediocre", "moist", 
            "oily", "old", "plastic", "polished", "prickly", "shiny", "shrewd", "silly", 
            "smelly", "subtle", "uncleaned", "unpolished", "unreliable", "withered", 
            "worthless", "wrinkeled" 
        ],
        //
        tools: [ 
            "apple tree", "axe", "baseball bat", "bear", "bed post", "book", 
            "bullwhip", "butcher knife", "camera", "car", "carrot", "cello", 
            "ceiling fan", "chair", "chandellier", "cheap laptop", "claw", 
            "club", "coat hanger", "coffee table", "corn on the cob", 
            "cricket bat", "dagger", "dentures", "donut", "door", "elephant", 
            "electric wheelchair", "football", "fork", "french fry", 
            "garbage truck", "giant squid", "golf cart", "golf club", 
            "guillotine", "guitar", "hammer", "high heel", "hook", "hornets nest", 
            "hot dog", "knife", "laptop", "lightbulb", "lightsaber", "mosquito", 
            "mouse", "nail gun", "number one", "octopus", "pair of brass knuckles", 
            "phone", "piano", "pick", "picture frame", "purse", "record player", 
            "remote", "rolling chair", "rolling pin", "rose", "scalpel", "scooter", 
            "screwdriver", "severed hand", "sewing needle", "shovel", "skillet", 
            "sledge hammer", "spatula", "staff", "stake", "steak", "stuffed animal", 
            "sunglasses", "swarm of bees", "swarm of nano bots", "sword", 
            "television", "ten", "trampoline", "trout", "umbrella", "unicycle", 
            "vacuum", "vase", "violin", "volleyball", "water bottle", "wheelchair", 
            "WMD", "xbox" 
        ], 
        //
        because: [
            "he hates you", "he wants to be like Ted Bundy", "his mother told him to", 
            "the voices told him to", "he wants to be them", "he wants to win a bet", 
            "they are annoying", "he thinks they stink", "he wants their lunch", "he felt like it", 
            "they stole his love", "they stole his puppy", "they stole his bike", 
            "they copied his homework", "they lost his favorite shirt", "he's practicing for forensics",
            "he thought it wouldn't work", "it was an accident", "he wants their soul", 
            "he thinks you're ugly", "he thinks he's god", "they ate his pi", 
            "they ate his pie", "he thinks you think that you know everything",
            "he is insane", "he thinks they are insane", "he lost his mind", 
            "he has always wanted to try that", "he's a legend", "he always wanted to be famous",
            "they stepped on his toe", "they made him cry", "he wanted to win a nobel prize",
            "he wanted to get even", "he wanted them to go out with a bang",
            "he is a spy", "they wouldn't stop staring at him", "he felt threatened", 
            "he thought he was dreaming", "everyone is dying to get him"
        ]
    };


    return {
        handlers : {
            "!slap" : slap
        }
    };
};
