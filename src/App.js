import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Update from './Update'


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/update/:id" element={<Update/>}/>

        </Routes>
        </Router>
    </div>
  );
}

export default App;