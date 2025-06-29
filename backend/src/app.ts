// src/index.ts
import express from 'express';
const cors=require('cors');
import dotenv from 'dotenv';
import sequelize from './config/database';
import './models';
import router from './routes';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
}));
// Routes
app.use("/",router);

app.get("/",(req,res)=>{
  res.status(200).json({
    developer:"Fabrice",
    platform:"Ngenzi Fashion",
    description:"Backed of e-comerce platform"
  })
})
 
// Database connection and server start
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync database (creates tables if they don't exist)
    await sequelize.sync({ force:true }); 
    console.log('Database synchronized successfully.');  
    
    app.listen(PORT, () => {
        console.log(`API endpoints: http://localhost:${PORT}`);
    }); 
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

startServer();

export default app;