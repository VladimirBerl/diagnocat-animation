// import { Link } from '#/i18n/routing';

import Link from "next/link";

export interface Breadcrumb {
    label: string;
    href: string;
}

export const Breadcrumbs = ({ label, href }: Breadcrumb) => (
    <Link href={href} className="mb-6 inline-block">
        {label}
    </Link>
);
