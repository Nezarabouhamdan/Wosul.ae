import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const NavigationContainer = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  padding: 30px 80px;
  align-items: center;
  gap: 100px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 20px;
    gap: 40px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  min-width: 240px;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Logo = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  flex-shrink: 0;
`;

const MenuList = styled.ul`
  display: flex;
  min-width: 240px;
  align-items: start;
  gap: 33px;
  justify-content: start;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  color: rgba(2, 4, 7, 1);
  font-weight: 600;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 7px;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: rgba(1, 2, 5, 0.8);
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  flex-shrink: 0;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: start;
  gap: 9px;
  justify-content: start;
`;

const ContactLink = styled.a`
  color: rgba(2, 4, 7, 1);
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  margin: auto 0;

  &:hover {
    color: rgba(1, 2, 5, 0.8);
  }

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const Navigation = () => {
  const menuItems = [
    {
      label: "Service",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dec1319bca0fa76e89fc21c91057d0d754e8ace0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
    {
      label: "Agency",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dec1319bca0fa76e89fc21c91057d0d754e8ace0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
    {
      label: "Case study",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dec1319bca0fa76e89fc21c91057d0d754e8ace0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
    {
      label: "Resources",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dec1319bca0fa76e89fc21c91057d0d754e8ace0?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8",
    },
  ];

  return (
    <NavigationContainer role="navigation" aria-label="Main navigation">
      <LogoSection>
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c954c05982c2da21920002cea05953d42e62435?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          alt="Company Logo"
        />
        <MenuList role="menubar">
          {menuItems.map((item, index) => (
            <MenuItem key={index} role="none">
              <MenuLink
                href="#"
                role="menuitem"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </MenuLink>
              <MenuIcon src={item.icon} alt="" />
            </MenuItem>
          ))}
          <MenuItem role="none">
            <ContactLink
              href="#contact"
              role="menuitem"
              aria-label="Contact us"
            >
              Contact
            </ContactLink>
          </MenuItem>
        </MenuList>
      </LogoSection>

      <ActionSection>
        <Button variant="secondary" ariaLabel="Get started with our services">
          Get started
        </Button>
        <Button
          variant="primary"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c169b6daf13eac4bec4ff534d2078bd3e4b7dbbb?placeholderIfAbsent=true&apiKey=aa3beaa1347a405eb89ef941921d55f8"
          ariaLabel="Schedule a consultation call"
        >
          Call Now
        </Button>
      </ActionSection>
    </NavigationContainer>
  );
};
