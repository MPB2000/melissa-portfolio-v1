import styled from "styled-components";
import { Colors } from "@/theme/Colors";
import { Typography } from "antd";
const { Paragraph } = Typography;
import { TypeAnimation } from "react-type-animation";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background: ${Colors.DARKGREY};
`;

const StyledTypeAnimation = styled(TypeAnimation)`
  font-size: 2em;
  display: inline-block;
  color: #fff;
`;

const StyledParagraph = styled(Paragraph)`
  color: #fff;
  font-size: 1em;
`;

export const About = () => {
  return (
    <StyledFlex>
      <StyledTypeAnimation
        sequence={[
          "full",
          2000, // Wait 2 seconds
          "full tike",
          2000, // Wait 2 seconds
          "full time goofy ahh",
          2000, // Wait 2 seconds
          "bet",
          2000, // Wait 2 seconds
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <StyledParagraph>
        Hello! I'm Melissa Paige Boudville, a passionate software developer with
        a love for problem-solving and creating meaningful solutions. I thrive
        on building impactful applications and constantly learning new
        technologies to improve my craft.
      </StyledParagraph>
    </StyledFlex>
  );
};
