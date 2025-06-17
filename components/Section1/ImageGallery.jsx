import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const PrimaryImage = styled.img`
  aspect-ratio: 0.99;
  object-fit: fill;
  object-position: center;
  width: 100%;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const SecondaryImage = styled.img`
  aspect-ratio: 1.06;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 20px;
  margin-top: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    margin-top: 0;
  }
`;

const FullWidthImage = styled.img`
  aspect-ratio: 2.72;
  object-fit: cover;
  object-position: center;
  width: 100%;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
  }
`;

export const ImageGallery = () => {
  return (
    <GalleryContainer role="img" aria-label="Portfolio showcase gallery">
      <GalleryGrid>
        <ImageContainer>
          <PrimaryImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e474e4476368b801efe850fa0d4af554b453c37?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
            alt="Featured project showcase - modern web design"
            tabIndex="0"
          />
        </ImageContainer>
        <ImageContainer>
          <SecondaryImage
            src="https://cdn.builder.io/api/v1/image/assets%2Faa3beaa1347a405eb89ef941921d55f8%2F24db9c35f8b94c599bb6861dd988ae5b"
            alt="Digital marketing campaign results"
            tabIndex="0"
          />
        </ImageContainer>
      </GalleryGrid>
      <FullWidthImage
        src="https://cdn.builder.io/api/v1/image/assets%2Faa3beaa1347a405eb89ef941921d55f8%2Faccea31ed4b84dec84d29e9f1426073d"
        alt="Team collaboration and strategy session"
        tabIndex="0"
      />
    </GalleryContainer>
  );
};
