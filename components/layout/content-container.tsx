import { PropsWithChildren } from 'react';

import { cn } from '#utils/classnames';

interface Props extends PropsWithChildren {
    className?: string;
}

export const ContentContainer = ({ children, className }: Props) => (
    <div className={cn('max-w-[1100px]', className)}>{children}</div>
);
