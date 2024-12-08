import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
const { Link, Text } = Typography;

export const Footer = () => {
  return (
    <Flex
      style={{
        height: 50,
        alignItems: "center",
        gap: 20,
        paddingInline: 20,
        justifyContent: "space-evenly",
        background: Colors.MAROON,
      }}
    >
      <Flex style={{ gap: 40 }}>
        <Link
          href="https://github.com/MPB2000"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/melissaboudville/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          LinkedIn
        </Link>
        <Link
          href="https://instagram.com/demonicmeloric/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          Instagram
        </Link>
      </Flex>
      <Text style={{ color: "#fff" }}>
        &copy; {new Date().getFullYear()} Melissa Paige Boudville. All rights
        reserved.
      </Text>
    </Flex>
  );
};
