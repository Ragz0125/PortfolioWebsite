"use client"
import { FIRST_COLOR, SECOND_COLOR, THIRD_COLOR } from "@/app/utils/page";
import styled from "styled-components";

const Button = ({ title, isSecondary = false, onClick }: any) => {
  return (
    <Container isSecondary={isSecondary} onClick={onClick}>
      <Text isSecondary={isSecondary}>{title?.toUpperCase()}</Text>
    </Container>
  );
};

export default Button;

const Container = styled.div<{ isSecondary: any }>`
  min-width: 150px;
  max-width: 200px;
  height: 45px;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: transform 1s;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props?.isSecondary
      ? `background: #fff;`
      : `   background: linear-gradient(to right, ${THIRD_COLOR}, #000, ${FIRST_COLOR});
`}
`;

const Text = styled.div<{ isSecondary: any }>`
  font-weight: bold;
  font-size: 14px;
  ${(props) =>
    props?.isSecondary
      ? `color: transparent;`
      : ` color: #fff;
`}
  background: linear-gradient(90deg, ${THIRD_COLOR}, #000, ${FIRST_COLOR});
  background-clip: text;
`;
