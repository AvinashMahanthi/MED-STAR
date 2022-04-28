import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
// import { UserContext } from "../../App";

const Navbar = ({ toggle, dynamic }) => {
  const [scrollNav, setScrollNav] = useState(false);
  // const { state, dispatch } = useContext(UserContext);
  // const history = useHistory();
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              scrollNav={scrollNav}
              to="/"
              onClick={toggleHome}
              styles={{ color: !dynamic ? { color: "black" } : {} }}
            >
              MedStar
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  scrollNav={scrollNav}
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  scrollNav={scrollNav}
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  scrollNav={scrollNav}
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="footer"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Health
                </NavLinks>
              </NavItem> */}
              <NavItem>
                <NavLinks
                  scrollNav={scrollNav}
                  to="main-slider-container"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Find Doctors
                </NavLinks>
              </NavItem>
            </NavMenu>
            {/* {state ? "/" : "/signIn"} */}
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/signup">Sign Up</NavBtnLink>
            </NavBtn>
            {/* <NavBtn>
              <NavBtnLink
                onClick={() => {
                  localStorage.clear();
                  dispatch({ type: "CLEAR" });
                  history.push("/signin");
                }}
              >
                Logout
              </NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
