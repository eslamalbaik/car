"use client";
import React, { JSX, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const container = {
  hidden: { opacity: 1, scale: 0 },
  exit: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [openNavigation, setOpenNavigation] = useState(false);

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "  bg-white   justify-between flex px-12  mx-auto py-3  items-center shadow-sm space-x-4",
          className
        )}
      >
        <div className="flex items-center gap-2 ">

          <button className=" lg:block hidden py-2 mr-5 px-6  bg-[#01A101] text-white text-xl rounded-full ">تواصل معنا</button>
        </div>

        <div className="flex items-center gap-8">

          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative lg:flex text-xl  dark:text-neutral-50 items-center    space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-xl !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
         <div className="flex justify-start items-center">
        <div>
        <h1 className="text-sm font-semibold text-[#000383]">
         شركة المصنع السعودي لقطع غيار السيارات 
         </h1>
         <h1 className="text-sm font-semibold text-[#000383] ml-6">
         Saudi Factory for Auto Parts Company
         </h1>
        </div>
         <Image src="/LOGO.JPEG" className="w-24 h-[80px]" width={100} height={100} alt="logo"  />  
         </div>

        {/* remove this login btn */}
        {/* <button className="border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </>
  );
};
