import {Router} from 'express';

const router = Router();


// For the creating tweet
router.post('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// list all tweet
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// get a one tweet
router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

// Update the tweet
router.put('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

// delete the tweet
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

export default router;
