import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
const { Paragraph } = Typography;

export const Experiences = () => {
  return (
    <Flex
      style={{
        height: "50vh",
        background: Colors.BLACK,
      }}
    >
      <Paragraph>
        Software Developer at XYZ Corp (2021 - Present) Worked on developing
        scalable web applications using modern technologies like React, Node.js,
        and TypeScript. Frontend Developer Intern at ABC Ltd (2020 - 2021)
        Focused on creating responsive user interfaces and optimizing website
        performance.
      </Paragraph>
    </Flex>
  );
};
