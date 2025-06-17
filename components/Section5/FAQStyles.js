import styled from "styled-components";

export const FAQContainer = styled.section`
  border-radius: 28px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  padding: 66px 80px;
  align-items: start;
  gap: 90px;
  overflow: hidden;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 66px 20px;
    gap: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  gap: 90px;
  justify-content: start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    gap: 40px;
    flex-direction: column;
  }
`;

export const HeaderSection = styled.header`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  align-items: stretch;
  font-size: 16px;
  color: rgba(1, 2, 5, 1);
  justify-content: center;
  width: 531px;

  @media (max-width: 991px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-size: 48px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -1.44px;
  margin: 0;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

export const Description = styled.p`
  color: rgba(135, 140, 145, 1);
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 29px;
  margin: 48px 0 0 0;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export const ButtonGroup = styled.div`
  align-self: start;
  display: flex;
  margin-top: 48px;
  align-items: center;
  gap: 48px;
  justify-content: start;

  @media (max-width: 991px) {
    margin-top: 40px;
    gap: 24px;
    flex-wrap: wrap;
  }
`;

export const MoreQuestionsButton = styled.button`
  border-radius: 50px;
  border: 1px solid rgba(1, 2, 5, 1);
  background: transparent;
  display: flex;
  padding: 17px 16px;
  align-items: center;
  gap: 32px;
  font-family:
    Manrope,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 700;
  letter-spacing: -0.32px;
  line-height: 1.4;
  justify-content: center;
  width: 176px;
  color: rgba(1, 2, 5, 1);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(1, 2, 5, 0.05);
  }

  &:focus {
    outline: 2px solid rgba(1, 2, 5, 0.5);
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ContactLink = styled.button`
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 600;
  line-height: 1.8;
  text-decoration: underline;
  background: transparent;
  border: none;
  color: rgba(1, 2, 5, 1);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: rgba(1, 2, 5, 0.8);
  }

  &:focus {
    outline: 2px solid rgba(1, 2, 5, 0.5);
    outline-offset: 2px;
  }
`;

export const FAQList = styled.div`
  min-width: 240px;
  font-family:
    Plus Jakarta Sans,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;

  @media (max-width: 991px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const FAQItemContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-top: 1px solid rgba(0, 0, 0, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  width: 100%;

  &:not(:first-child) {
    border-top: none;
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const QuestionButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  width: 100%;
  padding: 26px 24px;
  align-items: center;
  gap: 100px;
  font-size: 24px;
  color: rgba(1, 2, 5, 1);
  font-weight: 600;
  letter-spacing: -0.72px;
  line-height: 36px;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(1, 2, 5, 0.02);
  }

  &:focus {
    outline: 2px solid rgba(1, 2, 5, 0.5);
    outline-offset: -2px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 26px 20px;
    gap: 40px;
  }
`;

export const QuestionText = styled.span`
  align-self: stretch;
  margin: auto 0;
  width: 448px;

  @media (max-width: 991px) {
    max-width: 100%;
    width: auto;
    flex: 1;
  }
`;

export const ToggleIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  height: 24px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  ${(props) =>
    props.isExpanded &&
    `
    transform: rotate(180deg);
  `}
`;

export const AnswerSection = styled.div`
  color: rgba(135, 140, 145, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 29px;
  padding: 0 24px 48px 24px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 40px 20px;
  }
`;
