//Untuk Membeli Apikey Bisa Langsung ke Dev X-Team Atau Bisa Lewat Gilbert
//Wa Gilbert : 08998245333
global.owner = ['628998245333'] // Put your number here
global.mods = ['628998245333'] // Want some help?
global.prems = ['628998245333'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '24514b26382b3c34'
}

// Sticker WM
global.packname = 'Instagram :'
global.author = '@gilbert_situngkir09

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
