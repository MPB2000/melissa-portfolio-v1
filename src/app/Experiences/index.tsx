import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
import styled from "styled-components";
const { Text, Title } = Typography;

const TitleStyled = styled(Title)`
  font-size: 2em;
  color: #fff;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const TextStyled = styled(Text)`
  font-size: 1em;
  color: #fff;
  white-space: pre-wrap;
  @media (min-width: 530px) {
    font-size: 0.875em;
  }
  @media (min-width: 660px) {
    font-size: 1.1em;
  }
  @media (min-width: 758px) {
    font-size: 1.15em;
  }
  @media (min-width: 840px) {
    font-size: 1.2em;
  }
  @media (min-width: 900px) {
    font-size: 1.25em;
  }
  @media (min-width: 1024px) {
    font-size: 1.35em;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50vh;
  background: ${Colors.BLACK};
`;

export const Experiences = () => {
  return (
    <StyledFlex>
      <Typography>
        <TitleStyled>Work Experience</TitleStyled>
        <TextStyled>
          {`Software Developer @ ON2IT (APR 2023 - Present) 
● Develop features for GEBME admin portal using Spring MVC framework (HTML, Angular JS, Java)
● Performing implementation, testing, and deployment for GEBME POS. 
● Practicing Agile/Scrum methodology to plan and deliver work projects.(Jira) 
● Develop features and testing for GEBME POS (React, Node.js, and TypeScript) 

Intern @ Dell Technologies (AUG 2023 - NOV 2023) 
● Resolved network outages through root cause analysis and corrective actions (Infrastructure Incident Management) 
● Tracked and managed ticket incidents and issues using ServiceNow (Cisco, NetBrain) 
● Tested and monitored GNO Dev website to simplify SSH connection
process for users (WinSCP, PuTTY) 
● Obtained lists of Open Gear Devices from collaborating with overseas networking teams.`}
        </TextStyled>
      </Typography>
    </StyledFlex>
  );
};
