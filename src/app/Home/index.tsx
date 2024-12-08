import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
import { TypeAnimation } from "react-type-animation";

const { Text } = Typography;

export const Home = () => {
  return (
    <Flex
      style={{
        width: "100%",
        height: "50vh",
        background: Colors.BLACK,
      }}
    >
      <TypeAnimation
        sequence={[
          "i am a software development engineer",
          2000, // Wait 2 seconds
          "i am the devil incarnate",
          2000, // Wait 2 seconds
          "i am ",
          2000, // Wait 2 seconds
          "i am someone special's future wife",
          2000, // Wait 2 seconds
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </Flex>
  );
};
