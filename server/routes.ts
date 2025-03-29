import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files
  app.use(express.static(path.join(process.cwd())));
  
  // Serve index.html at root
  app.get('/', (_req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
