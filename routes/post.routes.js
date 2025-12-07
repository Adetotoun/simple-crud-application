const express = require('express');
const router = express.Router();

const {
    myPost,
    allPosts,
    postById,
    postSearch,
    postUpdate,
    postDelete
} = require('../controller/post.controller');


router.post('/my-post',myPost);
router.get('/posts',allPosts);
router.get('/post/:id',postById);
router.get('/title-search',postSearch);
router.put('/post-update/:id', postUpdate);
router.delete('/post-delete/:id', postDelete)





module.exports = router;