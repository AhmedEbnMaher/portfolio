import Image from "next/image";
import Container from "@/components/Container";
import Cover from "@/sections/Cover";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Skils from "@/sections/Skils";
import Projects from "@/sections/Projects";
import Personals from "@/sections/Personals";
import Contacts from "@/sections/Contacts";
export default function Home() {
  return (
    <div>
      <Cover />
      <About />
      <Education />
      <Experience />
      <Skils />
      <Projects />
      <Personals />
      <Contacts />
    </div>
  );
}
