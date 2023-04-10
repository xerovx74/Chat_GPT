// Import required modules
const express = require("express");
const cors = require("cors");
const openai = require("openai");

// Create express app
const app = express();
const port = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

// Define API endpoint
app.get("/api/gpt", async (req, res) => {
  const prompt = req.query.prompt;
  const openaiApi = new openai.default({apiKey: process.env.OPENAI_API_KEY});
  try {
    const response = await openaiApi.complete({
      engine: "davinci",
      prompt: prompt,
      maxTokens: 150,
      n: 1,
      stop: "\n",
    });
    res.send(response.choices[0].text.trim());
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
});
