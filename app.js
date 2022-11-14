const express = require("express");
const app = express();
const linebot  = require("linebot");

if (process.env.NODE_ENV !=="production"){
    require("dotenv").config()
}
const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
});
const linebotParser = bot.parser();
bot.on("message",(event)=>{
    console.log(event);
    event.reply(event.message.text)
        .then((data)=>{
        //    success
        }).catch(err=>{
        console.log(err)
    })
});
app.post("/",linebotParser);
let port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server start on ${port}`);
})