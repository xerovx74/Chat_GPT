const express = require('express');
const app = express();
const Discord = require('discord.js');
const { createApi } = require('openai');

// Load environment variables from .env file
require('dotenv').config();

// Create a new Discord client
const client = new Discord.Client();
const openai = createApi(process.env.OPENAI_API_KEY);

// Log in to the Discord API
client.login(process.env.DISCORD_TOKEN);

// When the Discord client is ready, log a message to the console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Set up a route for the homepage
app.get('/', (req, res) => {
  res.send('Your Discord bot is running!');
});

// Handle incoming messages from the Discord API
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

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
