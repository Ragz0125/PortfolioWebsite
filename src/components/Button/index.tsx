import { primaryFontColor } from "@/global";
import Image from "next/image";
import styled from "styled-components";

const Button = (props:any) => {
  return (
    <ButtonContainer onClick={()=>props?.onClick()}>
      <Container>
     {props?.icon && <Image src={props?.icon} alt="Icon" width={25} height={25}/>}
        <Font>{props?.title}</Font>
      </Container>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  height: 50px;
  width: 200px;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  border-radius: 12px;
  cursor:pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap:15px;
  align-items: center;
  justify-content: center;
`;

const Font = styled.div`
  color: ${primaryFontColor};
`;
