import { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static files are served from index.ts with app.use(express.static())
  
  // Serve index.html at root
  app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // API routes
  app.get('/api/example', (_req: Request, res: Response) => {
    res.json({ message: 'API is working' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
