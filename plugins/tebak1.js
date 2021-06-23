let fetch = require('node-fetch')

let timeout = 120000
let poin = 10000
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    let res = await fetch('https://leyscoders-api.herokuapp.com/api/tebak-gambar2?apikey=demo')
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
*Note :mode ini hanya untuk fun²an aja jika limit apikey habis:v*
    `.trim()
    conn.tebakgambar[id] = [
      await conn.sendFile(m.chat, json.result.soal, 'tebakgambar2.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.tebakgambar[id][0])
        delete conn.tebakgambar[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakgambarr']
  handler.tags = ['game']
  handler.command = /^tebakgambarr/i
  
  module.exports = handler