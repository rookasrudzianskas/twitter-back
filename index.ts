import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// For the creating user
app.post('/user', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// list all users
app.get('/users', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// get a one user
app.get('/user/:id', (req, res) => {
  const {id} = req.params;
  res.status(501).json({ message: `Not implemented ${id}` });
});

app.listen(3000, () => console.log('Server running on port 3000'));
