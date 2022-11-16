module.exports = {
    head: [['link', {rel: 'icon', href: 'logo.png'}]],
    title: 'Trojan Panel',
    description: '支持Xray/Trojan-Go/Hysteria的多用户Web管理面板',
    plugins: [['@vuepress/back-to-top'], ['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: '/logo.png', lastUpdated: 'Last Updated', sidebar: {
            '/start/': ['introduce', 'system-structure', 'related-video'],
            '/tutorial/': ['installation', 'custom-installation', 'des-of-related-doc', 'using-tutorials', 'recommend-tool', 'performance-tuning', 'performance-testing'],
            '/problem/': ['common-problem'],
            '/change/': ['change-log']
        }, nav: [{text: '新手起步', link: '/start/introduce'}, {text: '相关教程', link: '/tutorial/installation'}, {
            text: '常见问题', link: '/problem/common-problem'
        }, {text: '更新日志', link: '/change/change-log'}, {
            text: 'GitHub', link: 'https://github.com/trojanpanel'
        }],
    },
    dest: 'docs'
}