"use client";
import React from "react";
import styled from "styled-components";
import StatisticsCard from "./StatisticsCard";

const AboutSection = () => {
  return (
    <SectionContainer>
      <BackgroundImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c27d5eb311aca2b2e46e56954b1dc9ef19aacb?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
        alt=""
        role="presentation"
      />
      <ContentWrapper>
        <TextContent>
          <MainHeading>
            Provide the best service with out of the box ideas
          </MainHeading>
          <Description>
            we are a passionate team of digital marketing enthusiasts dedicated
            to helping businesses succeed in the digital world. With years of
            experience and a deep understanding of the ever-evolving online
            landscape, we stay at the forefront of industry trends and
            technologies.
          </Description>
        </TextContent>
        <BottomSection>
          <LeftColumn>
            <StatisticsWrapper>
              <StatisticsCard />
            </StatisticsWrapper>
          </LeftColumn>
          <RightColumn>
            <HeroImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c0808bbee980fdeb9a56744f8ae96d83d4d4ab?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
              alt="Team collaboration and digital marketing workspace"
            />
          </RightColumn>
        </BottomSection>
      </ContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  position: relative;
  min-height: 716px;
  display: flex;
  justify-content: center;
  align-content: center;
  aling-items: center;
  width: 100%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  position: relative;
  z-index: 1;
  max-width: 1298px;
  width: 100%;

  @media (max-width: 991px) {
    padding: 72px 20px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`;

const TextContent = styled.header`
  align-self: start;
  display: flex;
  align-items: start;
  gap: 39px;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 65px;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const MainHeading = styled.h1`
  color: rgba(1, 2, 5, 1);
  font-size: 48px;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: -1.44px;
  width: 684px;
  margin: 0;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 58px;
    width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 25px;
    line-height: 1.4;
    width: auto;
    max-width: 50%;
  }
`;

const Description = styled.p`
  color: rgba(135, 140, 145, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 29px;
  width: 557px;
  margin: 0;

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    max-width: 50%;
    width: 680px;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: row;
  width: 447.6px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  line-height: normal;
  width: 50%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const HeroImage = styled.img`
  aspect-ratio: 2.11;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 30px;
  flex-grow: 1;
  margin-left: -2px;

  @media (max-width: 991px) {
    margin-left: 0;
  }

  @media (max-width: 640px) {
    margin-left: 12px;
    margin-top: 19px;
  }
`;

export default AboutSection;
