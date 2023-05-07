import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
// import jwt from 'jsonwebtoken';
// import { sendEmailToken } from '../services/emailService';

const router = Router();
const prisma = new PrismaClient();



export default router;
