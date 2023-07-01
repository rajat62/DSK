import React from "react";
import styled from "styled-components";
import { laptop, tablet, mobileXL, mobile } from "../utils/responsive";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { Facebook, Linkedin, Twitter } from "react-bootstrap-icons";

const OurTeamWrapper = styled.div`
  margin: 1% 5% 5% 5%;
`;

const OurTeamContainer = styled.div`
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));

  ${mobile({
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  })}

  ${mobileXL({
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  })}

  ${tablet({
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  })}

  ${laptop({
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  })}
`;

const TeamMemberCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TeamMemberAvatar = styled.div`
  padding: 10px 0px;
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 100%;
`;

const Avatar = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;

const TeamMemberName = styled.p`
  font-size: 24px;
`;

const TeamMemberDesignation = styled.p`
  font-size: 20px;
`;

const TeamMemberSocialLinkWrapper = styled.div`
  display: flex;
  padding-bottom: 20px;
  gap: 15px;
`;

const TeamMemberSocialLink = styled.div`
  cursor: pointer;
  :hover {
    color: #00b4d8;
  }
`;

const OurTeam = () => {
  return (
    <>
      <Header />

      <OurTeamWrapper>
        <Heading title="Our Team:" />
        <OurTeamContainer>
          {Array.apply(null, Array(8)).map((member, index) => (
            <TeamMemberCard key={index}>
              <TeamMemberAvatar>
                <Avatar src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" />
              </TeamMemberAvatar>
              <TeamMemberName>Lyn Bryan</TeamMemberName>
              <TeamMemberDesignation>CEO</TeamMemberDesignation>
              <TeamMemberSocialLinkWrapper>
                <TeamMemberSocialLink>
                  <Linkedin style={{ transform: "scale(1.2)" }} />
                </TeamMemberSocialLink>
                <TeamMemberSocialLink>
                  <Twitter style={{ transform: "scale(1.2)" }} />
                </TeamMemberSocialLink>
                <TeamMemberSocialLink>
                  <Facebook style={{ transform: "scale(1.2)" }} />
                </TeamMemberSocialLink>
              </TeamMemberSocialLinkWrapper>
            </TeamMemberCard>
          ))}
        </OurTeamContainer>
      </OurTeamWrapper>

      <Footer />
    </>
  );
};

export default OurTeam;
