import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Sidebar from "../components/SideBar";
import Info from "../components/Info";
import { homeObjTwo } from "../components/Info/Data";
import SearchSpecialist from "../components/SearchSpecialist";

const Specialists = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar dynamic={false} />
      <SearchSpecialist />

      <Footer />
    </div>
  );
};

export default Specialists;
