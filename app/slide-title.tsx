import Image from 'next/image';

import { cn } from '#utils/classnames';

import catGold from '#assets/cat-avatar-smiled-gold.png';
import catPink from '#assets/cat-avatar-smiled-pink.png';
import catRed from '#assets/cat-avatar-smiled-red.png';
import pathGold from '#assets/path-mask-gold.png';
import pathPink from '#assets/path-mask-pink.png';
import pathRed from '#assets/path-mask-red.png';

type Theme = 'gold' | 'red' | 'pink';

interface Props {
    title: string;
    theme: Theme;
    className?: string;
}

const themeMap: Record<Theme, any> = {
    gold: {
        cat: catGold,
        path: pathGold,
        color: '#D06D18',
    },
    red: {
        cat: catRed,
        path: pathRed,
        color: '#E02130',
    },
    pink: {
        cat: catPink,
        path: pathPink,
        color: '#E12BD6',
    },
};

export const SlideTitle = ({ title, theme, className }: Props) => {
    const { cat, path, color } = themeMap[theme];

    return (
        <div
            className={cn([
                'relative z-10 min-h-18 w-50 py-2 lg:min-h-37.5 lg:w-112.5 lg:py-8',
                className,
            ])}
        >
            <Image
                src={cat}
                width={140}
                alt=""
                className="absolute top-1/2 z-20 w-15 -translate-x-1/2 -translate-y-1/2 transform lg:w-35 lg:-translate-x-12.5 lg:-translate-y-1/2"
            />
            <div
                className="lg:text-40 relative z-20 pl-8 text-left font-serif text-xl font-black lg:pl-25"
                style={{
                    color,
                }}
            >
                {title}
            </div>
            <Image
                src={path}
                alt=""
                fill
                style={{
                    objectFit: 'contain',
                }}
            />
        </div>
    );
};
