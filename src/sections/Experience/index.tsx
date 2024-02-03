import Container from "@/components/Container";
import { Work } from "@/components/Icons/Work";

const Experience = () => {
  return (
    <div className="bg-[#22252C] w-full p-2 sm:p-10 pb-20" id="experience">
      <Container>
        <div className="flex justify-between md:justify-center ">
          <h1 className="text-[#1DCBB2] font-bold text-2xl md:text-3xl my-20">
            WORK EXPERIENCE
          </h1>
          <div className="flex justify-center items-center md:hidden">
            <Work />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="flex md:justify-center items-center">
            <div>
              <h1 className="text-[#1DCBB2] font-bold text-lg md:text-2xl mb-10">
                {" "}
                VA-COMPUTING
              </h1>
              <p className="text-[#D9DCE3] mb-10">
                Jan.2021 To Dec.2021 Front-end Developer at VA-Computing Company
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-50 flex flex-col">
              <div className="rounded-full p-2 border-2  border-[#1DCBB2] w-50 h-50  flex justify-center items-center">
                <Work />
              </div>

              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="border-2 border-[#1DCBB2] h-10 w-10  rounded-full flex justify-center items-center mx-auto ">
                <div className="bg-[#1DCBB2] w-5 h-5 rounded-full " />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="bg-[#1DCBB2] w-7 h-7 rounded-full mx-auto" />
            </div>
          </div>
          <div className="flex md:justify-center items-center">
            <div>
              <h1 className="text-[#1DCBB2] font-bold text-lg md:text-2xl mb-10">
                {" "}
                TRAVOLIC
              </h1>
              <p className="text-[#D9DCE3] mb-10">
                Jan.2022 To Jan.2024 Front-end Developer at Travolic Company
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
