import React from "react";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";
import GridContainer from "./GridContainer";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className=" bg-gray-600">
      <MaxWidthWrapper>
        <GridContainer className=" py-20 text-gray-50 font-semibold" cols={3}>
          <div className="flex gap-3 items-center flex-col">
            <h2 className=" lg:text-2xl text-xl text-cyan-500 font-bold">HEAD QUARTER</h2>
            <p>An Nakhil District, Jeddah 23242, Saudi Arabia</p>
            <div className=" mt-5">
              <Logo className=" w-32 h-32" />
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <h2 className=" lg:text-2xl text-xl text-cyan-500 font-bold">SITE MAP</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className=" flex flex-col items-center">
            <h2 className=" lg:text-2xl text-xl text-cyan-500 font-bold">CONTACT</h2>
            <ul className="flex flex-col gap-2 mt-2 items-center lg:items-start">
              <li>Phone: 123-456-7890</li>
              <li>Email: 2rYyX@example.com</li>
            </ul>
          </div>
        </GridContainer>
        <div className=" flex text-gray-50 text-sm lg:text-base lg:flex-row flex-col items-center gap-3 justify-between">
          <ul className="flex  items-center gap-4">
            <li>FAQ</li>
            <li>Privacy policy</li>
            <li>Location</li>
          </ul>
          <div className="flex flex-col gap-3">
            <p>+966-549-126-544</p>
            <p>© 2023 Nakhil. All rights reserved.</p>{" "}
          </div>
        </div>
      </MaxWidthWrapper>
      <div className=" py-10 flex justify-center text-lg bg-gray-50 text-gray-900">
        <p>© 2023 Nakhil. All rights reserved.</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
