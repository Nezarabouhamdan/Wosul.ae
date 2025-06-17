"use client";
import React, { useRef } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects, activeCategory }) {
  const gridRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      scrollLeft();
    } else if (event.key === "ArrowRight") {
      scrollRight();
    }
  };

  return (
    <GridContainer>
      <ScrollableGrid
        ref={gridRef}
        role="tabpanel"
        id={`panel-${activeCategory}`}
        aria-label={`${activeCategory} projects`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <CenterImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a3a8606543327c10b5bcb65647b6ab16b14f04e?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
          alt=""
          aria-hidden="true"
        />
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ScrollableGrid>
      <ScrollControls>
        <ScrollButton
          onClick={scrollLeft}
          aria-label="Scroll projects left"
          type="button"
        >
          ←
        </ScrollButton>
        <ScrollButton
          onClick={scrollRight}
          aria-label="Scroll projects right"
          type="button"
        >
          →
        </ScrollButton>
      </ScrollControls>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  position: relative;
  margin-top: 80px;
  margin-bottom: -21px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 10px;
    margin-top: 40px;
  }
`;

const ScrollableGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 54px;
  justify-content: start;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(53, 182, 255, 1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(53, 182, 255, 0.8);
  }

  &:focus {
    outline: 2px solid rgba(53, 182, 255, 1);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    gap: 40px;
  }
`;

const CenterImage = styled.img`
  aspect-ratio: 0.66;
  object-fit: contain;
  object-position: center;
  width: 460px;
  border-radius: 261px;
  z-index: 10;
  margin-top: 2px;
  flex-shrink: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    width: 300px;
  }
`;

const ScrollControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 20;
`;

const ScrollButton = styled.button`
  background: rgba(53, 182, 255, 1);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(53, 182, 255, 0.8);
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 1);
    outline-offset: 2px;
  }
`;

export default ProjectGrid;
