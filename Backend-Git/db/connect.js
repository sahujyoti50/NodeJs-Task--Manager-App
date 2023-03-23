const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => { console.log("mongodb connected successfully"); });
}

module.exports = connectDB;