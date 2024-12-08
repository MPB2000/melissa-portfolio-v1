"use client";
import { TypeAnimation } from "react-type-animation";
import { Home } from "./Home";
import { Header } from "@/components/Header";
import { About } from "./About";
import { Experiences } from "./Experiences";
import { Footer } from "@/components/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experiences />
      <Footer />
    </div>
  );
}
