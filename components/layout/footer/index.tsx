import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Link } from '#/i18n/routing';

import { FOOTER_LINKS } from '#components/layout/constants';
import { LegalInfoText } from '#components/legal-info-text';
import { SocialButtons } from '#components/social-buttons';

import logo from '#assets/logo.png';

export const Footer = async () => {
    const t = await getTranslations('common');

    return (
        <div className="mt-auto pb-10">
            <Image src={logo} alt="Diagnocat" width={223} height={59} className="mt-15 lg:mt-20" />
            <div className="mt-3 flex flex-col justify-between gap-10 text-left lg:grid lg:grid-cols-4 lg:gap-0">
                {FOOTER_LINKS.map((linksGroup, key) => (
                    <div key={key} className="flex flex-col">
                        {linksGroup.map((link, key) => (
                            <Link className="mt-3 block text-black" key={key} href={link.href}>
                                {t(link.text)}
                            </Link>
                        ))}
                        {key === 3 && <SocialButtons />}
                    </div>
                ))}
            </div>
            <LegalInfoText />
        </div>
    );
};
