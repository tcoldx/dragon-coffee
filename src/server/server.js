const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected!"));
app.listen(3000, function() {
    console.log("STARTED THE SERVER!!");
})