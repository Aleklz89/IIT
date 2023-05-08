"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grammy_1 = require("grammy");
// Create an instance of the `Bot` class and pass your bot token to it.
var bot = new grammy_1.Bot("5649698055:AAFbvEAk4ZJRJMc6h-WjaeRuB_EJ8pfv4LE"); // <-- put your bot token between the ""
// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.
// Handle the /start command.
bot.command("start", function (ctx) { return ctx.reply("Welcome! Up and running."); });
// Handle other messages.
bot.on("message", function (ctx) { return ctx.reply("Got another message!"); });
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.
// Start the bot.
bot.start();
