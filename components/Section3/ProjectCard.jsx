import React from "react";
import styled from "styled-components";

function ProjectCard({ project, index }) {
  return (
    <CardContainer>
      <CardContent>
        <ProjectImage src={project.image} alt={project.title} />
        <CompanyInfo>
          <CompanyLogo src={project.logo} alt={`${project.company} logo`} />
          <CompanyName>{project.company}</CompanyName>
        </CompanyInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
      </CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  border-radius: 0px 0px 0px 0px;
  min-width: 460px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  width: 460px;
  flex-shrink: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    min-width: 300px;
    width: 300px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
  z-index: 10;
  min-height: 480px;
  margin-top: -10px;
  width: 100%;
  padding: 47px 42px;
  align-items: stretch;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: -10px;
    padding: 47px 20px;
  }
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 30px;
  z-index: -1;
`;

const CompanyInfo = styled.div`
  position: relative;
  align-self: start;
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 17px;
  letter-spacing: -0.51px;
  line-height: 1;
  justify-content: start;
`;

const CompanyLogo = styled.img`
  aspect-ratio: 52.63;
  object-fit: contain;
  object-position: center;
  width: 54px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
`;

const CompanyName = styled.span`
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
`;

const ProjectTitle = styled.h3`
  position: relative;
  font-size: 24px;
  line-height: 1.4;
  margin-top: 356px;
  margin-bottom: 0;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default ProjectCard;
