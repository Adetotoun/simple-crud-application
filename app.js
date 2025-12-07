const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');
const postRouter = require('./routes/post.routes');

dotenv.config();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/post",postRouter);

app.get('/', (req,res) => {
    res.send('This is The App Backend');
})



app.listen(port,() =>{
    dbConnect();
    console.log(`This Server is running on localhost: ${port}`);
})