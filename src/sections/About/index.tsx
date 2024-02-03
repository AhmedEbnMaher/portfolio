import Container from "@/components/Container";
import { Github } from "@/components/Icons/Github";
import { Gmail } from "@/components/Icons/Gmail";
import { Linkedin } from "@/components/Icons/LinkedIn";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-[#22252C] p-2 sm:p-10" id="about">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40 py-20">
          <div className="flex justify-center items-center sm:px-0 px-10">
            <div className="h-52 border-4 border-[#1DCBB2] w-52 ">
              <Image
                height={500}
                width={500}
                className="h-52 w-52  -ml-10 mt-10"
                alt="profile"
                src={"/profile.jpeg"}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#1DCBB2] font-bold text-2xl md:text-3xl mb-10">
              ABOUT ME
            </h1>
            <p className="text-[#D9DCE3]">
              Frontend Developer with a very good experience in React , Nextjs
              and other Frontend Tools always try to learn new Technologies and
              always try to be better, I have a passion for front-end
              development and I seek for a full of experience and challenges
              career path.
            </p>
            <div className="mt-5 flex flex-col sm:block sm:text-s">
              <span className="text-[#1DCBB2] font-bold">Name:</span>
              <span className="text-[#D9DCE3] sm:px-3">
                Ahmed Maher Ahmed Ali
              </span>
            </div>
            <div className="mt-5 flex flex-col sm:block sm:text-s">
              <span className="text-[#1DCBB2] font-bold">Date Of Birth:</span>
              <span className="text-[#D9DCE3] sm:px-3">1-12-1993</span>
            </div>
            <div className="mt-5 flex flex-col sm:block sm:text-s">
              <span className="text-[#1DCBB2] font-bold">Nationality:</span>
              <span className="text-[#D9DCE3] sm:px-3">Egyptian</span>
            </div>
            <div className="mt-5 flex flex-col sm:block sm:text-s">
              <span className="text-[#1DCBB2] font-bold">Phone:</span>
              <span className="text-[#D9DCE3] sm:px-3">+20-1124-424-195</span>
              <span className="text-[#D9DCE3] sm:px-3">+20-1017-508-153</span>
            </div>
            <div className="mt-5  flex flex-col sm:block sm:text-sm">
              <span className="text-[#1DCBB2] font-bold">Email:</span>
              <span className="text-[#D9DCE3] sm:px-3">
                a.maher.mesalm@gmail.com
              </span>
            </div>
            <div className="mt-5 flex flex-col sm:block sm:text-s">
              <span className="text-[#1DCBB2] font-bold">Military Status:</span>
              <span className="text-[#D9DCE3] sm:px-3">
                Completed (3years - officer)
              </span>
            </div>
          </div>
        </div>
        <div className="py-10 w-full">
          {" "}
          <h1 className="text-[#1DCBB2] font-bold text-2xl md:text-3xl mb-10">
            MORE ABOUT ME
          </h1>
          <div className=" border-t-4 border-[#1DCBB2] py-10">
            <div className="flex justify-around mt-5">
              <Link
                href={"https://www.linkedin.com/in/ahmed-maher-ali-mesalm/"}
              >
                <div className="rounded-full p-2 border-2 border-[#1DCBB2]">
                  <Linkedin />
                </div>
              </Link>
              <Link href={"https://github.com/AhmedEbnMaher"}>
                <div className="rounded-full p-2 border-2 border-[#1DCBB2]">
                  <Github />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
