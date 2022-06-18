import Navbar from "./components/Navbar/Navbar";
import HomePage from "../src/Pages/HomePage";
import SignIn from "../src/Pages/SignIn";
import Signup from "../src/Pages/Signup";
import ForgetPassword from "../src/Pages/ForgetPassword";
import Maintenace from "../src/Pages/Maintenace";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="*" element={<Maintenace />} />
      </Routes>
    </>
  );
}

export default App;
