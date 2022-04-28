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
} from "./ShortSpecialistElements";

const Sexologist = require("../../images/SpecalityImages/Sexologist.jfif");
const ENT_Specialist = require("../../images/SpecalityImages/ENT_Specialist.png");
const Paediatrician = require("../../images/SpecalityImages/Paediatrician.png");
const Cardiologist = require("../../images/SpecalityImages/Cardiologist.jpg");
const Gynacologist = require("../../images/SpecalityImages/Gynacologist.jpg");

const ShortSpecialist = () => {
  const Data = [
    {
      image: Paediatrician,
      Header: "Child Specalist",
      specialization: "Paediatrician",
    },
    {
      image: ENT_Specialist,
      Header: "Ear Nose Throat",
      specialization: "ENT Specialist",
    },
    {
      image: Cardiologist,
      Header: "Heart Specalist",
      specialization: "Cardiologist",
    },
    {
      image: Sexologist,
      Header: "Sexual Health",
      specialization: "Sexologist",
    },
    {
      image: Gynacologist,
      Header: "Women and Child Birth Specalist",
      specialization: "Gynacologist",
    },
  ];
  const history = useHistory();

  const proceedToDoctors = (specialization) => {
    console.log(specialization);
    fetch(`http://localhost:8080/doc/consult/${specialization}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <div className="row">
        <div className="col-md-8">
          <h4>
            <strong>20+ Specialities</strong>
          </h4>
          <h6>
            Private online consultations with verified doctors in all
            specialists
          </h6>
        </div>
        <div className="col-md-4">
          <Button
            variant="outline-info"
            styles={{ margin: "2rem", alignItems: "end" }}
            onClick={() => {
              history.push("/specialists");
            }}
          >
            View All Specalities
          </Button>
        </div>
      </div>
      <div className="row">
        <SearchContainer>
          <SearchWrapper>
            {/* <SearchH1>SearchDoctors</SearchH1> */}
            {Data.map((item) => {
              return (
                <SearchCard
                  key={item._id}
                  onClick={() => {
                    proceedToDoctors(item.specialization);
                  }}
                >
                  <SearchIcon src={item.image} />
                  <SearchH2>
                    <strong>{item.Header}</strong>
                  </SearchH2>
                  <SearchP>{item.specialization}</SearchP>
                </SearchCard>
              );
            })}
          </SearchWrapper>
        </SearchContainer>
      </div>
    </MainContainer>
  );
};

export default ShortSpecialist;
