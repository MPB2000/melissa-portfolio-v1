import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
const { Paragraph } = Typography;
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  return (
    <Flex
      vertical={true}
      style={{
        height: "50vh",
        background: Colors.DARKGREY,
      }}
    >
      <TypeAnimation
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
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
      <Paragraph>
        Hello! I'm Melissa Paige Boudville, a passionate software developer with
        a love for problem-solving and creating meaningful solutions. I thrive
        on building impactful applications and constantly learning new
        technologies to improve my craft.
      </Paragraph>
    </Flex>
  );
};
