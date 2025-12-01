import 'dotenv/config';
import myApp from './app';
import { connectDB } from './config/mongoose';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  myApp.listen(PORT, () => {
    console.log(`listened to port ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
