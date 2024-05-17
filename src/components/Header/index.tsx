import { primaryFontColor } from "@/global";
import styled from "styled-components";

interface HeaderProps{
    title: String
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <Strip />
      <Font>{title}</Font>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const Font = styled.div`
  font-size: 30px;
  color: ${primaryFontColor};
  font-weight:700;
`;

const Strip = styled.div`
  height: 70px;
  width: 5px;
  border-radius: 20px;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
`;
