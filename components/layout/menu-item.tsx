import Image from "next/image";
import Link from "next/link";

import { cn } from "#utils/classnames";

import arrow from "#assets/arrow-down.png";

interface Props {
  title: string;
  activePaths: string[];
  href: string;
  subMenu?: { text: string; href: string }[];
}

export const MenuItem = ({ title, href, activePaths, subMenu }: Props) => {
  console.log(activePaths);

  return (
    <div className="group relative">
      <Link
        key={title}
        className={cn(["flex items-center gap-2 text-black"])}
        href={href}
      >
        {title}
        {subMenu && (
          <Image
            className="transform group-hover:rotate-180"
            src={arrow}
            alt=""
          />
        )}
      </Link>
      {subMenu && (
        <div className="absolute top-[100%] left-1/2 hidden min-w-max -translate-x-1/2 transform flex-col gap-2 rounded-lg bg-white p-4 shadow-xl group-hover:flex">
          {subMenu?.map((item) => (
            <Link
              key={item.text}
              className={cn(["relative text-[16px] leading-6 text-black"])}
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
