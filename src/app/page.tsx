"use client";
import { TypeAnimation } from "react-type-animation";
import { Home } from "./Home";
import { Header } from "@/components/Header";
import { About } from "./About";
import { Experiences } from "./Experiences";
import { Footer } from "@/components/Footer";
import { Flex } from "antd";

export default function Main() {
  return (
    <Flex vertical={true}>
      <Header />
      <Home />
      <About />
      <Experiences />
      <Footer />
    </Flex>
  );
}
