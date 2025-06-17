import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 70px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.32px;
  line-height: 1.4;
  padding: 16px 32px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: rgba(1, 2, 5, 1);
    color: rgba(255, 255, 255, 1);
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    border: 1px solid rgba(1, 2, 5, 1);
    background-color: transparent;
    color: rgba(1, 2, 5, 1);
    border-radius: 50px;
    padding: 13px 16px;
    width: 156px;
    justify-content: center;
  `}

  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const Button = ({
  children,
  variant = "primary",
  icon,
  onClick,
  ariaLabel,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      aria-label={ariaLabel || children}
      {...props}
    >
      <span>{children}</span>
      {icon && <ButtonIcon src={icon} alt="" />}
    </StyledButton>
  );
};
