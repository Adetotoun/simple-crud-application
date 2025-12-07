const mongoose = require('mongoose');


const dbConnect = async () => {
    //await mongoose.connect('mongodb://localhost:27017/userPost');
    await mongoose.connect(process.env.MANGO_URI);
    console.log('Database Connected');
};


module.exports = dbConnect;