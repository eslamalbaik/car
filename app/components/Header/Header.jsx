"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Image from "next/image";
function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full lg:px-12 py-4  lg:justify-between  flex-row  items-center mx-auto   md:items-center md:flex ">
          <div className="flex justify-around  items-center md:flex ">

           {/* LOGO */}
           <Link href="/">
            <div className="flex lg:justify-start  md:justify-center items-center">
            <Image
                src="/LOGO.JPEG"
                className="w-24 h-[80px]"
                width={100}
                height={100}
                alt="logo"
              />
              <div  className="hidden lg:block mt-2">
                <h1 className=" text-sm font-semibold text-[#000383]">
                  شركة المصنع السعودي لقطع غيار السيارات
                </h1>
                <h1 className="text-sm font-semibold text-[#000383] ml-6">
                  Saudi Factory for Auto Parts Company
                </h1>
              </div>
             
            </div>
          </Link>
       
       {/* HAMBURGER BUTTON FOR MOBILE */}
       <div className="md:hidden">
         <button
           className="p-1 text-gray-700 rounded-md outline-none focus:border-[--color-alt] focus:border"
           onClick={() => setNavbar(!navbar)}
         >
           {navbar ? (
             <AiOutlineClose
               size={17}
               className="h-6 w-6"
               aria-hidden="true"
             />
           ) : (
             <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
           )}
         </button>
       </div>
     </div>
      <div>
        <div
          className={`flex-1 justify-self-center ml-24 pb-3 mt-8 md:flex  md:items-center md:pb-0 md:mt-0 ${
            navbar ? "p-12 md:p-0 " : "hidden"
          }`}
        >
          <ul className="h-screen md:h-auto  mt-[16px] flex-row items-end justify-start md:flex">
            <li className=" text-lg leading-7 font-medium text-first border-b-2 border-first py-2 md:px-1 text-center   ">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
                الرئيسية
              </Link>
            </li>
            <li className=" text-lg text-gray-500 py-2 px-3 text-center  md:border-b-0  hover:text-first hover:border-b-2 hover:border-first  ">
              <Link href="/#aboutus">من نحن</Link>
            </li>
            <li className=" text-lg text-gray-500 py-2 px-3 text-center  hover:border-b-2 hover:border-first  md:border-b-0 md:hover:text-first ">
              <Link href="/#products">جميع المنتجات</Link>
            </li>
            <li className=" text-lg text-gray-500 py-2 px-3 text-center  hover:border-b-2 hover:border-first  md:border-b-0 md:hover:text-first ">
              <Link href="/#services">خدماتنا</Link>
            </li>
          </ul>
        </div>
      </div>
   
       
   <Link href="/#contactus">
            <button
              className={`lg:block hidden py-2 mr-5 px-6  bg-[#01A101] text-white text-lg rounded-full  ${
                navbar ? "hidden" : "mr-8 "
              }`}
            >
              تواصل معنا
            </button>
          </Link>
    </nav>
  );
}

export default Header;
