cat > README.md << 'EOF'
# 🤖 WhatsApp Grupos IA Bot - Mozambique

Bot profissional para gerenciar grupos WhatsApp com **IA conversacional**, **50+ comandos**, **NanoAdd custom** e proteções anti-spam/link.

## ✨ Funcionalidades
- ✅ **50+ Comandos** admin (!config, !ban, !clear, !list)
- 🧠 **IA Conversacional** (oi/bom dia/ajuda/etc.)
- ✨ **NanoAdd** custom: `!nanoadd nome resposta`
- 🛡️ **Anti-Spam** (5/min), **Anti-Link**, **Bans** (7 dias)
- 💾 **SQLite** configs/bans/comandos por grupo
- 📱 **Termux-ready**, Multi-device QR

## 🚀 Instalação Termux
```bash
pkg update && pkg install nodejs git
git clone https://github.com/Elisio-10/whatsapp-mpesa-bot-moz
cd whatsapp-mpesa-bot-moz
nano config.js  # Editar ADMIN_NUM
npm install
screen -S grupos-ia
node bot.js
# Ctrl+A+D para detach

👑 Comandos Admin
