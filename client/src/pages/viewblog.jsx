import { useState, useEffect } from "react";
import axios from "axios";

const Viewblog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const fetchblog = async () => {
    try {
      const blogdata = await axios.get("http://localhost:5123");
      setBlogs(blogdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchblog();
  }, []);

  function handleDelete(id) {
    axios.delete("http://localhost:5123/blog/" + id).then(fetchblog);
  }

  function goToNextBlog() {
    setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  }

  function goToPreviousBlog() {
    setCurrentBlogIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  }

  const currentBlog = blogs[currentBlogIndex];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8">
        {currentBlog && (
          <div
            className="bg-white rounded-lg shadow-md p-4 relative overflow-hidden"
            style={{ width: "80%", margin: "auto" }}
          >
            <button
              className="text-red-500"
              onClick={() => handleDelete(currentBlog._id)}
            >
              Delete
            </button>
            <p className="text-lg font-semibold">{currentBlog.title}</p>
            <p className="text-sm text-gray-500 mb-2">
              Blogger: {currentBlog.username}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Date: {currentBlog.postedon.slice(0, 10)}
            </p>
            <div className="relative z-10">
              <div className="animate-gradient absolute w-full h-full bg-gradient-to-t from-blue-300 to-purple-300 opacity-50"></div>
              <p
                className="text-gray-800 relative z-20 overflow-auto h-80 p-scrollbar-transparent"
                style={{ width: "80%", margin: "auto" }}
              >
                {currentBlog.blog}
              </p>
            </div>
          </div>
        )}
        <div className="mt-4 flex justify-between">
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={goToPreviousBlog}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={goToNextBlog}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Viewblog;
