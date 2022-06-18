import React from "react";
// import Navbar from "../components/Navbar/Navbar";
import Heros from "../components/Heros/Heros";
import Features1 from "../components/Features/Features1";
import Features2 from "../components/Features/Features2";
import Clients from "../components/Clients/Clients";
import Footor from "../components/Footor/Footor";
import "./homepage.css";

function HomePage() {
  return (
    <div>
      <Heros />
      <Features1 />
      <Clients />
      <Features2 />
      <Footor />
    </div>
  );
}

export default HomePage;
