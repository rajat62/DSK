import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VolunteerCard from "../components/VolunteerCard";
import styled from "styled-components";
import Heading from "../components/Heading";
import volunteer from "../static/volunteer.jpg";
import { laptop, mobile, mobileXL, tablet } from "../utils/responsive";

const VolunteerWrapper = styled.div`
  margin: 1% 5% 5% 5%;
  display: flex;
  flex-direction: column;
`;

const VolunteerImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 2.2;
  position: relative;

  ${mobile({
    display: "none",
  })}

  ${mobileXL({
    display: "none",
  })}

  ${tablet({
    aspectRatio: "2",
  })}

  ${laptop({
    aspectRatio: "1.8",
  })}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Quote = styled.div`
  font-size: 28px;
  width: 30%;
  position: absolute;
  top: 35%;
  right: 10%;

  ${tablet({
    top: "25%",
    fontSize: "20px",
  })}

  ${laptop({
    top: "25%",
    fontSize: "24px",
  })}
`;

const Volunteer = () => {
  const data = [
    {
      role: "Project Associate: (For Delhi only)",
      description: [
        "Planning and Executing ongoing programs and activities on the field or virtually.",
        "Monitoring and Evaluating all ongoing projects based on their scheduled submission.",
        "Building relations and partnering with stakeholders inter and intra organization.",
        "Managing teams and organizing Training and Development sessions for volunteers.",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
    {
      role: "Curriculum Associate:",
      description: [
        "Recommending necessary changes in curriculum, instruction, or program organization.",
        "Suggesting ideas for new programs or activities.",
        "Consulting with other departments  to create plans for implementation of new programs and curriculum alignment.",
        "Researching and suggesting appropriate instructional materials for DSK’s awareness modules",
        "Assisting in reviews of DSK curriculum materials and programs to ensure fulfillment of Sports Literacy Curriculum",
        "Curriculum standards  Creating educational documents that complement DSK Programs (lesson plans, modules,  worksheets, assessments etc..)",
        "Assisting in the development of new educational delivery tools (publication, web, media, etc..)  Integrating videos, language, images, and other materials into educational programs and documents",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
    {
      role: "Monitoring & Evaluation Associate:",
      description: [
        "Contribute to the design of evaluation protocols and advise on appropriate uses of program monitoring data.",
        "Ensure that data from the project is fed into central databases and is accessible by decision-makers and implementing partners. Promote the use of data among stakeholders for policy development and programming.",
        "Build capacity of staff, implementing partners, government counterparts, and other stakeholders in program monitoring and evaluation, data collection, and management.",
        "Contribute to work plans, quarterly and annual reports, financial reports, and other reports and papers summarizing project results and evidence.",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
    {
      role: "Fundraising & Outreach Associate:",
      description: [
        "Conducting venue and other event research.",
        "Assisting in the research and design of new donor cultivation events.",
        "Cold calling to secure gifts, raffle prizes and other sponsorship.",
        "Recruit and encourage participants for challenge events.",
        "Assisting with the set-up of equipment, materials and stands at events.",
        "Attending and taking minutes at committee meetings.",
        "Representing Dil Se Khelo to the public and supporters.",
        "Maintain communication with supporters, thanking them, answering queries and providing support.",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
    {
      role: " Communication  Associate:",
      description: [
        "Making Creative Graphics.",
        "Create Visual Graphics to communicate the idea of the organization.",
        "Managing all the social media’s handles.",
        "Analyzing the current trends and following up the same.",
        "Communicating with other stakeholders and donors about Dil Se Khelo initiatives and updates.",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
    {
      role: " Marketing & Branding Associate:",
      description: [
        "Marketing Campaigns.",
        "Planning and Execution.",
        "Perform Market analysis and research on competition.",
        "Supporting the marketing team in daily administrative tasks.",
        "Collecting data from marketing campaigns.",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
    {
      role: " Human Resources Associate:",
      description: [
        "Performance evaluation",
        "Enforcement of disciplinary actions",
        "Recruitment and employee screening",
        "Assisting new employees with enrollment procedures.",
        "Records by maintaining applications, résumés, and applicant logs.",
      ],
      duration: "6 - 12 months",
      location: "remote",
      deadline: "30th march",
      time_commitment: "1-2 hour/day",
    },
  ];
  return (
    <>
      <Header />
      <VolunteerImgWrapper>
        <Img src={volunteer} />
        <Quote>
          "The best way to find happiness is not to search for it, but to give
          it to others." - Swami Sivananda
        </Quote>
      </VolunteerImgWrapper>

      <VolunteerWrapper>
        <Heading title="Explore Opportunites:" />
        {data.map((info, index) => (
          <VolunteerCard info={info} key={index} />
        ))}
      </VolunteerWrapper>
      <Footer />
    </>
  );
};

export default Volunteer;
