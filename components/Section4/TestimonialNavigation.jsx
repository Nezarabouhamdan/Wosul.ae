"use client";
import React from "react";
import styled from "styled-components";

function TestimonialNavigation({
  currentIndex,
  totalCount,
  onPrevious,
  onNext,
}) {
  const currentNumber = String(currentIndex + 1).padStart(2, "0");
  const totalNumber = String(totalCount).padStart(2, "0");

  return (
    <NavigationContainer role="navigation" aria-label="Testimonial navigation">
      <PreviousButton
        onClick={onPrevious}
        aria-label="Previous testimonial"
        type="button"
      >
        <NavigationIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/074efaa813c36b6d939e79d7edfe1ce8d7e00b41?placeholderIfAbsent=true"
          alt=""
        />
      </PreviousButton>

      <PageIndicator
        aria-live="polite"
        aria-label={`Testimonial ${currentNumber} of ${totalNumber}`}
      >
        {currentNumber}
        <PageTotal>/{totalNumber}</PageTotal>
      </PageIndicator>

      <NextButton onClick={onNext} aria-label="Next testimonial" type="button">
        <NavigationIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ae5a903d1293a334bc4b3579e580ecb4819c6a1?placeholderIfAbsent=true"
          alt=""
        />
      </NextButton>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  align-items: center;
  gap: 38px;
  justify-content: center;
`;

const NavigationButton = styled.button`
  border-radius: 70px;
  border-style: solid;
  border-width: 1px;
  align-self: stretch;
  display: flex;
  margin: auto 0;
  padding: 16px 32px;
  align-items: center;
  gap: 40px 42px;
  justify-content: center;
  width: 88px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid rgba(1, 2, 5, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    padding: 16px 20px;
  }
`;

const PreviousButton = styled(NavigationButton)`
  transform: rotate(3.141592653589793rad);
  border-color: rgba(1, 2, 5, 1);

  &:hover {
    transform: rotate(3.141592653589793rad) scale(1.05);
    background-color: rgba(1, 2, 5, 0.05);
  }
`;

const NextButton = styled(NavigationButton)`
  background-color: rgba(1, 2, 5, 1);
  border-color: rgba(1, 2, 5, 1);

  &:hover {
    background-color: rgba(1, 2, 5, 0.9);
    transform: scale(1.05);
  }
`;

const NavigationIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const PageIndicator = styled.div`
  color: rgba(1, 2, 5, 1);
  font-size: 16px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  line-height: 1.8;
  text-decoration: underline;
  align-self: stretch;
  margin: auto 0;
`;

const PageTotal = styled.span`
  text-decoration: none;
  color: rgba(1, 2, 5, 1);
`;

export default TestimonialNavigation;
