const router = require("express").Router();
const Post = require("../models/postModels")
// handle post request
router.post("/", async (req, res) => {
    //retrieve the data from the request
    const  {title, createdAt, tags, html} = req.body;

    // construct the post model
    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    })

    //save post model
    try {
        const savedpost = await newPost.save();
        res.json(savedpost)
    }catch (err) {
        console.error(err);
    }
});
 //handle get request all posts

 router.get("/", async (req, res) => {
     const posts = await Post.find();
     res.json(posts)
 })

// handle get request single post 
router.get("/:id", async (req, res) => {
   
    const post = await Post.findById(req.params.id);
    res.json(post);
})


module.exports = router;