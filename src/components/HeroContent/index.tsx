import { SocialMediaData } from "@/constants";
import { primaryFontColor } from "@/global";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const HeroContent = () => {
  const router = useRouter();
  return (
    <>
      <Container>
        <Wrapper>
          <Contain>
            <LeftSide>
              <Font>Hey!</Font>
              <Font>
                I'm <FontColor>Raghav Rajaraman</FontColor>
              </Font>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Line />
                <SmallFont>UI/UX Developer</SmallFont>
              </div>
            </LeftSide>
            <RightSide>
              <Image
                unoptimized={true}
                src={"/hero-content-image.svg"}
                alt="Hero"
                width={550}
                height={550}
              />
            </RightSide>
          </Contain>
          <SocialMedia>
            {SocialMediaData.map((item) => (
              <ImageConatiner whileHover={{y:-10}} onClick={() => router.push(item.url)}>
                <Image
                  src={item.src}
                  alt="Social-Media-Icon"
                  width={20}
                  height={20}
                />
              </ImageConatiner>
            ))}
          </SocialMedia>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeroContent;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  text-align: left;
  word-spacing: 10px;
`;

const RightSide = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Font = styled.span`
  color: ${primaryFontColor};
  font-size: 40px;
  font-weight: 800;
`;

const SmallFont = styled.span`
  color: ${primaryFontColor};
  font-size: 20px;
  font-weight: 800;
`;

const FontColor = styled.span`
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; /* For Safari */
  color: transparent;
`;

const Line = styled.div`
  height: 5px;
  width: 48%;
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  border-radius: 20px;
`;

const Contain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  padding-left: 5%;
  padding-bottom: 10px;
  display:flex;
  gap:15px;
`;

const ImageConatiner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${primaryFontColor};
  cursor: pointer;
`;
