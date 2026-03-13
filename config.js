
cat > config.js << 'EOF'
module.exports = {
  ADMIN: ['258855642998'], // ← SEU NUMERO AQUI (sem espaços)
  PREFIXO: '.',
  MAX_SPAM: 5,
  COMANDOS: {
    'ping': '🏓 Pong! Bot online!',
    'ajuda': '📋 *COMANDOS:* !ban !clear !list !config !nanoadd !kick !promote',
    'info': 'ℹ️ Bot Grupos IA Pro v3.0'
  }
};
EOF