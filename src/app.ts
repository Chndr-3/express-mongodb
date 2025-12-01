import express, { Application } from 'express'
import cors from 'cors';
import healthRouter from './app/routes/health.routes';
import userRouter from './app/routes/user.routes';

const app : Application = express();
app.use(express.json());
app.use(cors());

app.use("/health", healthRouter);
app.use("/users", userRouter);

export default app;
