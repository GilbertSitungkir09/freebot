let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa 3 [08998245333]
│ • Ovo [08998245333]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
