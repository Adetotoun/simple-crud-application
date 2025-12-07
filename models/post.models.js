const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postTitle: String,
    postBody: String,
    postConclusion: String,
    postUrgency: Number, //how important or relevant is the post to you
},{
    timestamps: true,
    versionKey: false
})

const userpost = mongoose.model('userpost', postSchema);

module.exports = userpost;