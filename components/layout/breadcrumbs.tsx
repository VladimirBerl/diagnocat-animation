import { Link } from '#/i18n/routing';

export interface Breadcrumb {
    label: string;
    href: string;
}

export const Breadcrumbs = ({ label, href }: Breadcrumb) => (
    <Link href={href} className="mb-6 inline-block">
        {label}
    </Link>
);
