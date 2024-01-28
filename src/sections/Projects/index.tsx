import Container from "@/components/Container";
const Project = [
  {
    name: "New Travolic",
    description:
      "new website for travolic company  well-known website flights ,ticket price ,trains and transfers",
    tools: "Type-Script , React , Nextjs.14 , Tailwind.css , Rest-API ",
    date: "Sep-2023 To Jan-2024",
  },
  {
    name: "Flight90",
    description:
      " it is website that help you to check and compare between more than website ticket flight",
    tools:
      "Type-Script , React , Nextjs.13 , Material-UI , Redux-Toolkit , scss , API ",
    date: "Jun-2023 To Sep-2023",
  },
  {
    name: "Ministry of Hajj",
    description:
      "A website affiliated with the Saudi Ministry of Hajj that enables you to book and inquire about all services and instructions",
    tools:
      "Java-Script , React ,  Next.js , Rest-API , Material-UI , CSS-Modules",
    date: "Jan-2022 to Jun-2023",
  },
  {
    name: "Travolic",
    description:
      " well-known website flights ticket price ,trains and transfers the section that I had deployed it in Travolic company .",
    tools:
      "Type-Script وReact , Redux , React-Hooks, Next.js , Rest-API , Material-UI ,CSS-Modules",
    date: "Jan-2022 to Jun-2023",
  },
  {
    name: "Flow-service",
    description:
      " drag drop package that enable users to create chatbot says and replays in a large graph of shapes",
    tools: "microbundle, React,rappid.js ,TypeScript",
    date: "May-2021 To Dec-2021",
  },
  {
    name: "V-assistance",
    description:
      " chatbot project that can help large companies to serve millions of users and achieve their needs without customer service employer",
    tools:
      " React , Redux , React-Hooks , Rest-API , GRPC , Docker , Boots-trap ,React-Strap",
    date: "Jan-2021 To May-2021",
  },

  {
    name: "Information Technology Institute (ITI) project",
    description: "Road map website for most important careers and community",
    tools:
      " Java-Script , Boot-strap , Html5 , CSS3 , React, redux , Node.js , Mongo-DB ",
    date: "Aug-2020 To Dec-2020",
  },
  {
    name: "Freelance project ",
    description: "Hotel website with many sections and ability to book online",
    tools: "Java-Script , Boot-Strap , HTML , CSS",
    date: "Apr-2020 To Aug-2020",
  },
  {
    name: "Graduation project",
    description:
      " Social Media for University combine between educational contents and the social websites",
    tools: "Java-Script , Boot-Strap , HTML , CSS",
    date: "Fep-2016 To May-2016",
  },
];
const Projects = () => {
  return (
    <div className="bg-[#22252C] w-full p-10 pb-20">
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[#1DCBB2] font-bold text-3xl my-20">PROJECTS</h1>
        </div>
        <div className="grid  grid-cols-3 gap-8 w-full">
          {Project.map((project: any) => (
            <div
              className="bg-[#303741] h-70 p-10 shadow-sm shadow-[#1DCBB2] rounded-sm"
              key={project.name}
            >
              <h1 className="text-[#1DCBB2] font-bold text-xl mb-3">
                {project.name}
              </h1>
              <span className="text-[#D9DCE3] font-thin text-sm">
                {project.date}
              </span>
              <h6 className="mt-10 text-[#1DCBB2]">Description:</h6>
              <p className="text-[#D9DCE3] ">{project.description}</p>
              <h6 className="mt-10 text-[#1DCBB2]">Tools:</h6>

              <p className="text-[#D9DCE3]">{project.tools}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
