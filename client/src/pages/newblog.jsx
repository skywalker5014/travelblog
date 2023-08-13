import { useState } from "react";
import axios from "axios";

const NewBlog = () => {
  const [name, setName] = useState("");
  const [blogtitle, setTitle] = useState("");
  const [blogdata, setBlog] = useState("");

  function uploadData() {
    const wrapper = {
      username: name,
      title: blogtitle,
      blog: blogdata,
    };

    axios.post("http://localhost:5123/newblog", wrapper);
    alert("blog sent successfully!");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="Blogger Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="Blog Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border rounded-md p-2 h-32"
            placeholder="Blog Content"
            onChange={(e) => setBlog(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white rounded-md p-2"
            onClick={uploadData}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
