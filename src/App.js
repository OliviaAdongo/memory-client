// import Home from './Home/Home'
import Read from "./Read/Read";
import Topbar from "./Topbar/Topbar";
import "./App.css";
import Single from "./Single/Single";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Write from "./Write/Write";
import Profile from "./Profile/Profile";
import Errorpage from "./ErrorPage/Errorpage";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/write" element={<Write />} />
        <Route path="/singlepost" element={<Single />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
