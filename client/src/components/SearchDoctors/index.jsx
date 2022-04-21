import React from "react";
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
} from "./SearchDoctorsElements";
import Icon1 from "../../images/svg-22.svg";
// import { Data } from "./Data";

const SearchDoctors = () => {
  const history = useHistory();
  const routeChange = () => {
    let path = `/consult`;
    history.push(path);
  };

  const Data = [
    {
      image: "",
      Header: "Child Specalist",
      text: "Paediatrics",
    },
    {
      image: "",
      Header: "Women and Child Birth Specalist",
      text: "Obstetrics and Gynacology",
    },
    {
      image: "",
      Header: "Heart Specalist",
      text: "Cardiology",
    },
    {
      image: "",
      Header: "Diabetes and Harmones Related",
      text: "Endocrinology and Diabetology",
    },
  ];

  return (
    <MainContainer>
      <div className="row">
        <div className="col-md-8">
          <h4>Consult top doctors online for any health concern</h4>
          <h6>
            Private online consultations with verified doctors in all
            specialists
          </h6>
        </div>
        <div className="col-md-4">
          <Button
            variant="outline-info"
            styles={{ margin: "2rem", alignItems: "end" }}
            onClick={routeChange}
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
                <SearchCard>
                  <SearchIcon src={item.image} />
                  <SearchH2>{item.Header}</SearchH2>
                  <SearchP>{item.text}</SearchP>
                </SearchCard>
              );
            })}
          </SearchWrapper>
        </SearchContainer>
      </div>
    </MainContainer>
  );
};

export default SearchDoctors;
