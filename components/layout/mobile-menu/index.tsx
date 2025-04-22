'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { Link } from '#/i18n/routing';

import { MENU_LINKS } from '#components/layout/constants';
import { useMobileMenu } from '#components/layout/mobile-menu/store';
import { LegalInfoText } from '#components/legal-info-text';
import { useModal } from '#components/modal/store';
import { SocialButtons } from '#components/social-buttons';

import explore from '#assets/explore.png';
import logo from '#assets/logo.png';

export const MobileMenu = () => {
    const { isOpen, toggle, close } = useMobileMenu();
    const { open } = useModal();
    const pathname = usePathname();

    const t = useTranslations('common');

    useEffect(() => {
        close();
    }, [pathname]);

    const onExploreClick = () => {
        open('demoApp');
        toggle();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 right-0 left-0 z-50 h-screen w-full overflow-y-scroll bg-white p-4">
            <div className="mb-10 flex items-center justify-between">
                <Link href="/" onClick={toggle}>
                    <Image src={logo} alt="Diagnocat" width={150} />
                </Link>
                <X size={28} stroke="#5241CC" onClick={toggle} />
            </div>
            <div
                className="text-purple group -mt-[1px] mb-6 flex cursor-pointer items-center gap-1"
                onClick={onExploreClick}
            >
                <Image className="-mt-[1px]" width={20} src={explore} alt={t('goExplore')} />{' '}
                {t('goExplore')}
            </div>
            {MENU_LINKS.map((link, key) => (
                <div key={key} className="mb-7 flex flex-col gap-4">
                    <Link href={link.href} className="font-bold text-black" onClick={toggle}>
                        {t(link.title, { count: 2 })}
                    </Link>
                    {MENU_LINKS[key].children &&
                        MENU_LINKS[key].children.map((link, key) => (
                            <Link
                                onClick={toggle}
                                className="block text-black"
                                key={key}
                                href={link.href}
                            >
                                {t.rich(link.text, { entity: '' })}
                            </Link>
                        ))}
                </div>
            ))}
            <div>© Diagnocat 2025</div>
            <SocialButtons />
            <LegalInfoText />
        </div>
    );
};
