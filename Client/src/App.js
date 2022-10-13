import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Extrareg from "./components/Extrareg";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tp" element={<Extrareg />} />
      1. create another page for codeforces,etc registrations 2. create API for
      that and make sure everything is found null before entering 3. create
      another route for '/codeforces' type APIs wherein it becomes easy to find
      the codeforces username and password of the logged in user
    </Routes>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
