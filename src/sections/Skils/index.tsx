import Container from "@/components/Container";
import { Tools } from "@/components/Icons/Tools";
import { skillsOne, skillsTwo } from "./data";
const Skils = () => {
  return (
    <div className="bg-[#303741] w-full p-2 sm:p-10 pb-20" id="skills">
      <Container>
        <div className="flex justify-between md:justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-2xl md:text-3xl my-20">
            Technical Skills
          </h1>
          <div className="flex justify-center items-center md:hidden">
            <Tools />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="flex flex-col">
            {skillsOne.map((skill: any, index: number) => (
              <div key={skill.title + index}>
                <h1 className="text-[#D9DCE3] font-bold text-xl md:text-2xl mb-3">
                  {" "}
                  {skill.title}
                </h1>
                <div className="border-4 w-full h-0 border-[#1DCBB2]" />
                <p className="text-[#D9DCE3] mb-5 mt-3">{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-50 flex flex-col">
              <div className="rounded-full p-2 border-2  border-[#1DCBB2] w-50 h-50  flex justify-center items-center">
                <Tools />
              </div>

              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="border-2 border-[#1DCBB2] h-10 w-10  rounded-full flex justify-center items-center mx-auto ">
                <div className="bg-[#1DCBB2] w-5 h-5 rounded-full " />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="border-2 border-[#1DCBB2] h-10 w-10  rounded-full flex justify-center items-center mx-auto ">
                <div className="bg-[#1DCBB2] w-5 h-5 rounded-full " />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="border-2 border-[#1DCBB2] h-10 w-10  rounded-full flex justify-center items-center mx-auto ">
                <div className="bg-[#1DCBB2] w-5 h-5 rounded-full " />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="border-2 border-[#1DCBB2] h-10 w-10  rounded-full flex justify-center items-center mx-auto ">
                <div className="bg-[#1DCBB2] w-5 h-5 rounded-full " />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="bg-[#1DCBB2] w-7 h-7 rounded-full mx-auto" />
            </div>
          </div>
          <div className="flex flex-col">
            {skillsTwo.map((skill: any, index: number) => (
              <div key={skill.title + index}>
                <h1 className="text-[#D9DCE3] font-bold text-xl md:text-2xl mb-3">
                  {" "}
                  {skill.title}
                </h1>
                <div className="border-4 w-full h-0 border-[#1DCBB2]" />
                <p className="text-[#D9DCE3] mb-5 mt-3">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="py-10 w-full mt-20">
          {" "}
          <h1 className="text-[#1DCBB2] font-bold text-xl md:text-2xl mb-10">
            CONCEPTUAL KNOWLEdDGE
          </h1>
          <div className=" border-t-4 border-[#1DCBB2] py-10">
            <div className="block md:flex justify-around mt-5">
              <div>
                <p className="text-[#D9DCE3] text-sm md:font-bold mt-2">
                  {" "}
                  Deep understanding of Object Oriented Programing Concepts
                </p>
              </div>
              <div>
                <p className="text-[#D9DCE3] text-sm md:font-bold mt-2">
                  {" "}
                  Good knowledge of Data Structure, Algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skils;
