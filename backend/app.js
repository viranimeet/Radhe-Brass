import express from 'express';
import { connectDB } from './config/db.js';
import cors from "cors";
import productRoutes from './routes/productRoutes.js';

connectDB();

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use("/api", productRoutes);

const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error occurred while starting the server:", err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});

export default app;
