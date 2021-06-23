let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• Gilbert Situngkir
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Drawl Nag
┃• RC047/Kuhong
┃• GilbertSitungkir09
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┃
┣➥ *3:* [0899-8245-333]
┣➥ *Dana:* [0899-8245-333]
┣➥ *Gopay:* [0899-8245-333]
┣➥ *Ovo:* [0899-8245-333]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/08998245333*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
