import React from "react";

const MaxWidthWrapper = ({
  className,
  children,sectionId,
  noPadding = false,
}: {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;sectionId?:string
}) => {
  return (
    <section
      id={sectionId || ""}
      className={`${className || ""} max-w-[1375px] w-full mx-auto ${
        noPadding ? " py-0" : "py-5 lg:py-12"
      }   px-5 md:px-10 lg:px-20`}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
