"use client";
import React from "react";
import styled from "styled-components";

function FilterTabs({ tabs, activeTab, onTabChange }) {
  const handleKeyDown = (event, tabId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onTabChange(tabId);
    }
  };

  return (
    <TabsContainer role="tablist" aria-label="Portfolio categories">
      <TabRow>
        {tabs.slice(0, 2).map((tab) => (
          <TabButton
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            $isActive={activeTab === tab.id}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabRow>
      <TabRow>
        {tabs.slice(2).map((tab) => (
          <TabButton
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            $isActive={activeTab === tab.id}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabRow>
    </TabsContainer>
  );
}

const TabsContainer = styled.nav`
  display: flex;
  margin-top: 53px;
  align-items: start;
  gap: 24px;
  font-family:
    Manrope,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.32px;
  line-height: 1.4;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const TabRow = styled.div`
  display: flex;
  min-width: 240px;
  align-items: start;
  gap: 24px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    min-width: 140px;
    justify-content: center;
  }
`;

const TabButton = styled.button`
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: ${(props) =>
    props.$isActive ? "rgba(53, 182, 255, 1)" : "transparent"};
  display: flex;
  padding: 13px 16px;
  align-items: center;
  gap: 32px;
  justify-content: center;
  width: 236px;
  color: rgba(255, 255, 255, 1);
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "rgba(53, 182, 255, 0.8)" : "rgba(255, 255, 255, 0.1)"};
  }

  &:focus {
    outline: 2px solid rgba(53, 182, 255, 1);
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid rgba(53, 182, 255, 1);
    outline-offset: 2px;
  }
`;

export default FilterTabs;
