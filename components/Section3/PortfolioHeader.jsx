import React from "react";
import styled from "styled-components";

function PortfolioHeader() {
  return (
    <HeaderContainer>
      <MainHeading>
        Real-world examples of how we have helped companies achieve their
        marketing objectives.
      </MainHeading>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  font-size: 48px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: -1.44px;
  text-align: center;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 58px;
  }
`;

export default PortfolioHeader;
