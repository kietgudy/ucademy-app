"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IActiveLinkProps } from "@/types";


const ActiveLink = ({ url, children }: IActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = url === pathName;
  return (
    <Link
      href={url}
      className={`p-3 rounded-md flex items-center dark:text-gray-400 gap-3  transition-all ${
        isActive
          ? "!text-white bg-primary icon-animate"
          : "hover:!text-primary hover:!bg-primary hover:!bg-opacity-10"
      }  `}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
