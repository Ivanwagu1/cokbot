const { sticker } = require('../lib/sticker.js')
let handler = async (m, { conn, text, usedPrefix, command }) => {

global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let stiker = await sticker(null, global.API(`https://telegra.ph/file/f61a7c96f3f86b6c5214f.png`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 9999999,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://youtube.com/channel/UCUmkGSW0FF6OyJ9x5uLal5g',
    mediaType: 2, 
    description: 'https://youtube.com/channel/UCUmkGSW0FF6OyJ9x5uLal5g',
    title: "Tunggu Sebentar Stah",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/41d08b0b17f0a9d7e6837.jpg')).buffer(),
    sourceUrl: 'https://youtube.com/channel/UCUmkGSW0FF6OyJ9x5uLal5g'
  }
  } })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
