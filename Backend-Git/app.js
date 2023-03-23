const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect');
require("dotenv").config();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());

//route
app.get("/hello", (req, res) => {
    res.send("hello task manager")
});

app.use('/api/v1/tasks', tasks);

const port = 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listning to port ${port}`));

    } catch (error) {
        console.log(error);
    }
}
start();