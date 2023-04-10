const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content.startsWith('!chatgpt')) {
    // Remove the !chatgpt prefix and send the message to the ChatGPT API
    const message = msg.content.slice(9).trim();
    const response = await fetch('https://api.openai.com/v1/engine/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Set your OpenAI API key as an environment variable
      },
      body: JSON.stringify({
        prompt: message,
        max_tokens: 1024,
        n: 1,
        stop: ['\n']
      })
    });
    const data = await response.json();

    // Send the response back to the Discord server
    msg.reply(data.choices[0].text);
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN');