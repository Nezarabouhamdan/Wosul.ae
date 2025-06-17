"use client";
import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";
import { HeroContent } from "./HeroContent";
import { BrandLogos } from "./BrandLogos";
import { ImageGallery } from "./ImageGallery";

const HeroContainer = styled.main`
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  min-height: 100vh;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 775px;
  width: 100%;
  padding-bottom: 65px;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -0.1;
`;

const ContentSection = styled.section`
  position: relative;
  align-self: center;
  margin-top: 13px;
  width: 100%;
  max-width: 85%;
  padding: 0 20px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 54% 46%;
  gap: 20px;
  align-items: start;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 94px;

  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <BackgroundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b90cb7317afb49812ce267fe67126ecc0e488a0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt="Modern office workspace background"
        />

        <Navigation />

        <ContentSection>
          <MainContent>
            <LeftColumn>
              <HeroContent />
              <BrandLogos />
            </LeftColumn>

            <RightColumn>
              <ImageGallery />
            </RightColumn>
          </MainContent>
        </ContentSection>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
