import React from "react";
import styled from "styled-components";

const BrandSection = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    gap: 32px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BrandText = styled.p`
  color: rgba(1, 2, 5, 1);
  font-size: 14px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  line-height: 22px;
  margin: 0;
  width: 150px;
`;

const LogoContainer = styled.div`
  display: flex;
  min-width: 240px;
  align-items: start;
  gap: 28px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    min-width: auto;
    justify-content: center;
  }
`;

const BrandLogo = styled.img`
  object-fit: contain;
  object-position: center;
  flex-shrink: 0;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Logo1 = styled(BrandLogo)`
  aspect-ratio: 3.27;
  width: 108px;
`;

const Logo2 = styled(BrandLogo)`
  aspect-ratio: 3.48;
  width: 115px;
`;

const Logo3 = styled(BrandLogo)`
  aspect-ratio: 2.97;
  width: 98px;
`;

export const BrandLogos = () => {
  const brands = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dd17e7ea40ab2be8e75fae2b2ab03e0bcd54b63?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
      alt: "Brand partner 1",
      component: Logo1,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/55eeb7e2dd255ff1b4406f3acc43e0c3682d82de?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
      alt: "Brand partner 2",
      component: Logo2,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/95cc4a7dbd58edfdedc97449bd2239aaae1f0cf8?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
      alt: "Brand partner 3",
      component: Logo3,
    },
  ];

  return (
    <BrandSection aria-labelledby="trusted-brands">
      <BrandText id="trusted-brands">
        Trusted by the world's biggest brands
      </BrandText>
      <LogoContainer role="list" aria-label="Partner brand logos">
        {brands.map((brand, index) => {
          const LogoComponent = brand.component;
          return (
            <LogoComponent
              key={index}
              src={brand.src}
              alt={brand.alt}
              role="listitem"
              tabIndex="0"
            />
          );
        })}
      </LogoContainer>
    </BrandSection>
  );
};
