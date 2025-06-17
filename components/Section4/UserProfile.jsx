"use client";
import React from "react";
import styled from "styled-components";

function UserProfile({ user }) {
  return (
    <ProfileContainer>
      <Avatar src={user.avatar} alt={`${user.name} profile picture`} />
      <ProfileInfo>
        <UserName>{user.name}</UserName>
        <UserTitle>{user.title}</UserTitle>
      </ProfileInfo>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  align-items: center;
  gap: 24px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  line-height: 1.8;
  justify-content: start;
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 70px;
  border-radius: 50%;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
`;

const ProfileInfo = styled.div`
  align-self: stretch;
  margin: auto 0;
`;

const UserName = styled.h3`
  color: rgba(1, 2, 5, 1);
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const UserTitle = styled.p`
  color: rgba(135, 140, 145, 1);
  font-size: 16px;
  font-weight: 500;
  margin: 19px 0 0 0;
`;

export default UserProfile;
