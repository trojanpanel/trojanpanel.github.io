module.exports = {
    head: [
        [
            'link',
            {rel: 'icon', href: 'logo.png'}
        ]
    ],
    title: 'Trojan Panel',
    description: '支持Trojan-Go/Hysteria的多用户Web管理面板',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        sidebar: {
            '/start/': [
                'introduce', 'system-structure', 'related-video'
            ],
            '/tutorial/': [
                'installation', 'custom-installation', 'performance-tuning', 'recommend-tool', 'performance-testing'
            ],
            '/problem/': [
                'common-problem'
            ],
            '/change/': [
                'change-log'
            ]
        },
        nav: [
            {text: '新手起步', link: '/start/introduce'},
            {text: '使用教程', link: '/tutorial/installation'},
            {text: '常见问题', link: '/problem/common-problem'},
            {text: '更新日志', link: '/change/change-log'},
            {text: '关于', link: '/about/about'},
            {text: 'GitHub', link: 'https://github.com/trojanpanel'}
        ],
    },
    dest: 'docs'
}