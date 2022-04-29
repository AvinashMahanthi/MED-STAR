import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Sidebar from "../components/SideBar";
// import Info from "../components/Info";
import SearchDoctors from "../components/SearchDoctors";

const Consult = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar dynamic={false} />
      <SearchDoctors />
      {/* 
      <Footer /> */}
    </div>
  );
};

export default Consult;
