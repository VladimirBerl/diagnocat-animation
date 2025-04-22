export const FOOTER_LINKS = [
    [
        {
            text: 'radiologicalReport',
            href: '/products/radiology-report',
        },
        {
            text: 'models',
            href: '/products/super-imposition',
        },
        {
            text: 'analytics',
            href: '/products/analytics',
        },
    ],
    [
        {
            text: 'news',
            href: '/publications?type=news',
        },
        {
            text: 'blog',
            href: '/publications?type=blog',
        },
        {
            text: 'ebooks',
            href: '/publications?type=ebook',
        },
        // {
        //     text: 'cases',
        //     href: '/cases',
        // },
    ],
    [
        {
            text: 'reviews',
            href: '/testimonials',
        },
        {
            text: 'events',
            href: '/events',
        },
        {
            text: 'whitePapers',
            href: '/white-papers',
        },
    ],
    [
        {
            text: 'about',
            href: '/about-us',
        },
        {
            text: 'contacts',
            href: '/contacts',
        },
    ],
];

export const MENU_LINKS = [
    {
        href: '/products',
        title: 'products',
        activePaths: ['/products'],
        children: [
            {
                text: 'radiologicalReport',
                href: '/products/radiology-report',
            },
            {
                text: 'models',
                href: '/products/super-imposition',
            },
            {
                text: 'analytics',
                href: '/products/analytics',
            },
        ],
    },
    {
        href: '/about-us',
        title: 'about',
        activePaths: ['/about-us'],
        children: [
            {
                text: 'contacts',
                href: '/contacts',
            },
        ],
    },
    {
        href: '/events',
        title: 'events',
        activePaths: ['/events'],
        children: [
            {
                text: 'upcoming',
                href: '/events?period=upcoming',
            },
            {
                text: 'archival',
                href: '/events?period=archival',
            },
        ],
    },
    {
        href: '/publications',
        title: 'publications',
        activePaths: ['/publications'],
        children: [
            {
                text: 'news',
                href: '/publications?type=news',
            },
            {
                text: 'blog',
                href: '/publications?type=blog',
            },
            {
                text: 'ebooks',
                href: '/publications?type=ebook',
            },
        ],
    },
    {
        href: '',
        title: 'resources',
        activePaths: ['/cases', '/testimonials', '/white-papers'],
        children: [
            // {
            //     text: 'cases',
            //     href: '/cases',
            // },
            {
                text: 'testimonials',
                href: '/testimonials',
            },
            {
                text: 'whitePapers',
                href: '/white-papers',
            },
        ],
    },
];
