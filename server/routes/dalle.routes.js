import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from Dall-E 2.0" });
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;
  try {
    const gptResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = gptResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

export default router;
