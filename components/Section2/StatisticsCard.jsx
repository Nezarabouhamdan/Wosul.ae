"use client";
import React from "react";
import styled from "styled-components";

const StatisticsCard = () => {
  return (
    <CardContainer>
      <StatsContent>
        <ProjectCount>
          920<AccentPlus>+</AccentPlus>
        </ProjectCount>
        <ProjectDescription>Project finish with superbly</ProjectDescription>
      </StatsContent>
      <UserAvatars>
        <Avatar
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0f91d0521ad1e72e37e3f332d8a3c07f0cc73d?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
          alt="Team member"
        />
        <Avatar
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e07f0a1ada41cb747d8bdecd8a85df65fa0963?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
          alt="Team member"
        />
        <Avatar
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e07f0a1ada41cb747d8bdecd8a85df65fa0963?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
          alt="Team member"
        />
        <Avatar
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e07f0a1ada41cb747d8bdecd8a85df65fa0963?placeholderIfAbsent=true&apiKey=68955489568e4e37916091f08b0f16db"
          alt="Team member"
        />
        <MoreIndicator>+</MoreIndicator>
      </UserAvatars>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-bottom: 50px;

  border-radius: 30px;
  background-color: rgba(1, 1, 4, 1);
  display: flex;
  width: 100%;
  padding: 40px 19px 40px 40px;
  flex-direction: column;
  align-items: stretch;
  font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;

  @media (max-width: 991px) {
    padding: 20px;
  }

  @media (max-width: 640px) {
    width: 77%;
  }
`;

const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const ProjectCount = styled.h2`
  color: rgba(255, 255, 255, 1);
  font-size: 84px;
  font-weight: 700;
  letter-spacing: -2.52px;
  margin: 0;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const AccentPlus = styled.span`
  color: rgba(53, 182, 255, 1);
`;

const ProjectDescription = styled.p`
  color: rgba(135, 140, 145, 1);
  font-size: 19px;
  font-weight: 500;
  line-height: 1.7;
  margin: 27px 0 0 0;
`;

const UserAvatars = styled.div`
  display: flex;
  margin-top: 128px;
  align-items: start;
  gap: 7px;
  font-size: 74px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: -2.22px;
  justify-content: start;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
    white-space: initial;
  }
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: 640px) {
    width: 50px;
    height: 50px;
  }
`;

const MoreIndicator = styled.div`
  @media (max-width: 991px) {
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

export default StatisticsCard;
