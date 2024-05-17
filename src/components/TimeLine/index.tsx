import { TimeLineData } from "@/constants";
import { primaryFontColor } from "@/global";
import styled from "styled-components";

const TimeLine = () => {
  return (
    <TimelineContainer>
      {TimeLineData.map((item, index) => (
        <TimelineItem className={(index + 1) % 2 !== 0 ? "left" : "right"}>
          <Content className={(index + 1) % 2 !== 0 ? "left" : "right"}>
            <Text>
              <Row1>
                <h3>{item.title}</h3>
                <h5>{item.year}</h5>
              </Row1>
              <ItaicFont>{item.role}</ItaicFont>
            </Text>
          </Content>
          <Circle className={(index + 1) % 2 !== 0 ? "left" : "right"} />
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default TimeLine;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 40px 0;
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;

  width: 50%;
  &.left {
    left: 0;
  }
  &.right {
    left: 0%;
  }
`;

const Content = styled.div`
  height: 90px;
  width: 276px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: linear-gradient(
    to right,
    rgb(177, 108, 234, 0.2),
    rgb(255, 138, 86, 0.2)
  ); /* Semi-transparent gradient */
  backdrop-filter: blur(10px);
  display: flex;
  padding: 15px;
  align-items: center;
  //   background-color: white;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &.left {
    transform: translateX(-120%);
  }
  &.right {
    transform: translateX(120%);

    flex-direction: row-reverse;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  color: ${primaryFontColor};
`;

const Image = styled.img`
  max-width: 40%;
  border-radius: 6px;
  margin-left: 20px;
  &.right {
    margin-left: 0;
    margin-right: 20px;
  }
`;

const Circle = styled.div`
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: white;
  border: 4px solid #333;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  &.left {
    right: -12.5px;
  }
  &.right {
    left: 166px;
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItaicFont = styled.p`
  font-size: 14px;
  font-style: italic;
`;
