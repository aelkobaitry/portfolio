import React from "react";
import coolImage from "./../assets/background.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaBitbucket, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src={coolImage}
        alt="My Image"
        className="object-cover object-left w-full h-screen"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
            I'm Adam Elkobaitry
          </h1>
          <h2 className="flex pt-4 text-2xl text-gray-800 sm:text-3xl">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Team Lead",
                2000,
                "Coder",
                2000,
                "Student",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="http://linkedin.com/in/adam-elkobaitry">
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/aelkobaitry/">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="https://bitbucket.org/we-bucket/workspace/repositories/">
              <FaBitbucket className="cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/adam3lko/?igsh=MWVvZHZ5dWhseTBqMw%3D%3D&utm_source=qr">
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
