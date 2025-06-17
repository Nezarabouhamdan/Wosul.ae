"use client";
import React, { useState } from "react";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import UserProfile from "./UserProfile";
import TestimonialNavigation from "./TestimonialNavigation";

const testimonialData = [
  {
    id: 1,
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    user: {
      name: "Michael Kaizer",
      title: "CEO of Basecamp Corp",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/696161ea1dd3ba787e0e2a8e1a301aa1111569a9?placeholderIfAbsent=true",
    },
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6abe413dcd10d1c61a3bf16302e9ebd41fa46606?placeholderIfAbsent=true",
  },
  {
    id: 2,
    quote:
      "Outstanding service and exceptional results. Their team's dedication to understanding our business needs has transformed our marketing approach completely.",
    user: {
      name: "Sarah Johnson",
      title: "Marketing Director at TechFlow",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/696161ea1dd3ba787e0e2a8e1a301aa1111569a9?placeholderIfAbsent=true",
    },
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6abe413dcd10d1c61a3bf16302e9ebd41fa46606?placeholderIfAbsent=true",
  },
  {
    id: 3,
    quote:
      "Professional, innovative, and results-driven. They've helped us achieve remarkable growth through strategic campaigns and creative solutions.",
    user: {
      name: "David Chen",
      title: "Founder of InnovateLab",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/696161ea1dd3ba787e0e2a8e1a301aa1111569a9?placeholderIfAbsent=true",
    },
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6abe413dcd10d1c61a3bf16302e9ebd41fa46606?placeholderIfAbsent=true",
  },
  {
    id: 4,
    quote:
      "Their expertise in digital marketing is unmatched. The ROI we've seen from their campaigns has exceeded all our expectations.",
    user: {
      name: "Emily Rodriguez",
      title: "VP of Growth at StartupX",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/696161ea1dd3ba787e0e2a8e1a301aa1111569a9?placeholderIfAbsent=true",
    },
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6abe413dcd10d1c61a3bf16302e9ebd41fa46606?placeholderIfAbsent=true",
  },
  {
    id: 5,
    quote:
      "A true partnership that has driven our success. Their strategic approach and attention to detail make them an invaluable asset to our team.",
    user: {
      name: "James Wilson",
      title: "CMO of Enterprise Solutions",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/696161ea1dd3ba787e0e2a8e1a301aa1111569a9?placeholderIfAbsent=true",
    },
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6abe413dcd10d1c61a3bf16302e9ebd41fa46606?placeholderIfAbsent=true",
  },
];

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1,
    );
  };

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <TestimonialContainer>
      <ContentWrapper>
        <BackgroundImage
          src={currentTestimonial.backgroundImage}
          alt=""
          role="presentation"
        />
        <TestimonialContent>
          <TestimonialCard quote={currentTestimonial.quote} />
          <BottomSection>
            <UserProfile user={currentTestimonial.user} />
            <TestimonialNavigation
              currentIndex={currentIndex}
              totalCount={testimonialData.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </BottomSection>
        </TestimonialContent>
      </ContentWrapper>
    </TestimonialContainer>
  );
}

const TestimonialContainer = styled.section`
  background-color: rgba(250, 250, 250, 1);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 543px;
  width: 100%;
  padding: 99px 80px;
  align-items: stretch;
  justify-content: center;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const TestimonialContent = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BottomSection = styled.div`
  display: flex;
  margin-top: 74px;
  width: 100%;
  max-width: 1280px;
  align-items: center;
  gap: 40px 100px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default TestimonialSection;
