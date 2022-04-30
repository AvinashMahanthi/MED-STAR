import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  SearchP,
  SearchH2,
  SearchIcon,
  SearchCard,
  SearchContainer,
  SearchWrapper,
  MainContainer,
  ImgContainer,
  SearchH1,
} from "./ShowAllDoctorsElements";
// import { Data } from "./Data";
import doc from "../../images/doc.png";
import header_img from "../../images/consult-header.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";

const ShowAllDoctors = () => {
  const history = useHistory();
  const [doctorsData, setDoctorsData] = useState([]);
  //   const [noOfDoctors, setNoOfDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/doc/GetDoctors", {
      method: "get",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setDoctorsData(result.doctors);
        // setNoOfDoctors(result.doctors.length());
      });
  });

  return (
    <MainContainer>
      <ImgContainer>
        <img
          style={{
            marginTop: "-20px",
            width: "100%",
            height: "auto",
            minHeight: "15.66667vw",
            margin: "0",
            padding: "0",
            // position: "absolute",
            top: "-1",
            right: "0",
            bottom: "0",
            left: "0",
          }}
          src={header_img}
          alt="header-img"
        />
      </ImgContainer>
      {/* <SearchH1>Total No.of Doctors in MEDSTAR: {{ noOfDoctors }}</SearchH1> */}

      <SearchContainer className="Container">
        <SearchWrapper className="row">
          {doctorsData.map((item) => {
            return (
              <SearchCard className="col-md-12 col-sm-12" key={item._id}>
                <div className="Container">
                  <div className="row">
                    <div className="col-md-4">
                      <SearchIcon src={doc} />
                      <SearchH2>
                        <br />
                        <RiCustomerServiceFill size={25} />
                        Telugu, Hindhi and English
                      </SearchH2>
                    </div>
                    <div className="col-md-6">
                      <SearchP>{item.name}</SearchP>
                      <SearchP>
                        {item.specialization}{" "}
                        <BsFillCheckCircleFill style={{ color: "green" }} />
                      </SearchP>
                      <SearchP>
                        {item.experience} Yrs experience over all
                      </SearchP>
                      <strong>Address: </strong>
                      <SearchP>Old Mahabalipuram Road, Chennai</SearchP>
                      <SearchP>
                        <strong>₹{item.consultationFee}</strong>Consultation fee
                        at Clinic
                      </SearchP>
                      <Button
                        onClick={() => {
                          history.push("/confirm_Booking");
                        }}
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </div>
              </SearchCard>
            );
          })}
        </SearchWrapper>
      </SearchContainer>
    </MainContainer>
  );
};

export default ShowAllDoctors;
