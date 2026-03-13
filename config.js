cat > config.js << 'EOF'
module.exports = {
  ADMIN_NUM: '258855642998', // ← EDITAR: Seu numero com codigo pais (sem +)
  PREFIXO: '.',
  ANTI_SPAM_LIMITE: 5, // mensagens por minuto
  BAN_DIAS: 7, // auto-limpeza
  IA_RESPOSTAS: {
    'oi': '👋 Olá! Bem-vindo(a) ao grupo! Digite *.ajuda* para ver todos os comandos.',
    'bom dia': '🌅 Bom dia! Tenha um excelente dia! ☀️',
    'boa tarde': '🌆 Boa tarde! Tudo bem? 😊',
    'boa noite': '🌙 Boa noite! Descanse bem! ✨',
    'ajuda': '📋 *COMANDOS DISPONÍVEIS:*\n!config\n!ban @user\n!clear 50\n!list\n!nanoadd',
    'obrigado': '😊 De nada! Qualquer coisa é só chamar!',
    'tudo bem': '😊 Tudo ótimo por aqui! E contigo?',
    'como vai': '🚀 Tudo na paz! E tu? 😎'
  }
};
EOF
