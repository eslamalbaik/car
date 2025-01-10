import React from "react";
import MaxWidthWrapper from "./defaults/MaxWidthWrapper";
import GridContainer from "./GridContainer";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div  className=" bg-gray-800">
        <GridContainer className=" py-20 text-gray-50 font-semibold" cols={3}>
          <div className="flex gap-3  items-center flex-col">
            <h2 className=" lg:text-2xl text-xl py-2 text-gray-200 font-bold">المقر الرئيسي
            </h2>
            <p>الرياض ،طريق المدينة الصناعية الثانية ، طريق 3189 311</p>
            <div className=" mt-5">
             <Image src="/pc/LOGO-removebg-preview (2).png" height={150} width={150} alt="logo" />
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <h2 className=" lg:text-2xl text-xl py-4 text-gray-200  font-bold">خريطة الموقع</h2>
            <ul className="space-y-2">
              <Link href="/">
              <li className="cursor-pointer text-lg hover:text-blue-500">الرئيسية</li>
              </Link>
              <Link href="/#aboutus">
              <li className="cursor-pointer text-lg hover:text-blue-500">من نحن</li>
              </Link>
              <Link href="/#products">
              <li className="cursor-pointer text-lg hover:text-blue-500">جميع المنتجات</li>
              </Link>

            </ul>
          </div>
          <div className=" flex flex-col items-center">
            <h2 className=" lg:text-2xl text-xl py-2 text-gray-200 font-bold">تواصل معنا</h2>
            <ul className="flex flex-col gap-2 mt-2 items-center lg:items-start">
              <li>هاتف: 00966112651166</li>
              <li>البريد: Diedansalem@yahoo.com</li>
              <li>فاكس: 00966112652003</li>
            </ul>
          </div>
        </GridContainer>
      <div className=" py-6 flex justify-center text-lg bg-gray-50 text-gray-900">
        <p>  © All rights reserved 2025</p>
      </div>
    </div>
  );
};

export default Footer;
