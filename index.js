// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  challengeMedia;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.challengeMedia = void 0;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getChallengeMedia() {
    return this.challengeMedia;
  }
  async createChallengeMedia(insertMedia) {
    const id = randomUUID();
    const createdAt = (/* @__PURE__ */ new Date()).toISOString();
    const media = { ...insertMedia, id, createdAt };
    this.challengeMedia = media;
    return media;
  }
  async updateChallengeMedia(id, updateMedia) {
    if (!this.challengeMedia || this.challengeMedia.id !== id) {
      return void 0;
    }
    this.challengeMedia = { ...this.challengeMedia, ...updateMedia };
    return this.challengeMedia;
  }
  async deleteChallengeMedia() {
    this.challengeMedia = void 0;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var challengeMedia = pgTable("challenge_media", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  headline: text("headline").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: text("created_at").notNull()
});
var insertChallengeMediaSchema = createInsertSchema(challengeMedia).omit({
  id: true,
  createdAt: true
});

// server/routes.ts
import { readFileSync } from "fs";
import { join } from "path";
async function registerRoutes(app2) {
  app2.get("/api/challenge-media", async (req, res) => {
    try {
      const media = await storage.getChallengeMedia();
      res.json(media || null);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch challenge media" });
    }
  });
  app2.post("/api/challenge-media/upload", async (req, res) => {
    try {
      const { headline, description, imageData } = req.body;
      if (!imageData || !headline || !description) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      if (!imageData.startsWith("data:image/")) {
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
  app2.post("/api/challenge-media/generate", async (req, res) => {
    try {
      const { headline, description } = req.body;
      if (!headline || !description) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const imagePath = join(process.cwd(), "attached_assets", "generated_images", "stressed_trader_at_desk_f5aafa76.png");
      const imageBuffer = readFileSync(imagePath);
      const imageBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;
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
  app2.delete("/api/challenge-media", async (req, res) => {
    try {
      await storage.deleteChallengeMedia();
      res.json({ message: "Challenge media deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete challenge media" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
