import Container from "@/components/Container";

const Personals = () => {
  return (
    <div className="bg-[#303741] w-full p-10 pb-40" id="personal">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-2x sm:text-3xl my-20">
            PERSONAL SKILLS
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full ">
          <div className="rotate-180 mt-20 lg:mt-0 transition duration-500 flex justify-center items-center bg-[#22252C] p-10 rounded-sm sm:rotate-45 sm:hover:rotate-90 sm:h-96 sm:w-96 mx-auto ">
            <div className="rotate-180 transition duration-500 sm:-rotate-45 text-center sm:hover:-rotate-90">
              <h1 className="text-[#1DCBB2] font-bold tex-sm sm:text-2xl mb-10 ">
                {" "}
                HOBBIES
              </h1>
              <p className="text-[#D9DCE3] mb-10 tex-sm sm:md">
                 Football : Suez Canal University football Team – 2013 to 2015.
                <br /> Volleyball: Suez Canal University Volleyball Team – 2013
                to 2015
                <br />  Fishing
              </p>
            </div>
          </div>
          <div className="hidden xl:flex justify-center ">
            <div className=" border-4 border-[#1DCBB2] h-full w-0 mx-auto rotate-45" />
            <div className="border-4 border-[#1DCBB2] h-full w-0 mx-auto -rotate-45" />
          </div>
          <div className="rotate-180 mt-20 lg:mt-0 transition duration-500 flex justify-center items-center bg-[#22252C] p-10 rounded-sm sm:-rotate-45 sm:hover:-rotate-90 sm:h-96 sm:w-96 mx-auto">
            <div className="rotate-180 transition duration-500 sm:rotate-45 text-center sm:hover:rotate-90">
              <h1 className="text-[#1DCBB2] font-bold text-sm sm:text-2xl mb-10">
                {" "}
                Soft Skills
              </h1>
              <p className="text-[#D9DCE3] mb-10 text-sm sm:text-md">
                 Interactive and fast enough to learn new technologies and
                Languages.
                <br />  Team player, self-learner and can work efficiently.
                <br />  Works effectively with people at all levels in the
                organization in order to achieve the required results
              </p>
            </div>
          </div>
        </div>
        <div className="rotate-180 mt-20 lg:mt-0  transition duration-500 flex justify-center items-center bg-[#22252C] p-10 rounded-sm sm:rotate-45 sm:hover:rotate-90 sm:h-96 sm:w-96 mx-auto">
          <div className="rotate-180 overflow-hidden transition duration-500 sm:-rotate-45 text-center sm:hover:-rotate-90">
            <h1 className="text-[#1DCBB2] font-bold text-sm sm:text-2xl mb-10">
              {" "}
              LANGUAGE SKILLS
            </h1>
            <p className="text-[#D9DCE3] mb-10 text-sm sm:text-md">
              Arabic: Native Language <br /> English: Very Good
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Personals;
