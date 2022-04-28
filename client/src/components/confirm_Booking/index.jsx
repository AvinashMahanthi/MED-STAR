import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./confirmBooking.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

const Confirm_Booking = () => {
  return (
    <div className="form">
      <h2>Confirm & Pay</h2>
      <br />
      <Form>
        <Row className="mb-3">
          {/* <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="{User email - Disabled}" />
          </Form.Group> */}
          <Form.Group as={Col}>
            <Form.Label>Patients Name</Form.Label>
            <Form.Control type="text" placeholder="{User Name - Disabled}" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="{User email - Disabled}" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Doctors Name</Form.Label>
            <Form.Control type="text" placeholder="{Doctors Name - Disabled}" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Speacialist</Form.Label>
            <Form.Control type="text" placeholder="Gynaclolgist" />
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
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter your UPI id</Form.Label>
            <Form.Control />
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
    </div>
  );
};

export default Confirm_Booking;
