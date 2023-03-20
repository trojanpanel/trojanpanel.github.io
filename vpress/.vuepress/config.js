module.exports = {
    head: [['link', {rel: 'icon', href: 'logo.png'}]],
    title: 'Trojan Panel',
    description: '支持Xray/Trojan-Go/Hysteria/NaiveProxy的多用户Web管理面板',
    plugins: [['@vuepress/back-to-top'], ['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: '/logo.png', lastUpdated: 'Last Updated', sidebar: {
            '/start/': ['introduce', 'system-structure', 'related-video'],
            '/tutorial/': ['using-tutorials', 'installation', 'custom-installation', 'docker-compose.md', 'des-of-related-doc', 'using-cdn', 'client-config', 'recommend-tool', 'performance-tuning', 'performance-testing'],
            '/problem/': ['common-problem'],
            '/change/': ['change-log']
        }, nav: [{text: '新手起步', link: '/start/introduce'}, {text: '相关教程', link: '/tutorial/using-tutorials'}, {
            text: '常见问题', link: '/problem/common-problem'
        }, {text: '更新日志', link: '/change/change-log'}, {
            text: 'GitHub', link: 'https://github.com/trojanpanel'
        }],
    },
    dest: 'docs'
}