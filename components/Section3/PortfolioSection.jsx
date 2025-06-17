"use client";
import React, { useState } from "react";
import styled from "styled-components";
import PortfolioHeader from "./PortfolioHeader";
import FilterTabs from "./FilterTabs";
import ProjectGrid from "./ProjectGrid";

const portfolioData = {
  all: [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e529b70eb7b8e54012d524e528b625a1117b26?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Ai Corporation. 2023",
      title: "Ai Wave - Ai Chatbot Mobile App",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b8301d18bf89f30858e4759276381cd657b58cf?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Lancer Corporation. 2023",
      title: "App Lancer - Freelance Mobile App",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e529b70eb7b8e54012d524e528b625a1117b26?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Tech Solutions. 2023",
      title: "E-commerce Platform",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b8301d18bf89f30858e4759276381cd657b58cf?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Digital Agency. 2023",
      title: "Portfolio Website",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
  ],
  uiux: [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e529b70eb7b8e54012d524e528b625a1117b26?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Ai Corporation. 2023",
      title: "Ai Wave - Ai Chatbot Mobile App",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b8301d18bf89f30858e4759276381cd657b58cf?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Lancer Corporation. 2023",
      title: "App Lancer - Freelance Mobile App",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e529b70eb7b8e54012d524e528b625a1117b26?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Design Studio. 2023",
      title: "Banking App Interface",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
  ],
  marketing: [
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b8301d18bf89f30858e4759276381cd657b58cf?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Marketing Pro. 2023",
      title: "Social Media Campaign",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 7,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e529b70eb7b8e54012d524e528b625a1117b26?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Growth Agency. 2023",
      title: "Email Marketing Platform",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
  ],
  branding: [
    {
      id: 8,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b8301d18bf89f30858e4759276381cd657b58cf?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Brand Studio. 2023",
      title: "Corporate Identity Design",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
    {
      id: 9,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f7e529b70eb7b8e54012d524e528b625a1117b26?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      backgroundImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
      company: "Creative House. 2023",
      title: "Logo Design System",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b81e286983dd5012f889c6436e4e88867355c42?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db",
    },
  ],
};

const tabsData = [
  { id: "all", label: "All Work [20]", count: 20 },
  { id: "uiux", label: "UI/UX Design[10]", count: 10 },
  { id: "marketing", label: "Digital Marketing [5]", count: 5 },
  { id: "branding", label: "Branding [5]", count: 5 },
];

function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("uiux");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <PortfolioContainer role="main" aria-label="Portfolio showcase">
      <BackgroundImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3ffe1b0288d47d355ba25f3a815b0e0d507f606?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
        alt=""
        aria-hidden="true"
      />
      <ContentWrapper>
        <PortfolioHeader />
        <FilterTabs
          tabs={tabsData}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <ProjectGrid
          projects={portfolioData[activeTab]}
          activeCategory={activeTab}
        />
      </ContentWrapper>
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.section`
  border-radius: 30px;
  background-color: rgba(2, 6, 9, 1);
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 926px;
  width: 100%;
  padding: 94px 64px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px;
  }
`;

export default PortfolioSection;
