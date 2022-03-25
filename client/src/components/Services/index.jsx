import React from "react";
import Icon1 from "../../images/svg-22.svg";
import Icon2 from "../../images/svg-33.svg";
import Icon3 from "../../images/svg-44.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Get appt. in moments</ServicesH2>
          <ServicesP>
            You can get an Appointment with the relevant doctor in seconds.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Easy and Convenient</ServicesH2>
          <ServicesP>
            you can easily access our plataform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Medication</ServicesH2>
          <ServicesP>
            Exhaustive information about medicines written by verified experts.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
