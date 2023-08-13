import express from "express";
import Blog from "./model/mongoSchema.js";
import cors from 'cors';

const app = express();




app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const blogs =await Blog.find();
    console.log(blogs)
    res.json(blogs)
    console.log("all blogs read successfully")
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/newblog", async (req, res) => {
  try {
    const test = req.body
    console.log(test)
    const {username, title, blog} = req.body;
    console.log(username, title, blog)
    const newBlog = new Blog({username, title, blog});
    await newBlog.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Blog.deleteOne({ _id: id })
    .then(console.log('deleted a blog'))
    .then(res.sendStatus(200))
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/blog/:id",async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body;
    await Blog.findByIdAndUpdate(id, updatedData)
    res.sendStatus(200)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
);

const PORT = 5123
app.listen(PORT, console.log(`api server running on port ${PORT}`))