const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");

const loggerMiddleware = require("./middleware/loggerMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(loggerMiddleware);

// health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/courses", require("./routes/courseRoutes"));

// learning routes (mounted at /learning to match Postman collection)
app.use("/learning", require("./routes/learningRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});