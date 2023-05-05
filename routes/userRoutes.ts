import {Router} from 'express';

const router = Router();


// For the creating user
router.post('/user', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// list all users
router.get('/users', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// get a one user
router.get('/user/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

// Update the user
router.put('/user/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

// delete the user
router.delete('/user/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});
