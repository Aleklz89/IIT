import { Bot } from "grammy";

// Створення екземпляру бота, за допомогою токену
const bot = new Bot("5649698055:AAFbvEAk4ZJRJMc6h-WjaeRuB_EJ8pfv4LE");

// Обробка команди /start
bot.command("start", (ctx) => ctx.reply("The Bot is working!"));
// Обробка всіх інших повідомлень
bot.on("message", (ctx) => ctx.reply("New message from user!"));

// Запуск бота
bot.start();
