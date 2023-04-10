require('dotenv').config();
const Discord = require('discord.js');
const { createApi } = require('openai');

const client = new Discord.Client();
const openai = createApi(process.env.OPENAI_API_KEY);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content.startsWith('!chatgpt')) {
    const message = msg.content.slice(9).trim();
    const response = await openai.complete({
      engine: 'davinci-codex',
      prompt: message,
      maxTokens: 1024,
      n: 1,
      stop: ['\n']
    });
    msg.reply(response.data.choices[0].text);
  }
});

client.login(process.env.DISCORD_TOKEN);
