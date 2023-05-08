"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grammy_1 = require("grammy");
// Створення екземпляру бота, за допомогою токену
var bot = new grammy_1.Bot("5649698055:AAFbvEAk4ZJRJMc6h-WjaeRuB_EJ8pfv4LE");
// Обробка команди /start
bot.command("start", function (ctx) { return ctx.reply("The Bot is working!"); });
// Обробка всіх інших повідомлень
bot.on("message", function (ctx) { return ctx.reply("New message from user!"); });
// Запуск бота
bot.start();
