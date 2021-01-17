const Bot = require('discord-bot');
const Discord = require('discord.js');
const config = require('./config.json');
const Char = require('../models/Char');
const Coins = require('../models/Coins');

const client =  new Discord.Client();

const prefix = "??";



client.on("message", (message)=>{
    if(message.author.bot){
        return;
    }

    if(!message.content.startsWith(prefix)){
        return;
    }
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command == 'coins'){
        const gp = parseInt(args.shift());
        const cotacao = parseFloat(args.shift());

        const coins = new Coins(gp, null, cotacao);

        message.reply(`Voce tem ${coins.getTotalTibiaCois()} baseado nas suas GP ${gp} e na cotacao ${cotacao} informadas`)
    }
 
    if(command == 'coinsreal'){
        const tibiaCoins = parseInt(args.shift());
        const cotacao = parseFloat(args.shift());

        const coins = new Coins(null, tibiaCoins, cotacao);

        message.reply(`Voce tem R$${coins.getTotalEmReal()} baseado nas suas tibia coins ${tibiaCoins} e na cotacao R$${cotacao} informadas`)
    }

    if(command == 'xp'){
        const lvl = parseInt(args.shift());
        const char = new Char(lvl);
        const result = char.getHuntSharedXp();
        message.reply(`Max ${result[0]} min ${result[1]}`);
    }
    
    if(command == 'info'){
        let resposta;
        switch(args.shift().toLowerCase()){
            

        case 'ek':
            const ek = new Char(parseInt(args.shift()), 15, 5)
            resposta = `Sua vida ${ek.getLife()} e sua mana ${ek.getMana()}`
        break;

        case 'rp':
            const rp = new Char(parseInt(args.shift()), 10, 15)
            resposta = `Sua vida ${rp.getLife()} e sua mana ${rp.getMana()}`
        break;

        case 'ed':
            const ed = new Char(parseInt(args.shift()), 5, 30)
            resposta = `Sua vida ${ed.getLife()} e sua mana ${ed.getMana()}`
        break;

        case 'ms':
            const ms = new Char(parseInt(args.shift()), 5, 30)
            resposta = `Sua vida ${ms.getLife()} e sua mana ${ms.getMana()}`
        break;

        
    }
    message.reply(resposta);
}
  



});

client.login(config.BOT_TOKEN);
