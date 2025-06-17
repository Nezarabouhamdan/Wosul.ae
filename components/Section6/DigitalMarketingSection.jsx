"use client";
import React from "react";
import styled from "styled-components";

// Hero Section Component
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <MainHeading>
          Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue
        </MainHeading>
        <HeroDetails>
          <Description>
            We are the top digital marketing agency for branding corp. We offer
            a full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </Description>
          <SeeMoreButton
            role="button"
            tabIndex={0}
            onClick={() => console.log("See more clicked")}
            onKeyDown={(e) =>
              e.key === "Enter" && console.log("See more clicked")
            }
          >
            See more
          </SeeMoreButton>
        </HeroDetails>
      </HeroContent>
    </HeroContainer>
  );
};

// Article Card Component
const ArticleCard = ({
  dotColor,
  title,
  description,
  buttonType,
  imageUrl,
}) => {
  const handleButtonClick = () => {
    console.log(`Article button clicked: ${title}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <Card>
      <CardHeader>
        <ReadingInfo>
          <ColorDot color={dotColor} />
          <ReadTime>5 min read</ReadTime>
        </ReadingInfo>
        <ArticleTitle>{title}</ArticleTitle>
      </CardHeader>
      <CardFooter>
        <ArticleDescription>{description}</ArticleDescription>
        <ActionButton
          variant={buttonType}
          role="button"
          tabIndex={0}
          onClick={handleButtonClick}
          onKeyDown={handleKeyDown}
          aria-label={`Read more about ${title}`}
        >
          <ArrowIcon src={imageUrl} alt="Arrow icon" />
        </ActionButton>
      </CardFooter>
    </Card>
  );
};

// Main Component
const DigitalMarketingSection = () => {
  const articles = [
    {
      dotColor: "rgba(69, 167, 222, 1)",
      title: "How a Digital Marketing Agency Can Boost Your Business",
      description:
        "We are the top digital marketing agency for branding corp. We offer a full rang engine ....",
      buttonType: "filled",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9feb48b2b64589da53ddf52fc9228e820104cda?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
    {
      dotColor: "rgba(234, 95, 56, 1)",
      title: "The Latest Trends and Strategies with a Digital Marketing Agency",
      description:
        "Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry",
      buttonType: "outlined",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/577f3745d64dd8c5eee81012e2198f871f0a6b4b?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
    {
      dotColor: "rgba(106, 38, 241, 1)",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description:
        "What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,",
      buttonType: "outlined",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4c1b2cdc96eba15b6a64bc468cd2fc1d0710896e?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
  ];

  return (
    <SectionContainer>
      <ContentWrapper>
        <HeroSection />{" "}
        <BackgroundImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b3e6bb8bfb42225b49748c167a9daf0713ad1c0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt="Digital marketing background"
        />
        <ArticlesGrid>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              dotColor={article.dotColor}
              title={article.title}
              description={article.description}
              buttonType={article.buttonType}
              imageUrl={article.imageUrl}
            />
          ))}
        </ArticlesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

// Styled Components
const SectionContainer = styled.section`
  background-color: rgba(250, 250, 250, 1);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 751px;
  width: 100%;
  padding: 70px 80px 127px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 70px 20px 100px;
  }
`;

const HeroContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 39px;
  z-index: 90;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -0.4;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 39px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const MainHeading = styled.h1`
  color: rgba(1, 2, 5, 1);
  font-size: 48px;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 62px;
  letter-spacing: -1.44px;
  align-self: stretch;
  margin: auto 0;
  width: 684px;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 58px;
  }
`;

const HeroDetails = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  flex-direction: column;
  align-items: stretch;
  font-size: 16px;
  justify-content: center;
  width: 557px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.p`
  color: rgba(135, 140, 145, 1);
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 29px;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SeeMoreButton = styled.div`
  border-radius: 50px;
  border: 1px solid rgba(1, 2, 5, 1);
  display: flex;
  margin-top: 48px;
  width: 156px;
  max-width: 100%;
  padding: 17px 16px;
  align-items: end;
  gap: 32px;
  font-family: Manrope, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(1, 2, 5, 1);
  font-weight: 700;
  letter-spacing: -0.32px;
  line-height: 1.4;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(1, 2, 5, 0.05);
  }

  &:focus {
    outline: 2px solid rgba(1, 2, 5, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ArticlesGrid = styled.div`
  position: relative;
  display: flex;
  margin-top: 64px;
  margin-bottom: -25px;
  align-items: start;
  gap: 24px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    margin-bottom: 10px;
    margin-top: 40px;
  }
`;

const Card = styled.article`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  min-width: 240px;
  padding: 32px;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;

  &:first-child {
    padding-bottom: 75px;
    margin-bottom: 113px;

    @media (max-width: 640px) {
      margin-bottom: -3px;
    }
  }

  @media (max-width: 991px) {
    padding: 32px 20px;
  }
`;

const CardHeader = styled.header`
  width: 100%;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
`;

const ReadingInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 100px;
  font-size: 14px;
  color: rgba(135, 140, 145, 1);
  font-weight: 500;
  line-height: 1.6;
  justify-content: space-between;
`;

const ColorDot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: flex;
  width: 14px;
  flex-shrink: 0;
  height: 14px;
`;

const ReadTime = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const ArticleTitle = styled.h2`
  color: rgba(1, 2, 5, 1);
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: -0.78px;
  margin-top: 24px;
  margin-bottom: 0;
`;

const CardFooter = styled.div`
  display: flex;
  margin-top: 56px;
  width: 100%;
  align-items: center;
  gap: 39px;
  justify-content: space-between;

  @media (max-width: 991px) {
    margin-top: 40px;
    gap: 40px;
  }
`;

const ArticleDescription = styled.p`
  color: rgba(135, 140, 145, 1);
  font-size: 14px;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 22px;
  margin: auto 0;
  width: 220px;
`;

const ActionButton = styled.div`
  border-radius: 70px;
  align-self: stretch;
  display: flex;
  margin: auto 0;
  padding: 16px 32px;
  align-items: center;
  gap: 42px;
  justify-content: center;
  width: 88px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "filled"
      ? `
    background-color: rgba(1, 2, 5, 1);

    &:hover {
      background-color: rgba(1, 2, 5, 0.8);
    }
  `
      : `
    border: 1px solid rgba(1, 2, 5, 1);
    background-color: transparent;

    &:hover {
      background-color: rgba(1, 2, 5, 0.05);
    }
  `}

  &:focus {
    outline: 2px solid rgba(1, 2, 5, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

const ArrowIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

export default DigitalMarketingSection;
