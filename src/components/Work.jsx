import React from "react";
import WorkItem from "./WorkItem.jsx";

const data = [
  {
    year: 2024,
    title: "Backend/Fullstack Software Engineer, MORSE Corp",
    timeline: "Jan 2024 - Aug 2024",
    details: "8 month co-op at a DoD Contractor where I worked primarily on backend software, with some small projects that included developing a frontend as well.",
    tools: "Pandas, SQLModel, FastApi, Vite, Redux (RTK), Bootstrap",
    expertise: "Python, SQL, React TS, Docker, CSS",
  },
  {
    year: 2023,
    title: "Software Engineer Co-op, Gigasheet",
    timeline: "Jan 2023 - Jun 2023",
    details: "6 month co-op where I worked with the software team on full-stack development with large creative leeway.",
    tools: "Postgres, Clickhouse, AWS, Redux (RTK), Bootstrap, Tailwind",
    expertise: "GOLang, SQL, React JS, Docker",
  },
  {
    year: 2022,
    title: "Freelance Machine Learning Engineer, Surge AI",
    timeline: "Apr, 2022 - Aug 2022",
    details: "Trained an Artificial Intelligence model using data in various forms such as images, stories, and data sets. Visualized data sets using Python in the forms of graphs and tables.",
    tools: "Pandas, Jupiter, MathPlotLib",
    expertise: "Python",
  },
  {
    year: 2020,
    title: "Astronomy Software Intern, Caltech",
    timeline: "Jun 2020 - Sep 2020",
    details: "Learned an old astronomy oriented programming language called IDL and translated programs into Python. Optimized old IDL programs through newer Python softwares and tracked bug patches.",
    tools: "Pandas, Jupiter",
    expertise: "Python, IDL",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Experience</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default Work;
