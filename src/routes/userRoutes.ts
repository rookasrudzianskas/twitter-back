import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// For the creating user
router.post('/', async (req, res) => {
  const { email, name, username } = req.body;
  // console.log(`email: ${email}, name: ${name}, username: ${username}`);
  try {
    const result = await prisma.user.create({
      data: {
        email,
        name,
        username,
        bio: 'I am new on twitter',
      },
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Username and email should be unique' });
  }
});

// list all users
router.get('/', async (req, res) => {
  const allUser = await prisma.user.findMany({
    // select: {
    //   id: true,
    //   name: true,
    //   image: true,
    //   bio: true,
    // },
  });

  res.json(allUser);
});

// get a one user
router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    // include: { tweets: true },
  })
  res.json(user);
});

// Update the user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { bio, name, image } = req.body;

  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data: { bio, name, image },
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: `Failed to update the user` });
  }
});

// delete the user
router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  await prisma.user.delete({ where: { id: Number(id) } });
  res.sendStatus(200);
});

// get all tweets of a user

export default router;
