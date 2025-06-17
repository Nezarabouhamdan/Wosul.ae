"use client";
import React from "react";
import {
  FAQItemContainer,
  QuestionButton,
  QuestionText,
  ToggleIcon,
  AnswerSection,
} from "./FAQStyles";

const FAQItem = ({ question, answer, isExpanded, onToggle, index }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <FAQItemContainer role="listitem">
      <QuestionButton
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        isExpanded={isExpanded}
      >
        <QuestionText>{question}</QuestionText>
        <ToggleIcon
          src={
            isExpanded
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/aebb1cf63591f56c03f23abfb256c631be2d359c?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/133720986b8ad800d577edd17d9b6019c395afe6?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          }
          alt={isExpanded ? "Collapse answer" : "Expand answer"}
          isExpanded={isExpanded}
        />
      </QuestionButton>

      {isExpanded && (
        <AnswerSection
          id={`faq-answer-${index}`}
          aria-labelledby={`faq-question-${index}`}
          role="region"
        >
          {answer}
        </AnswerSection>
      )}
    </FAQItemContainer>
  );
};

export default FAQItem;
