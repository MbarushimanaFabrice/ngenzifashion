
// src/index.ts
import express from 'express';
const cors=require('cors');
import dotenv from 'dotenv';
import sequelize from './config/database';
import routes from './routes';

dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Database connection and server start
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync database (creates tables if they don't exist)
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`API endpoints: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

startServer();

export default app;