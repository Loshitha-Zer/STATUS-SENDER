//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09EL0hTdkszWnpnbDh2YUpDdllrUEJWNEJHMlc0MzZNVGpQOXB5SVZrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjNpSHhnNnJiZ3JnaTRRZjBTamxCa0I2a1VNQS9scXhzM3pINXBGU2RHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSXVpeXNUQ0p0bWtVNFE3ZDg4WWd5c3lEQWxHaFBMUzdSZ25CZlhBc0djPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDd0xWS2xFR0lZWnZhNzFvcjRPUFJwcFpadTNua3VUR2JuOHNRUGJSbjJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ISnJ6bE1ZL1I4Z3AzYVJsNnZYeWNsY2loOGd3YzQvM1ptZ0dyb2xzMXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im00K0YyeUtwb3RGRmpEZ2pxWkdFQU93UzI5SWdCdEg2aGdEaTJiN1pjZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJnUmV1dlVhRlNOV2pSTUdWNGRjNnpWdFZJNElSNmRQbmVHdm9kR3UzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1ZLczN6bENaVENNMUxHWXBkSXpPeEZyeWdVMUE0WlRZRDJBVWxjQnFUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNiWG9LTkVITnFVR25ZRWdmS2lRWklXdE4rL255WTFGNTN0emdobDhoYXBLOUJhMjE4UUZUVnhiT2hYdDdDd29RMGNIMC93Y3dZbFF6UXBxNHgrWURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJGVGR4REFpUVloN1dWRlcyd1FTdW5meCtBelN3MVBiMklmZUJJa0phL0c4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWMHRwUHdKblFNT255UjEzS2prR1h3IiwicGhvbmVJZCI6IjA3NTc4MTZmLWMyYWYtNDMyNS04YmIxLTljZjVmZjM3Mjc0OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1ZzkxMFZZTFlRRUIyV21xRm01TnRiamZ0Tlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEZCcnc0enBBSFFZakhteVRWVUdOVEFvWDlnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNNSEpFUjRGIiwibWUiOnsiaWQiOiI5NDcyNzc2MDI0NToxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJMIM6YIM+eIM6XIM6ZIM6kIM6XIM6bIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQT00vcHdDRUtyZm83UUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnZUJZTFlQK21GNWNSRmhFckFDSnY1d2lOVXFSZ25oZ0lPZ2dGU3MxZG1BPSIsImFjY291bnRTaWduYXR1cmUiOiIyT0FlYWtPbHFMbDJ3OWVwUFZlMTdwR0xWL2tRRit1M3hmZndjS1dSb211TERRd2NrSnVNbnZQR1JwTmE2NThpTXhFTDBqWEhQalpHMzA0UUtLdm9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL25WK0NNaU5DeFJ0MFR0ai9aSStsa3lJUzJIUTJjZEgvUFJSMm9hZWVlSlN1Yk1rZXJyb25Vd2R6U0lDZWJQMGY4MHZCMEU4cHJlcUY1ZmVpOUszQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzc2MDI0NToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZSGdXQzJEL3BoZVhFUllSS3dBaWIrY0lqVktrWUo0WUNEb0lCVXJOWFpnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjUwMjk1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU82VyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
