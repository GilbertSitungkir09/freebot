let handler = function (m) {
  this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
   sendContact(m.chat, '628998245333', 'OWNER GNS >_<', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
