import React, { useReducer } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import contact from "../static/contact.png";
import {
  EnvelopePaperFill,
  GeoAltFill,
  Laptop,
  PhoneFill,
} from "react-bootstrap-icons";
import { laptop, mobile, mobileXL, tablet } from "../utils/responsive";
import formReducer from "../utils/contactFormReducer";
import Heading from "../components/Heading";

const ContactWrapper = styled.div``;

const TopContainer = styled.div`
  padding: 2% 5%;
  width: 100%;
  aspect-ratio: 3;
  display: flex;

  ${mobileXL({
    display: "none",
  })}

  ${mobile({
    display: "none",
  })}
`;

const ContactHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactHeading = styled.div`
  font-size: 24px;
  ${tablet({
    fontSize: "20px",
  })}
`;

const ContactSubHeading = styled.div`
  font-size: 36px;
  ${tablet({
    fontSize: "28px",
  })}
`;

const Text = styled.p``;

const ContactImg = styled.img`
  flex: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 5%;
  margin: 1% 5% 5% 5%;

  ${tablet({
    flexDirection: "column",
    gap: "50px",
  })}

  ${mobileXL({
    flexDirection: "column",
    gap: "50px",
  })}

  ${mobile({
    flexDirection: "column",
    gap: "50px",
  })}
`;

const ContactDetailWrapper = styled.div`
  flex: 1;
  height: max-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const DetailWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 15px;
  height: 30px;
`;

const DetailHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  ${mobileXL({
    fontSize: "16px",
  })}

  ${mobile({
    fontSize: "16px",
  })}
`;

const Detail = styled.div`
  font-size: 18px;
`;

const ContactForm = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 40px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px 0px;
  border: none;
  background-color: #f5f5f5;
`;

const TextArea = styled.textarea`
  resize: none;
  border: none;
  background-color: #f5f5f5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 30px;
  border-radius: 7px;
  background-color: #cfff8d;
  font-weight: bold;
  margin-top: 20px;
`;

const MapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0% 5% 2% 5%;
  width: 100%;
  aspect-ratio: 2;

  ${mobile({
    aspectRatio: "1.5",
  })}

  ${mobileXL({
    aspectRatio: "1.5",
  })}
`;

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleInput = (event) => {
    dispatch({
      type: "INPUT",
      field: event.target.name,
      payload: event.target.value,
    });
  };

  return (
    <>
      <Header />

      <ContactWrapper>
        <TopContainer>
          <ContactHeader>
            <ContactHeading>Contact Us.</ContactHeading>
            <ContactSubHeading>How can we help you? </ContactSubHeading>
            <Text>
              Thank you for showing your interest in collaborating and
              interacting with us. Our hardworking and dedicated team is ready
              to help you in every possible way.
            </Text>
          </ContactHeader>
          <ContactImg src={contact} />
        </TopContainer>

        <Heading title="Contact:" />
        <BottomContainer>
          <ContactDetailWrapper>
            <DetailHeader>Our Address:</DetailHeader>
            <ContactDetailContainer>
              <DetailWrapper>
                <GeoAltFill style={{ transform: "scale(1.5)" }} />
                <Detail> Our Address</Detail>
              </DetailWrapper>
            </ContactDetailContainer>
            <ContactDetailContainer>
              <DetailHeader>Enquiry:</DetailHeader>
              <DetailWrapper>
                <PhoneFill
                  style={{
                    transform: "scale(1.5)",
                  }}
                />
                <Detail> +91 9765432365</Detail>
              </DetailWrapper>
            </ContactDetailContainer>
            <ContactDetailContainer>
              <DetailWrapper>
                <EnvelopePaperFill style={{ transform: "scale(1.5)" }} />
                <Detail> dilsekhel@gmail.com</Detail>
              </DetailWrapper>
            </ContactDetailContainer>
          </ContactDetailWrapper>

          {/* map */}
          <ContactForm>
            <InputWrapper>
              <Label>Name:</Label>
              <Input name="name" onChange={handleInput} />
            </InputWrapper>

            <InputWrapper>
              <Label typeof="email">Email:</Label>
              <Input name="email" onChange={handleInput} />
            </InputWrapper>

            <InputWrapper>
              <Label>Subject:</Label>
              <Input name="subject" onChange={handleInput} />
            </InputWrapper>

            <InputWrapper>
              <Label>Message:</Label>
              <TextArea rows={7} name="message" onChange={handleInput} />
            </InputWrapper>

            <ButtonWrapper>
              <Button>Submit.</Button>
            </ButtonWrapper>
          </ContactForm>
        </BottomContainer>
      </ContactWrapper>

      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.3861651944703!2d77.11539147519574!3d28.70800327562357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e0ebb778cd%3A0x2d049cb469f60063!2sKhel%20Dil%20Se!5e0!3m2!1sen!2sin!4v1682695166767!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </MapWrapper>

      <Footer />
    </>
  );
};

export default Contact;
