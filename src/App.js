
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Setting from "./component/setting/Setting";
import Single from "./component/single/Single";
import Topbar from "./component/topbar/Topbar";
import Write from "./component/write/Write";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from "./component/home/Home"
import SinglePost from "./component/singlePost/SinglePost";


function App() {
  const user = false
  return (
  <Router>
   <Topbar />
   
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={user ? <Home/>:<Register/>} />
    <Route path="/login" element={user ? <Home/>:<Login/>} />
    <Route path="/write" element={user ? <Write/>:<Register/>} />
    <Route path="/setting" element={user ?<Setting/>:<Register/>} />
    <Route path="/post/:postId" element={<Single/>} />
   </Routes>

  </Router>
  );
}

export default App;
