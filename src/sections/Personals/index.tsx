import Container from "@/components/Container";
import { Graduation } from "@/components/Icons/Graduation";
import Image from "next/image";

const Personals = () => {
  return (
    <div className="bg-[#303741] w-full p-10 pb-40">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-3xl my-20">
            PERSONAL SKILLS
          </h1>
        </div>
        <div className="grid  grid-cols-3 gap-4 w-full">
          <div className="flex justify-center items-center bg-[#22252C] p-10 rounded-sm rotate-45 h-96 w-96 mx-auto">
            <div className="-rotate-45 text-center">
              <h1 className="text-[#1DCBB2] font-bold text-2xl mb-10 ">
                {" "}
                HOBBIES
              </h1>
              <p className="text-[#D9DCE3] mb-10">
                 Football : Suez Canal University football Team – 2013 to 2015.
                <br /> Volleyball: Suez Canal University Volleyball Team – 2013
                to 2015
                <br />  Fishing
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="border-4 border-[#1DCBB2] h-full w-0 mx-auto rotate-45" />
            <div className="border-4 border-[#1DCBB2] h-full w-0 mx-auto -rotate-45" />
          </div>
          <div className="flex justify-center items-center bg-[#22252C] p-10 rounded-sm -rotate-45 h-96 w-96 mx-auto">
            <div className="rotate-45 text-center">
              <h1 className="text-[#1DCBB2] font-bold text-2xl mb-10">
                {" "}
                Soft Skills
              </h1>
              <p className="text-[#D9DCE3] mb-10">
                 Interactive and fast enough to learn new technologies and
                Languages.
                <br />  Team player, self-learner and can work efficiently.
                <br />  Works effectively with people at all levels in the
                organization in order to achieve the required results
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#22252C] p-10 rounded-sm rotate-45 h-96 w-96 mx-auto">
          <div className="-rotate-45 text-center">
            <h1 className="text-[#1DCBB2] font-bold text-2xl mb-10">
              {" "}
              LANGUAGE SKILLS
            </h1>
            <p className="text-[#D9DCE3] mb-10">
              Arabic: Native Language <br /> English: Very Good
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Personals;
