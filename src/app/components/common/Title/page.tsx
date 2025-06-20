"use client"
import { FIRST_COLOR, SECOND_COLOR, THIRD_COLOR } from "@/app/utils/common";
import styled from "styled-components";

const Title = ({ title, isSecondary = false }: any) => {
  return (
    <Container>
      <Text isSecondary={isSecondary}>{title?.toUpperCase()}</Text>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const Text = styled.div<{ isSecondary: any }>`
  background: linear-gradient(90deg, ${THIRD_COLOR}, #000, ${FIRST_COLOR});
  color: ${(props) => (props?.isSecondary ? "white" : "transparent")};
  background-clip: text;
  font-size: 36px;
`;
