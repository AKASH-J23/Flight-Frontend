import React from "react";
import { Users } from "./Pages/Users";
import { Admin } from "./Pages/Admin";
import Navbar from "./Components/Navbar/Navbar";
import {Route,Routes} from "react-router-dom";
import Authpage from "./Pages/Authpage";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' exact element = {<Authpage/>} />
    <Route path='/users' exact element={<Users/>} />
    <Route path='/admin' exact element={<Admin/>} />
    </Routes>
    </>
    );
}

export default App;
