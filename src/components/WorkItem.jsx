import React from "react";

const WorkItem = ({ item }) => {
  return (
    <ol className="relative flex flex-col border-l md:flex-row border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {item.year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">
            {item.title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {item.timeline}
          </span>
        </p>
        <p className="my-2 text-base font-normal-none text-stone-500">
          {item.details}
        </p>
        <p className="my-2 text-base font-bold text-black font-normal-none">
          Expertise: {item.expertise}
        </p>
        <p className="my-2 text-base font-bold text-gray-600 font-normal-none">
          Tools: {item.tools}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
