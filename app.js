const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const productRoute = require("./routes/product");

const app = express();
dotenv.config();
app.use(express.json())

//DB_CONNECT
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => console.log('MONGO DB connected'))
    .catch(err => console.log(err));

//config Route
app.use("/api/product", productRoute)
app.use("/api/auth", authRoute)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));