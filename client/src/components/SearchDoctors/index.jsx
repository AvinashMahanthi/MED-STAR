import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  SearchP,
  SearchH2,
  SearchIcon,
  SearchCard,
  SearchContainer,
  SearchWrapper,
  SearchH1,
  MainContainer,
  ImgContainer,
} from "./SearchDoctorsElements";
// import { Data } from "./Data";
import doc from "../../images/doc.png";
import header_img from "../../images/consult-header.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";

const SearchDoctors = () => {
  const history = useHistory();
  // const [doctorData, setDoctorsData] = useState([]);
  const doctors = [
    {
      _id: "625f1502e1249da4b2ff76ce",
      name: "DR. Prana Roy",
      email: "Doctor1@gmail.com",
      password: "user7",
      phone: 4584884865,
      specialization: "Paediatrician",
      hospital: "Benerjee Hospital",
      experience: 8,
      keywords: ["asdf"],
      consultationFee: 399,
      __v: 0,
    },
    {
      _id: "625f15a8e1249da4b2ff76d1",
      name: "DR. Vivek Gowtham",
      email: "Doctor2@gmail.com",
      password: "Doctor2",
      phone: 4584884865,
      specialization: "Paediatrician",
      hospital: "Benerjee Hospital",
      experience: 8,
      keywords: ["fever,cold"],
      consultationFee: 349,
      __v: 0,
    },
    {
      _id: "62667055d6eff46ec29238d8",
      name: "DR. Rohith Kumar",
      email: "Doctor8@gmail.com",
      password: "Doctor8",
      phone: 4584884865,
      specialization: "ENT Specialist",
      hospital: "Amitha Hospital",
      experience: 4,
      keywords: ["fever,cold"],
      consultationFee: 340,
      __v: 0,
    },
    {
      _id: "62667082d6eff46ec29238db",
      name: "DR. Prem Kiran",
      email: "Doctor9@gmail.com",
      password: "Doctor9",
      phone: 4584884865,
      specialization: "Sexologist",
      hospital: "Amitha Hospital",
      experience: 4,
      keywords: ["fever,cold"],
      consultationFee: 3400,
      __v: 0,
    },
    {
      _id: "6266709fd6eff46ec29238de",
      name: "DR. Yashwanth Kumar",
      email: "Doctor10@gmail.com",
      password: "Doctor10",
      phone: 4584884865,
      specialization: "Sexologist",
      hospital: "Amitha Hospital",
      experience: 4,
      keywords: ["fever,cold"],
      consultationFee: 3400,
      __v: 0,
    },
  ];

  // useEffect(() => {
  //   fetch("http://localhost:8080/doc/GetDoctors", {
  //     method: "get",
  //     headers: {
  //       // "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setDoctorsData(result.doctors);
  //     });
  // });

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

      <SearchContainer>
        <SearchWrapper>
          {doctors.map((item) => {
            return (
              <SearchCard key={item._id}>
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
                      <Button>Book Appointment</Button>
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

export default SearchDoctors;
