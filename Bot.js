const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot está pronto!');
});

client.on('message', msg => {
    // Comando básico de teste
    if (msg.body === '!ping') {
        msg.reply('pong');
    }

    // Comando de ajuda
    if (msg.body === '!ajuda') {
        msg.reply('📌 Lista de comandos disponíveis:\n\n!ping → Teste de conexão\n!menu → Mostrar opções\n!horas → Mostrar hora atual\n!sobre → Informações do bot');
    }

    // Comando de menu
    if (msg.body === '!menu') {
        msg.reply('📋 Menu:\n1️⃣ !ajuda → Ver comandos\n2️⃣ !horas → Hora atual\n3️⃣ !sobre → Info do bot');
    }

    // Comando de horas
    if (msg.body === '!horas') {
        const agora = new Date();
        msg.reply(`🕒 Hora atual: ${agora.toLocaleTimeString()}`);
    }

    // Comando sobre
    if (msg.body === '!sobre') {
        msg.reply('🤖 Bot WhatsApp Moz\nVersão 1.0.0\nAutor: Elisio Francisco\nLicença: MIT');
    }
});

client.initialize();