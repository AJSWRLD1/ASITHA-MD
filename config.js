const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=62wUGZCL#rlkMF0SMw23SDbzqf1Hx3dIl5qFfAc4CjtwKiQBST8g",
MONGODB: process.env.MONGODB || "mongodb+srv://ajswrld123:<db_password>@cluster0.8fahf.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
