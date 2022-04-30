import React from "react";
import ShowAllDoctors from "../components/ShowAllDoctors";

const showAllDoctors = () => {
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar dynamic={false} />
      <ShowAllDoctors />

      <Footer />
    </div>
  );
};

export default showAllDoctors;
