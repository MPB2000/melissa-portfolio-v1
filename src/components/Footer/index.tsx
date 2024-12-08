import { Flex } from "antd";

export const Footer = () => {
  return (
    <Flex>
      <div>
        <a
          href="https://github.com/MPB2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/melissaboudville/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/demonicmeloric/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Melissa Paige Boudville. All rights
        reserved.
      </p>
    </Flex>
  );
};
