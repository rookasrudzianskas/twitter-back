import express from 'express';
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// For the creating user
app.post('/user', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});
