'use client';

import Image from 'next/image';

import { usePathname } from '#/i18n/routing';

import lebedev from '#assets/artlebedev.png';

export const ALS = () => {
    const pathname = usePathname();

    if (pathname !== '/') {
        return null;
    }

    return (
        <div className="mt-auto lg:mt-10">
            <div className="text-xs">Designed in Art. Lebedev Studio</div>
            <div className="mb-0.5 text-xs">Information about website</div>
            <Image src={lebedev} alt="artlebedev" width={125} height={43} />
            <div className="mt-2.5 opacity-40">© Diagnocat 2024</div>
        </div>
    );
};
