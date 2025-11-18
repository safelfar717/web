import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertChallengeMediaSchema } from "@shared/schema";
import { readFileSync } from "fs";
import { join } from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Challenge Media Routes
  app.get("/api/challenge-media", async (req, res) => {
    try {
      const media = await storage.getChallengeMedia();
      res.json(media || null);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch challenge media" });
    }
  });

  app.post("/api/challenge-media/upload", async (req, res) => {
    try {
      const { headline, description, imageData } = req.body;

      if (!imageData || !headline || !description) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Validate image data is base64
      if (!imageData.startsWith('data:image/')) {
        return res.status(400).json({ message: "Invalid image format" });
      }

      const validatedData = insertChallengeMediaSchema.parse({
        headline,
        description,
        imageUrl: imageData
      });

      const media = await storage.createChallengeMedia(validatedData);
      res.json(media);
    } catch (error) {
      res.status(400).json({ message: "Failed to upload image" });
    }
  });

  app.post("/api/challenge-media/generate", async (req, res) => {
    try {
      const { headline, description } = req.body;

      if (!headline || !description) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Read the default image and convert to base64
      const imagePath = join(process.cwd(), "attached_assets", "generated_images", "stressed_trader_at_desk_f5aafa76.png");
      const imageBuffer = readFileSync(imagePath);
      const imageBase64 = `data:image/png;base64,${imageBuffer.toString('base64')}`;

      const validatedData = insertChallengeMediaSchema.parse({
        headline,
        description,
        imageUrl: imageBase64
      });

      const media = await storage.createChallengeMedia(validatedData);
      res.json(media);
    } catch (error) {
      res.status(400).json({ message: "Failed to generate image" });
    }
  });

  app.delete("/api/challenge-media", async (req, res) => {
    try {
      await storage.deleteChallengeMedia();
      res.json({ message: "Challenge media deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete challenge media" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
