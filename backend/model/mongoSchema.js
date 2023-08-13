import mongoose from "mongoose";


const db = mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const blogSchema = new mongoose.Schema({
  username: String,
  title: String,
  postedon: { type: Date, default: Date.now },
  blog: String,
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
