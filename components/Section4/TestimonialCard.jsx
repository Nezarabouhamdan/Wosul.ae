"use client";
import React from "react";
import styled from "styled-components";

function TestimonialCard({ quote }) {
  return (
    <QuoteContainer role="article" aria-label="Customer testimonial">
      <QuoteText>"{quote}"</QuoteText>
    </QuoteContainer>
  );
}

const QuoteContainer = styled.div`
  width: 100%;
`;

const QuoteText = styled.blockquote`
  color: rgba(1, 2, 5, 1);
  font-size: 36px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  line-height: 58px;
  letter-spacing: -1.08px;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export default TestimonialCard;
