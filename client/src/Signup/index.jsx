import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
} from "./SignupElements";

const Signup = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MedStar</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign up for your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput htmlFor="password" required />
              <FormLabel htmlFor="for">Mobile Number</FormLabel>
              <FormInput htmlFor="mobile" required />
              <FormLabel htmlFor="for">Pin Code</FormLabel>
              <FormInput htmlFor="pin" required />
              <FormLabel htmlFor="for">Address</FormLabel>
              <FormInput htmlFor="address" required />
              <FormLabel htmlFor="for">City</FormLabel>
              <FormInput htmlFor="city" required />
              <FormLabel htmlFor="for">State</FormLabel>
              <FormInput htmlFor="state" required />
              <FormButton type="submit">Sign Up</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;
