import { Routes, Route } from "react-router-dom";
import './App.css';
import './style.css'
import Navbarcomp from './components/navbar';
import Profiles from './components/profiles';
import { Footer } from './components/footer';
import Appname from "./components/appname";
import Login from "./components/login";
import Signup from "./components/signup";



function App() {
  return (
    <div className="App">
      <Navbarcomp/>
      <Routes>
         <Route path="/profile"  element={<Profiles/>} />
          <Route path="/details/:unique_id" element={<Appname/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
