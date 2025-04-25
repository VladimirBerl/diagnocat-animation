"use client";

import Image from "next/image";

import { cn } from "#utils/classnames";

import catAvatarPink from "#assets/cat-avatar-icon-pink.png";
import catAvatarRed from "#assets/cat-avatar-icon-red.png";

export enum ThemesPin {
  red = "red",
  redLight = "red-light",
  pink = "pink",
  pinkLight = "pink-light",
}

export const SliderPin = ({
  des,
  percent,
  theme = ThemesPin.red,
  className,
}: {
  des: string;
  percent?: string;
  theme?: ThemesPin;
  className?: string;
}) => {
  const isRed = theme === ThemesPin.red;

  const initTheme = () => {
    switch (theme) {
      case ThemesPin.red:
        return "bg-[#FFCCD4] text-[#FF3254]";
      case ThemesPin.redLight:
        return "bg-[#FFE5E9] text-[#FF3254]";
      case ThemesPin.pink:
        return "bg-[#E4E1FF] text-[#4A39C0]";
      case ThemesPin.pinkLight:
        return "bg-[#EFECFF] text-[#4A39C0]";
      default:
        return "bg-[#FFCCD4] text-[#FF3254]";
    }
  };

  const avatarSrc = isRed ? catAvatarRed : catAvatarPink;

  return (
    <span
      className={cn(
        "font-medium inline-flex items-center gap-2 py-[0.6rem] px-[1.088rem] rounded-[0.844rem]",
        initTheme(),
        className
      )}
    >
      <p>{des}</p>
      {percent && (
        <div className="inline-flex items-center gap-[0.125rem]">
          <Image
            src={avatarSrc}
            priority
            quality={100}
            width={25.57}
            height={25.57}
            alt="cat-avatar-sm"
          />
          <p>{percent}%</p>
        </div>
      )}
    </span>
  );
};
