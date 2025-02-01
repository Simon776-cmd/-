import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
const ims = './bb.jpg'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = (neww - old).toFixed(4)
let prova = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"
}, "message": { 
"orderMessage": { text: '𝐂𝐡𝐚𝐭𝐮𝐧𝐢𝐭𝐲-𝐁𝐨𝐭',
"itemCount": 2023,
"status": 1,
"surface" : 1,
    "message": '𝐒𝐜𝐚𝐫𝐢𝐜𝐚 𝐂𝐡𝐚𝐭𝐮𝐧𝐢𝐭𝐲-𝐁𝐨𝐭,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=15395490858:+1 (539) 549-0858\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
}}, "participant": "0@s.whatsapp.net"
}
let info = `
══════ •⊰✦⊱• ══════
𝐒𝐂𝐀𝐑𝐈𝐂𝐀 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓

✧ 𝐕𝐢𝐬𝐢𝐭𝐚 𝐢𝐥 𝐧𝐨𝐬𝐭𝐫𝐨 𝐠𝐢𝐭𝐡𝐮𝐛 𝐩𝐞𝐫 𝐥𝐞 𝐢𝐬𝐭𝐫𝐮𝐳𝐢𝐨𝐧𝐢

https://github.com/chatunitybot/chatunity-bot.git

✧ 𝐄𝐧𝐭𝐫𝐚 𝐧𝐞𝐥 𝐧𝐨𝐬𝐭𝐫𝐨 𝐜𝐚𝐧𝐚𝐥𝐞 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩

https://whatsapp.com/channel/0029VaZVlJZHwXb8naJBQN0J

✧ 𝐄𝐧𝐭𝐫𝐚 𝐧𝐞𝐥 𝐜𝐚𝐧𝐚𝐥𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐨

https://chat.whatsapp.com/LChd7a5px3n3Jr83egpWvr

══════ •⊰✦⊱• ══════
`.trim() 
conn.reply(m.chat, info,prova, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃',
body: '𝐂𝐡𝐚𝐭𝐮𝐧𝐢𝐭𝐲',         
previewType: 0, thumbnail: fs.readFileSync("./bixby.jpg"),
sourceUrl: `https://github.com/chatunitybot/chatunity-bot`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(scarica|installa|git|instalarbot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}