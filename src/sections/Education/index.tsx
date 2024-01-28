import Container from "@/components/Container";
import { Graduation } from "@/components/Icons/Graduation";
import Image from "next/image";

const Education = () => {
  return (
    <div className="bg-[#303741] w-full p-10 pb-20">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-3xl my-20">EDUCATION</h1>
        </div>
        <div className="grid  grid-cols-3 gap-4 w-full">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-[#1DCBB2] font-bold text-2xl mb-10">
                {" "}
                BACHELOR DIGREE
              </h1>
              <p className="text-[#D9DCE3] mb-10">
                Sept.2012 To May 2016 :Bachelor of Faculty of science Department
                of Computer Science , Suez Canal University. Cumulative Grade:
                Good.
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="w-50 flex flex-col">
              <div className="rounded-full p-2 border-2  border-[#1DCBB2] w-50 h-50  flex justify-center items-center">
                <Graduation />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="border-2 border-[#1DCBB2] h-10 w-10  rounded-full flex justify-center items-center mx-auto ">
                <div className="bg-[#1DCBB2] w-5 h-5 rounded-full " />
              </div>
              <div className="border-4 border-[#1DCBB2] h-32 w-0 mx-auto" />
              <div className="bg-[#1DCBB2] w-7 h-7 rounded-full mx-auto" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-[#1DCBB2] font-bold text-2xl mb-10">
                {" "}
                PROFESSIONAL DIPLOMA
              </h1>
              <p className="text-[#D9DCE3] mb-10">
                Aug.2020 To Dec.2020 :Professional Diploma, Information
                Technology Institute (ITI), Ismailia Branch, Suez Canal
                University, Ismailia, Egypt. Frontend Developer && Mobile
                Platform
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
