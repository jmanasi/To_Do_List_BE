const express = require('express');
const cors = require('cors');
import tasksRouter from './routes/tasks';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.listen(PORT,() => {
  console.log(`Server is running on port on ${PORT}`);
});
