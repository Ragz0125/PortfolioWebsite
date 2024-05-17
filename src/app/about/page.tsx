"use client";
import AnimateNavigation from "@/components/AnimateNavigation";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { description, personalData } from "@/constants";
import { backgroundColor, primaryFontColor } from "@/global";
import Image from "next/image";
import styled from "styled-components";

import { useEffect } from "react";

const AboutPage = () => {
  return (
    <AnimateNavigation>
      <EffectWrapper1>
        <Image
          unoptimized={true}
          src={"/effects.svg"}
          width={325}
          height={325}
          alt={"Effect"}
        />
      </EffectWrapper1>

      <Layout>
        <NavBar page="About"/>
        <ContentContainer>
          <Header title={"ABOUT ME"} />
          <BodyContent>
            <ImageContainer>
              <WrapImage>
                <Image
                  unoptimized={true}
                  src="/profilePic.svg"
                  alt="Profile-Pic"
                  height={250}
                  width={250}
                />
              </WrapImage>
            </ImageContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90%",
              }}
            >
              <RegularFont>{description}</RegularFont>

              <DataWrapper>
                {personalData.map((item) => (
                  <Row>
                    <div style={{ width: "100px" }}>
                      <RegularFont>{Object.keys(item)[0]}</RegularFont>
                    </div>
                    <ColorFont>{Object.values(item)[0]}</ColorFont>
                  </Row>
                ))}
              </DataWrapper>
            </div>
          </BodyContent>
        </ContentContainer>
      </Layout>
    </AnimateNavigation>
  );
};

export default AboutPage;

const Layout = styled.main`
  height: 100%;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding: 30px 50px 0px 50px;
  height: 100%;
`;

const BodyContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 85%;
`;

const RegularFont = styled.span`
  color: ${primaryFontColor};
  font-weight: 600;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

const WrapImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 260px;
  border: 8px solid white;
  border-radius: 50%;
`;

const ColorFont = styled.span`
  background: linear-gradient(to right, #b16cea, #ff5e69, #ff8a56);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; /* For Safari */
  color: transparent;
  font-weight: 700;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 15px 15px 0px;
`;

const DataWrapper = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 20px;
`;

const EffectWrapper1 = styled.div`
  position: absolute;
  left: -175px;
  top: 120px;
`;
