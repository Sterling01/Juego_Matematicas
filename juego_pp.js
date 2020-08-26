const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "1342436336:AAG-4Hgg0udwgmYHpWRrtEquk1DxVQqvsQM";
const server = express();
const bot = new TelegramBot(TOKEN, { polling: true } );

const port = process.env.PORT || 5000;
const gameName = process.env.JuegoLectMat || 'JuegoLectMat';

const queries = {};

bot.onText(/help/, (msg) => bot.sendMessage(msg.from.id, "This bot implements a T-Rex jumping game. Say /game if you want to play."));
bot.onText(/start|game/, (msg) => bot.sendGame(msg.from.id, gameName));
bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName) {
        bot.answerCallbackQuery(query.id, "Sorry, '" + query.game_short_name + "' is not available.");
    } else {
        queries[query.id] = query;
        let gameurl = "https://evening-fortress-51208.herokuapp.com/";
        bot.answerCallbackQuery({
            callback_query_id: query.id,
            url: gameurl
        });
    }
});
bot.on("inline_query", function(iq) {
      bot.answerInlineQuery(iq.id, [ { type: "game", id: "0", game_short_name: gameName } ] ); 
});

server.use(express.static(path.join(__dirname, 'public')));

server.listen(port);