let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
  - [ TUTORIAL GNS BOT ] -
  
  > pkg install git 
  > git clone https://github.com/GilbertSitungkir09/freebot.git
    wait until done
  > cd freebot
  > bash install.sh
    Wait Until Done

RUN:

> bash run.sh
> or node index.js
> Scan lah

Run Again:
> cd freebot
> bash run.sh
  Done!

Note : - Bash run.sh > running GNS_BOT

*Bantu Foll Ig Owner : @gilbert_situngkir09* 
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['main']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
