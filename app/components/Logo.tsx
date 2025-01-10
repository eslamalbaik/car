import Image from "next/image";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={` ${className||'w-48 h-48'} bg-gray-500 relative`}>
      <Image src="/LOGO.JPEG" className=" object-cover rounded-full" alt="logo" fill />
    </div>
  );
};

export default Logo;
