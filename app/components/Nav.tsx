"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import NavLink from "./NavLink";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import { usePathname, useRouter } from "next/navigation";
import PhoneNav from "./PhoneNav";
import MotionItem from "../defaults/MotionItem";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { Phone } from "lucide-react";

const NavBar = () => {
  const links = [
    { link: "/aboutus", text: "من نحن" },
    { link: "/", text: "الرئيسية" },
  ];

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [active, setIsActive] = useState(false);
  const router = useRouter();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTopPage, setIsTopPage] = useState(true);
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsTopPage(true);
      } else setIsTopPage(false);
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isTopPage]);
  const isHome = pathName === "/en" || pathName === "/ar";
  return (
    <header dir="rtl" className=" w-full">
      <nav
        className={`${
          isHome
            ? "text-gray-900 font-semibold placeholder:text-gray-800 "
            : `    font-semibold placeholder:text-gray-50"  ${isScrollingDown && "bg-white"}`
        } fixed inset-0 z-50 max-h-[5rem] lg:max-h-[8.5rem]  bg-white flex flex-col gap-2   transition-all duration-300 ${
          isScrollingDown
            ? "translate-y-[-110%]"
            : !isTopPage && !isScrollingDown
            ? `  -translate-y-2 lg:-translate-y-5 ${!isHome && "bg-white"}`
            : "translate-y-0"
        }`}
      >
        <div
          className="flex   flex-col gap-2
        "
        >
          <div className=" w-full bg-gray-100 py-3 ">
            <MaxWidthWrapper noPadding className="flex justify-between ">
              <div className="  flex items-center gap-2 ">
                <div className={`z-[999] duration-150 h-full  relative lg:hidden block`}>
                  <PhoneNav isHome={isHome} navigation={links} />
                </div>
                <div className="lg:hidden block">
                  <Logo size="sm" isdark={isHome ? false : true} />
                </div>
              </div>
              <div className=" hidden lg:flex z-30 relative items-center  gap-4 xl:gap-8 ">
                {links.map((link) => (
                  //@ts-ignore
                  <NavLink isHome={isHome} key={link.text} href={link.href} text={link.text} subLinks={link.subLinks} />
                ))}
              </div>
            </MaxWidthWrapper>
          </div>

          <MaxWidthWrapper noPadding className="">
            <div
              className={cn(
                "flex relative z-20 items-center    ",
                !isTopPage && !isScrollingDown ? "justify-center lg:justify-between" : "justify-between"
              )}
            >
              <div
                className={`${
                  !isTopPage && "lg:opacity-100  hidden lg:flex  opacity-0"
                }  duration-150  lg:flex hidden items-center`}
              >
                <Logo isdark={isHome ? false : true} />
              </div>
              <div className=" hidden lg:flex z-30 relative items-center  gap-4 xl:gap-8 ">
                {links2.map((link) => (
                  //@ts-ignore
                  <NavLink isHome={isHome} key={link.text} href={link.href} text={link.text} subLinks={link.subLinks} />
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
