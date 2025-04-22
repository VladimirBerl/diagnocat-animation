import Image from 'next/image';
import { PropsWithChildren } from 'react';

import bigCat from '#assets/big-cat.png';

interface Props extends PropsWithChildren {
    statusCode: number;
    message: string;
}

export const ErrorLayout = ({ statusCode, message, children }: Props) => {
    return (
        <div
            className="bg-purple relative flex h-screen w-screen flex-col items-center justify-start p-5 text-white"
            style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #EB32FF 0%, #5241CC 100%)',
            }}
        >
            {children}
            <div className="font-serif text-7xl leading-none font-black">{statusCode}</div>
            <div className="font-bold">{message}</div>
            <Image
                src={bigCat}
                alt=""
                quality={100}
                className="absolute bottom-0 left-1/2 max-w-287.5 -translate-x-1/2 transform object-contain"
            />
        </div>
    );
};
