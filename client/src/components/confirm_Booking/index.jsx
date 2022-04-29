import { React, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./confirmBooking.css";
import { useHistory } from "react-router-dom";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Confirm_Booking = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
  const [upi, setUpi] = useState("");
  const [fee, setFee] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/appoint/bookAppointment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        specialization,
        doctorName,
        fee,
        address,
        upi,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Appointment Booked sucessfully 😋");
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="form">
      <h2>Confirm & Pay</h2>
      <br />
      <Form onSubmit={handleOnSubmit}>
        <Row className="mb-3">
          {/* <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="{User email - Disabled}" />
          </Form.Group> */}
          <Form.Group as={Col}>
            <Form.Label>Patients Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="{User Name - Disabled}"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="{User email - Disabled}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Doctors Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="{Doctors Name - Disabled}"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Specialist</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gynaclolgist"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </Form.Group>
        </Row>
        <h6>
          Specialist:
          <strong>
            Gynacologist <BsFillCheckCircleFill style={{ color: "green" }} />
          </strong>{" "}
          <br />
        </h6>

        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter your UPI id</Form.Label>
            <Form.Control
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
            />
          </Form.Group>
        </Row>

        <h6>
          Consultation Fee: <strong>450</strong>
          <br />
          <br />
          <HiOutlineLightBulb style={{ color: "green" }} />
          93% of users found online consultation helpful
          <br />
        </h6>

        <Form.Group className="mb-3 check-box">
          <Form.Check type="checkbox" label="privacy policies" />
        </Form.Group>

        <Button className="submit-button" variant="primary" type="submit">
          Book
        </Button>
      </Form>
      <ToastContainer
        autoClose={5000}
        position="top-center"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Confirm_Booking;
