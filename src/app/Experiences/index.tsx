import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
import styled from "styled-components";
const { Text, Title } = Typography;

const TextStyled = styled(Text)`
  font-size: 21px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Experiences = () => {
  return (
    <Container>
    <Content>
    <Flex
      style={{
        height: "50vh",
        background: Colors.BLACK,
      }}
    >
      <Typography>
        <Title level={4} style={{ color: "#fff" }}>
          Work Experience
        </Title>
        <TextStyled style={{ whiteSpace: "pre-wrap", color: "#fff" }}>
          {`Software Developer at ON2IT (APR 2023 - Present) 
● Develop features for GEBME admin portal using Spring MVC framework (HTML, Angular JS, Java)
● Performing implementation, testing, and deployment for GEBME POS.
● Practicing Agile/Scrum methodology to plan and deliver work projects. (Jira) 
● Develop features and testing for GEBME POS (React, Node.js, and TypeScript) 

Frontend Developer Intern at ABC Ltd (AUG 2023 - NOV 2023)
● Resolved network outages through root cause analysis and corrective actions (Infrastructure Incident Management)
● Tracked and managed ticket incidents and issues using ServiceNow (Cisco, NetBrain)
● Tested and monitored GNO Dev website to simplify SSH connection process for users (WinSCP, PuTTY)
● Obtained lists of Open Gear Devices from collaborating with overseas networking teams.`}
        </TextStyled>
      </Typography>
    </Flex>
    </Content>
    </Container>
  );
};
