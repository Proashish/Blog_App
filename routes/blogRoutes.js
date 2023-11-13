const express = require('express')
const { 
    getAllBlogController,
    createBlogController,
    updateBlogController,
    getBlogByIdController,
    deleteBlogController,
    userBlogController,
} = require('../controllers/blogController')
//router object
const router =express.Router()

//routes
//GET ||ALL BLOGS
router.get('/all-blog',getAllBlogController)

//POST || CREATE BLOG
router.post('/create-blog/',createBlogController)

//put ||update blog
router.put('/update-blog/:id',updateBlogController)

//get || single blog details
router.get('/get-blog/:id',getBlogByIdController)

//delete || delete blog
router.delete('/delete-blog/:id',deleteBlogController)

//GET || USER BLOG
router.get('/user-blog/:id', userBlogController);

module.exports =router;