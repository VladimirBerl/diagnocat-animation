import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

interface Props {
    title: string;
    description: string;
    subtitle?: string;
    image?: StaticImageData;
    children: ReactNode;
}

export const ProductPageLayout = ({ title, description, subtitle, image, children }: Props) => (
    <>
        <h1 className="max-w-263">{title}</h1>
        {subtitle && <div className="mt-10 mb-6 font-serif text-3xl font-bold">{subtitle}</div>}
        <div className="text-branded-xl xl:text-28 max-w-layout-small my-5 xl:my-8">
            {description}
        </div>
        {image && <Image src={image} priority={true} alt={title} placeholder="blur" />}
        {children}
    </>
);
