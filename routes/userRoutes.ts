import {Router} from 'express';

const router = Router();


// For the creating user
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// list all users
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// get a one user
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

// Update the user
router.put('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

// delete the user
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

export default router;
