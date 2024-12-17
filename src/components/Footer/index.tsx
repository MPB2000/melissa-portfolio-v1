import { Colors } from "@/theme/Colors";
import { Flex, Typography } from "antd";
import styled from "styled-components";
const { Link, Text } = Typography;

const FooterContainer = styled(Flex)`
  height: 50px;
  align-items: center;
  gap: 20px;
  padding-inline: 20px;
  justify-content: space-evenly;
  background: ${Colors.MAROON};

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 10px;
  }
`;

const LinksContainer = styled(Flex)`
  gap: 40px;

  @media (max-width: 500px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterText = styled(Text)`
  color: #fff;
  text-align: center;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
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
      </LinksContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Melissa Paige Boudville. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};
