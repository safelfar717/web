import { type User, type InsertUser, type ChallengeMedia, type InsertChallengeMedia } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getChallengeMedia(): Promise<ChallengeMedia | undefined>;
  createChallengeMedia(media: InsertChallengeMedia): Promise<ChallengeMedia>;
  updateChallengeMedia(id: string, media: Partial<InsertChallengeMedia>): Promise<ChallengeMedia | undefined>;
  deleteChallengeMedia(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private challengeMedia: ChallengeMedia | undefined;

  constructor() {
    this.users = new Map();
    this.challengeMedia = undefined;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getChallengeMedia(): Promise<ChallengeMedia | undefined> {
    return this.challengeMedia;
  }

  async createChallengeMedia(insertMedia: InsertChallengeMedia): Promise<ChallengeMedia> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const media: ChallengeMedia = { ...insertMedia, id, createdAt };
    this.challengeMedia = media;
    return media;
  }

  async updateChallengeMedia(id: string, updateMedia: Partial<InsertChallengeMedia>): Promise<ChallengeMedia | undefined> {
    if (!this.challengeMedia || this.challengeMedia.id !== id) {
      return undefined;
    }
    this.challengeMedia = { ...this.challengeMedia, ...updateMedia };
    return this.challengeMedia;
  }

  async deleteChallengeMedia(): Promise<void> {
    this.challengeMedia = undefined;
  }
}

export const storage = new MemStorage();
