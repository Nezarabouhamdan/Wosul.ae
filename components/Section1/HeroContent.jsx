import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const ContentContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PreHeading = styled.p`
  font-size: 18px;
  color: rgba(135, 140, 145, 1);
  font-weight: 500;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  color: rgba(1, 2, 5, 1);
  font-weight: 600;
  margin: 0 0 24px 0;
  line-height: 1.3;
`;

const MainHeading = styled.h1`
  max-width: 700px;
  width: 100%;
  font-size: 60px;
  color: rgba(1, 2, 5, 1);
  font-weight: 600;
  letter-spacing: -2.16px;
  line-height: 79px;
  margin: 0 0 48px 0;

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 49px;
    margin-bottom: 40px;
  }
`;

const Description = styled.p`
  color: rgba(135, 140, 145, 1);
  font-weight: 500;
  line-height: 29px;
  margin: 0 0 48px 0;

  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  justify-content: flex-start;
  margin-bottom: 48px;

  @media (max-width: 991px) {
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
  }
`;

const SecondaryButton = styled.a`
  color: rgba(1, 2, 5, 1);
  font-weight: 600;
  line-height: 1.8;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: rgba(1, 2, 5, 0.8);
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const HeroContent = () => {
  return (
    <ContentContainer>
      <MainHeading>
        Stay ahead of the curve with our forward-thinking
      </MainHeading>

      <Description>
        An award-winning SEO agency with disciplines in digital marketing,
        design, and website development. focused on understanding you.
      </Description>

      <ButtonContainer>
        <Button
          variant="primary"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae5a903d1293a334bc4b3579e580ecb4819c6a1?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          ariaLabel="Schedule a consultation call with our experts"
        >
          Schedule Call
        </Button>
        <SecondaryButton
          href="#case-studies"
          aria-label="View our successful case studies"
        >
          View Case Study
        </SecondaryButton>
      </ButtonContainer>
    </ContentContainer>
  );
};
