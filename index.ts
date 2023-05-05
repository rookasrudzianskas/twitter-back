import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
})

app.listen(3000, () => console.log('Server running on port 3000'));
