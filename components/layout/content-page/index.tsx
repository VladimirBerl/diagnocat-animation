import dayjs from 'dayjs';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Link } from '#/i18n/routing';
import { cn } from '#utils/classnames';

interface Props extends PropsWithChildren {
    title: string;
    breadcrumb: {
        title: string;
        href: string;
    };
    dateTime: string;
    size?: 'base' | 'big';
    image?: string;
}

export const ContentPageLayout = ({
    title,
    breadcrumb,
    dateTime,
    children,
    image,
    size = 'base',
}: Props) => {
    const date = dayjs(dateTime);
    const formattedDate = date.format('MMM D, YYYY');

    return (
        <div className="generated-content-page">
            <Link className="mb-8 block" href={breadcrumb.href}>
                {breadcrumb.title}
            </Link>
            <h1 className="max-w-layoutSmall">{title}</h1>
            <div className="my-8 flex items-center gap-1 text-[#4C476DB2]">
                <Calendar stroke="#5241CC" />
                {formattedDate}
            </div>
            <div className={cn(['mx-auto my-5 xl:my-8', size === 'base' && 'max-w-layout-xsmall'])}>
                {image && (
                    <Image
                        className="mx-auto rounded-3xl"
                        src={image}
                        width={500}
                        height={300}
                        alt={title}
                    />
                )}
                {children}
            </div>
        </div>
    );
};
