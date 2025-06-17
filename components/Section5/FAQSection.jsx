"use client";
import React, { useState } from "react";
import FAQItem from "./FAQItem";
import {
  FAQContainer,
  ContentWrapper,
  HeaderSection,
  MainTitle,
  Description,
  ButtonGroup,
  MoreQuestionsButton,
  ContactLink,
  FAQList,
} from "./FAQStyles";

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState(new Set([0])); // First item expanded by default

  const faqData = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Digital marketing improves website visibility through SEO optimization, content marketing, social media promotion, and paid advertising campaigns that drive targeted traffic to your site.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "Results can vary depending on the strategy and industry, but typically you can see initial results within 3-6 months, with more significant results developing over 6-12 months of consistent effort.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "Success is measured through various KPIs including website traffic, conversion rates, lead generation, ROI, engagement metrics, and brand awareness indicators using analytics tools and reporting dashboards.",
    },
  ];

  const toggleItem = (index) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  const handleMoreQuestions = () => {
    // Handle more questions action
    console.log("More questions clicked");
  };

  const handleContactUs = () => {
    // Handle contact us action
    console.log("Contact us clicked");
  };

  return (
    <FAQContainer role="main" aria-labelledby="faq-title">
      <ContentWrapper>
        <HeaderSection>
          <MainTitle id="faq-title">Digital Marketing FAQs</MainTitle>
          <Description>
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </Description>
          <ButtonGroup>
            <MoreQuestionsButton
              onClick={handleMoreQuestions}
              aria-label="View more questions"
            >
              More Questions
            </MoreQuestionsButton>
            <ContactLink
              onClick={handleContactUs}
              aria-label="Contact us for more information"
            >
              Contact Us
            </ContactLink>
          </ButtonGroup>
        </HeaderSection>

        <FAQList role="list" aria-label="Frequently asked questions">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedItems.has(index)}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </FAQList>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
