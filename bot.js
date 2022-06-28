var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true

});

logger.level = 'debug';

var bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');

});

bot.on('message', function (user, userID, channelID, message, evt) {


if (message.substring(0, 1) == '!') {

    var args = message.substring(1).split(' ');

    var cmd = args[0];

    //listening to only promts starting with !

    args = args.splice(1);

    switch(cmd) {

        // !scout

        case 'scout':

            bot.sendMessage({

                to: channelID,

                message: 'Sorry im busy inspecting right now... also You Owe Me'

            });

        break;
		
		// !izzy
		
		case 'izzy':

            bot.sendMessage({

                to: channelID,

                message: 'please dont hurt me T.T im just a smoll gorl i dont have anything'

            });

        break;
		
		// !maggie
		
		case 'maggie':

            bot.sendMessage({

                to: channelID,

                message: 'WHat was that sound O.o oh my god do you think that can hurt me?? ok i will go into my smoll room. hug?'

            });

            break;

        //!stella

        case 'stella':

            bot.sendMessage({

                to: channelID,

                message: 'hmm this is strange.. what is this powder on the ground here... sniff sniff.. FUNNY RUN FUNNY RUN ok now i will lay on my back with my legs up for no reason'

            });

            break;

        //!luca

        case 'luca':

            bot.sendMessage({

                to: channelID,

                message: 'is this.. wAtEr!? omg here i go imma lay down next to it and put my big stupid paw in it while i drink.. this is the life baybee'

            });

            break;

     }

 }

});