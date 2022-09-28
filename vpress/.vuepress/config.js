module.exports = {
    head: [
        [
            'link',
            {rel: 'icon', href: 'logo.png'}
        ]
    ],
    title: 'Trojan Panel',
    description: '支持多用户多协议的可视化管理面板',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        sidebar: {
            '/start/': [
                'introduce', 'system-structure', 'related-video'
            ],
            '/tutorial/': [
                'installation', 'custom-installation', 'performance-tuning', 'performance-testing', 'recommend-tool'
            ],
        },
        nav: [
            {text: '新手起步', link: '/start/introduce'},
            {text: '使用教程', link: '/tutorial/installation'},
            {text: '关于', link: '/about/about'},
            {text: 'GitHub', link: 'https://github.com/trojanpanel'}
        ],
    },
    dest: 'docs'
}