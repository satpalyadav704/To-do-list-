import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Routes ,BrowserRouter as Router} from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";


const App = ()=> {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path="/Home"element={<Home/>}/>
          <Route exact path="/add"element={<AddContact/>}/>
          <Route exact path="/edit/:id"element={<EditContact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
