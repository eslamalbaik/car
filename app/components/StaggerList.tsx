"use client";
import { motion } from "framer-motion";
import React from "react";
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const StaggerList = ({ list, text }: { list: string[]; text: string }) => {
  return (
    <div className="flex text-right flex-col gap-2">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="  text-lg font-bold"
      >
        {" "}
        {text}
      </motion.h2>
      <motion.ul variants={containerVariants} initial="initial" whileInView="animate" className="  flex-col gap-2 flex">
        {list.map((l, i) => (
          <motion.li variants={childVariants} key={i} className=" py-2 border-input border-b">
            {l}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default StaggerList;
