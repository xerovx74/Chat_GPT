# ChatGPT Chat Bot

This is a Discord chat bot built using discord.js and the gpt-3.5-turbo model from Open AI. 

!help will bring about the following statement.
```powershell
List of available commands:
!weather [location] - Displays the current weather for the specified location. (50/day)
!coinflip - Flips a coin and returns either heads or tails.
!random - Generates a random number between the specified minimum and maximum values.
!summarize - Summarizes long messages sent by other people in a text or voice channel. (currently not working)
!image [query(s)] - Takes in a prompt as its argument and generates an image using a Stable Diffusion v1.5 model
!imagine [query(s)] - Takes in a prompt as its argument and generates an image using Openjourney which adapts from the Midjourney images model
!anime [query(s) - Takes in a prompt as its argument and generates an image using Fantasy.ai
```


## How to setup

1. Clone the repository to the current directory

```powershell
git clone https://github.com/xerovx74/Chat_GPT 
```

2. Install all the dependencies

- Using npm
```powershell
npm install
```

3. Create a new file called `.env` and copy the format from `.env.example` (or you can just rename `.env.example`)

4. Update `.env` with your own credentials.

5. Start your bot

- Using npm
```powershell
npm run start
```
