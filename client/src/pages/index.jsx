import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/SideBar";
import ReactCardSlider from "react-card-slider-component";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const sliderClick = (slider) => {
    alert("hello world");
  };
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "The Elemental Guide to Vitamins",
      description: "Vitamins and other supplements..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Important laws of fitness",
      description: "Circumstances in life change perpetually ..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Yoga and it's uses",
      description: "Doctors have said it takes 60 days to examine ..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "How To Fix Your Hormones",
      description: "This guide discusses safe, physiological..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Treat Depression Without Medication",
      description: "A few weeks ago, depression hit me..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "My Most Awesome, Grocery List",
      description: "I've done a ton of research, study of nutrition..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/842554/pexels-photo-842554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "It’s Time to Discuss Mental Health",
      description: "Growing up, we focused on  mental health..",
      clickEvent: sliderClick,
    },
  ];

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />

      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <ReactCardSlider slides={slides} />
      <Services />

      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
