import React from "react";
import ProjectItem from "./ProjectItem.jsx";
import image1 from "./../assets/WeBucket.png";
import image2 from "./../assets/WeBucket copy.png";
import image3 from "./../assets/ai.png";
import image4 from "./../assets/covidimage.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-x-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="py-8 text-center">
        Hello! Welcome to some of my projects :) Be sure to check out WeBucket
        first! I am leading a small team of student engineers in creating an app
        for groups to create bucket lists together. Watch out for a deployment
        soon at we-bucket.com!!
      </p>
      <div className="grid gap-12 sm:grid-cols-2">
        <ProjectItem
          img={image2}
          title="WeBucket codebase"
          info="Fullstack Developer"
          dest="https://bitbucket.org/we-bucket/workspace/repositories/"
        />
        <ProjectItem
          img={image3}
          title="AI Ethics Club"
          info="Research Team Lead"
          dest="https://cssh.northeastern.edu/informationethics/ai-and-data-ethics-working-group/"
        />
        <ProjectItem
          img={image1}
          title="WeBucket"
          info="Project Lead"
          dest="https://we-bucket.com"
        />
        <ProjectItem
          img={image4}
          title="Covid-19 Tracker"
          info="Personal React JS Project"
          dest="https://github.com/aelkobaitry/covid-tracker"
        />
      </div>
    </div>
  );
};

export default Projects;
