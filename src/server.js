import express from 'express';
import { config } from 'dotenv';
import { connectDB,disconnectDB } from './config/db.js';
// import routes
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';

config();
connectDB();

// API Routes
const app = express()
//Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/movies",movieRoutes)
app.use("/auth",authRoutes)

app.get("/hello",(req,res)=>{
    res.json({message:"hello world"})
});
const PORT = 5001;
const server = app.listen(PORT,()=>{
    console.log(`Server Running successfully on PORT ${PORT}`)
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection",(err)=>{
    console.error("UnhandledRejection:", err);
    server.close(async ()=>{
        await disconnectDB();
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on("uncaughtException",(err)=>{
    console.error("UnhandledException:", err);
    server.close(async ()=>{
        await disconnectDB();
        process.exit(1);
    });
});

// Graceful shutdown
process.on("SIGTERM", async ()=>{
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async ()=>{
        await disconnectDB();
        process.exit(0);
    });
});
