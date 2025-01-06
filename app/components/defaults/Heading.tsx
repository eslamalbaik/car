import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <h2 className="  text-gray-600  w-fit my-3 relative font-bold text-3xl lg:text-5xl ">
      {" "}
      <span className=" absolute -bottom-4 right-0 w-full h-[1.4px] bg-orange-500"></span>
      {text}
    </h2>
  );
};

export default Heading;
