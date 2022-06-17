import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Login/Header/Header";
import Home from "./components/Home/Home";
import Details from "./Pages/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
