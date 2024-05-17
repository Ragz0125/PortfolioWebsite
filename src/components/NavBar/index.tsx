import { primaryFontColor } from "@/global";
import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { NavBarOptions } from "@/constants";

interface NavBarProps {
  page: string;
}

const NavBar = ({ page }: NavBarProps) => {
  const router = useRouter();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/raghav-resume.pdf';
    link.download = 'raghav-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <NavBarContainer>
      <Container>
        <div>
          <Image
            unoptimized={true}
            src="/logo.svg"
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
        <Options>
          {NavBarOptions.map((item, index) => (
            <Font
              currentPage={page === item.title}
              onClick={() => router.push(item.url)}
            >
              {item.title}
            </Font>
          ))}
          
        </Options>
        <div>
          <Button title={"RESUME"} onClick={()=> handleDownload()} icon={'/download.svg'}/>
        </div>
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  padding: 0 20px 0 20px;
  height: 80px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(255, 255, 255, 0.05) 0px 5px 10px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Options = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Font = styled.span<{ currentPage: boolean }>`
  color: ${(props) => (props?.currentPage ? "transparent" : primaryFontColor)};
  cursor: pointer;
  font-weight:700;
  cursor:pointer;
  ${(props) =>
    (props?.currentPage &&
    `background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; /* For Safari */`)}
`;
