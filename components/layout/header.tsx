"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "#utils/classnames";

import { MENU_LINKS } from "#components/layout/constants";
import { MenuItem } from "#components/layout/menu-item";

import explore from "#assets/explore.png";
import logo from "#assets/logo.png";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <div className="relative z-30 bg-white">
      <div className={cn("z flex items-center bg-white py-6", className)}>
        <Link href="/">
          <Image src={logo} alt="Diagnocat" className="mr-3" width={120} />
        </Link>
        <div className="relative mt-[3px] hidden gap-3 text-base leading-none lg:flex">
          {MENU_LINKS.map(({ href, title, activePaths, children }) => (
            <MenuItem
              key={href}
              href={href}
              title={title}
              activePaths={activePaths}
              subMenu={children}
            />
          ))}
          <div className="text-purple group -mt-[1px] flex cursor-pointer items-center gap-1">
            <Image
              className="-mt-[1px]"
              width={20}
              src={explore}
              alt="Explore App"
            />{" "}
            Explore App
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-2">
          <div className="bg-light-purple text-purple relative cursor-pointer rounded-full px-5 py-2 text-base font-bold">
            Login
          </div>
          <Menu size={28} stroke="#5241CC" className="z-20 ml-2 lg:hidden" />
        </div>
      </div>
    </div>
  );
};
