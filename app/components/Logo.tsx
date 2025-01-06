import Image from "next/image";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={` ${className||'w-14 h-14'} bg-gray-500 relative`}>
      <Image src="/Logo (8).png" className=" object-cover rounded-full" alt="logo" fill />
    </div>
  );
};

export default Logo;
