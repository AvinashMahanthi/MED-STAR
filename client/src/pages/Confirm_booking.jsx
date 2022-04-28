import React, { useState } from "react";
import Footer from "../components/Footer";

import Confirm_Booking from "../components/confirm_Booking";

const Consult = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Confirm_Booking />

      <Footer />
    </div>
  );
};

export default Consult;
