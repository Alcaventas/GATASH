let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@alcashop.ff ${pesan}`
let teks = `*𝙈𝙚𝙣𝙘𝙞𝙤𝙣 𝙂𝙚𝙣𝙚𝙧𝙖𝙡*\n${oi}\n\n*🚨𝙈𝙚𝙣𝙘𝙞𝙤𝙣𝙚𝙨*\n`
for (let mem of participants) {
teks += `🐤 @${mem.id.split('@')[0]}\n`}
teks += `𝘼𝙡𝙘𝙖𝘽𝙤𝙩`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
