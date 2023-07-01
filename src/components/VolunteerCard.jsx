import React, { useState } from "react";
import styled from "styled-components";
import { mobile, mobileXL, tablet } from "../utils/responsive";

const VolunteerCardContainer = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  ${mobile({
    paddingBottom: "80px",
  })}
`;

const JobRole = styled.div`
  font-size: 28px;
  font-weight: bold;

  ${mobile({
    fontSize: "24px",
  })}

  ${mobileXL({
    fontSize: "24px",
  })}

  ${tablet({
    fontSize: "28px",
  })}
`;

const JobDescription = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0px;

  ${mobile({
    fontSize: "20px",
  })}

  ${mobileXL({
    fontSize: "20px",
  })}
`;

const DescriptionList = styled.ol`
  padding: 0px 16px;
`;

const Description = styled.li``;

const OtherDetailWrapper = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

const JobInformationWrapper = styled.div`
  gap: 6px;
  display: flex;
`;

const JobInformationLabel = styled.div`
  font-weight: 600;
`;

const JobInformationValue = styled.div``;

const Button = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 10px 30px;
  border-radius: 7px;
  background-color: #cfff8d;
  font-weight: bold;
`;

const VolunteerCard = ({ info }) => {
  const [expand, setExpand] = useState(false);

  return (
    <VolunteerCardContainer expand={expand} onClick={() => setExpand(!expand)}>
      <JobRole> {info.role} </JobRole>

      <JobDescription> Job Description: </JobDescription>
      <DescriptionList>
        {info.description.map((desc, index) => (
          <Description key={index}>{desc}</Description>
        ))}
      </DescriptionList>

      <OtherDetailWrapper>
        <JobInformationWrapper>
          <JobInformationLabel>Duration: </JobInformationLabel>
          <JobInformationValue>{info.duration}</JobInformationValue>
        </JobInformationWrapper>

        <JobInformationWrapper>
          <JobInformationLabel>Location:</JobInformationLabel>
          <JobInformationValue>{info.location}</JobInformationValue>
        </JobInformationWrapper>

        <JobInformationWrapper>
          <JobInformationLabel>Deadline:</JobInformationLabel>
          <JobInformationValue>{info.deadline}</JobInformationValue>
        </JobInformationWrapper>

        <JobInformationWrapper>
          <JobInformationLabel> Time Commitment </JobInformationLabel>
          <JobInformationValue>{info.time_commitment}</JobInformationValue>
        </JobInformationWrapper>
      </OtherDetailWrapper>

      <Button>Apply</Button>
    </VolunteerCardContainer>
  );
};

export default VolunteerCard;
