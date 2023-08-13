import { Route, Routes, Link } from "react-router-dom";
import Viewblog from "./pages/viewblog";
import Newblog from "./pages/newblog";
import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <div>
            {" "}
            <Link to="/">Home</Link>
          </div>
          <div>
            {" "}
            <Link to="/upload">upload</Link>{" "}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Viewblog />} />
        <Route path="/upload" element={<Newblog />} />
      </Routes>
    </>
  );
};

export default App;
