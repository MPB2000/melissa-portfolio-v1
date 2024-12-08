"use client";
import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
const { Link } = Typography;

export const Header = () => {
  return (
    <Flex
      style={{
        width: "100vw",
        height: 60,
        alignItems: "center",
        gap: 20,
        justifyContent: "flex-end",
        paddingInline: 20,
        background: Colors.MAROON,
      }}
    >
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Experiences</Link>
      <Link>Contact</Link>
      <Link>Resume</Link>
    </Flex>
  );
};
