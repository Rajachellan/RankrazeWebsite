import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for games
  app.get('/api/games', (req, res) => {
    // This would normally fetch games from the database
    const games = [
      {
        id: 1,
        title: 'Space Adventure',
        creator: 'Johnson Family',
        image: 'https://images.unsplash.com/photo-1566694271453-390536dd1f0d?auto=format&fit=crop&w=500&h=300',
        category: 'Adventure',
        rating: 4,
        plays: 254
      },
      {
        id: 2,
        title: 'Ocean Explorer',
        creator: 'Martinez Family',
        image: 'https://images.unsplash.com/photo-1560273633-5dfe5c5aede4?auto=format&fit=crop&w=500&h=300',
        category: 'Educational',
        rating: 3.5,
        plays: 178
      },
      {
        id: 3,
        title: 'Math Heroes',
        creator: 'Wilson Family',
        image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=500&h=300',
        category: 'Educational',
        rating: 5,
        plays: 342
      },
      {
        id: 4,
        title: 'Forest Maze',
        creator: 'Thompson Family',
        image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=500&h=300',
        category: 'Puzzle',
        rating: 4,
        plays: 198
      }
    ];
    
    res.json(games);
  });

  // API route for soundtracks
  app.get('/api/soundtracks', (req, res) => {
    const soundtracks = [
      {
        id: 1,
        title: 'Peaceful Forest',
        description: 'Relaxing nature sounds',
        bgColor: 'bg-primary/10',
        textColor: 'text-primary',
        btnBgColor: 'bg-primary/10',
        btnTextColor: 'text-primary',
        btnHoverBgColor: 'hover:bg-primary/20'
      },
      {
        id: 2,
        title: 'Adventure Begins',
        description: 'Upbeat exploration theme',
        bgColor: 'bg-secondary/10',
        textColor: 'text-secondary',
        btnBgColor: 'bg-secondary/10',
        btnTextColor: 'text-secondary',
        btnHoverBgColor: 'hover:bg-secondary/20'
      },
      {
        id: 3,
        title: 'Ocean Waves',
        description: 'Calming sea sounds',
        bgColor: 'bg-accent/10',
        textColor: 'text-accent',
        btnBgColor: 'bg-accent/10',
        btnTextColor: 'text-accent',
        btnHoverBgColor: 'hover:bg-accent/20'
      }
    ];
    
    res.json(soundtracks);
  });

  // API route for subscribing to newsletter
  app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Here you would normally save the email to a database
    console.log('Newsletter subscription:', email);
    
    res.status(201).json({ message: 'Subscription successful' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
