const userpost = require('../models/post.models');

const myPost = async(req,res) =>{
    const {postTitle,postBody,postConclusion,postUrgency} = req.body;
    try {
        const newPost = new userpost({
            postTitle,
            postBody,
            postConclusion,
            postUrgency
        });
        await newPost.save();
        return res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Server Error'})    
    
    }
};

const allPosts = async(req,res) => {
    try {
        const posts = await userpost.find();
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Server Error'});
    }
};

const postById = async(req,res) => {
    try{
    const {id} = req.params;
    const post = await userpost.findById(id);
        if(!post){
            return res.status(404).json({messagee: 'Post not found'});
        }
    return res.status(200).json(post);
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Server Error'})
    }
};

const postSearch = async(req,res) => {
    try {
        const {postTitle} = req.query;
        const titleSearch = await userpost.findOne({postTitle});
            if(!titleSearch){
                return res.status(404).json({message: 'Title not found'});
            }
        return res.status(200).json(titleSearch);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Server Error'});
    }
};

const postUpdate = async(req,res) => {
    try {
        const {id} = req.params;
        const {postTitle,postBody,postConclusion,postUrgency} = req.body;
        const updatePost = await userpost.findByIdAndUpdate(
            id,
            {postTitle,postBody,postConclusion,postUrgency},
            {new: true}
        );
            if(!updatePost){
                return res.status(404).json({message: 'User not found'})
            }
        return res.status(200).json(updatePost);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Server Error'});
    }
};

const postDelete = async(req,res) => {
    try {
       const {id} = req.params;
       const deletePost = await userpost.findByIdAndDelete(id);
            if(!deletePost){
                return res.status(404).json({message:  'User not found'});
            }
        return res.status(200).json(deletePost);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Server error'})
    }
};

module.exports = {
    myPost,
    allPosts,
    postById,
    postSearch,
    postUpdate,
    postDelete
};