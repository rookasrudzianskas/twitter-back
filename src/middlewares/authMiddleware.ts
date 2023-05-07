import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient, User } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'SUPER SECRET';

const prisma = new PrismaClient();
