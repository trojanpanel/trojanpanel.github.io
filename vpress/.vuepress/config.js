module.exports = {
    head: [['link', {rel: 'icon', href: 'logo.png'}], ['script', {}, `
    var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?37275f991707c27db91dbb6f668ee1c6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`], ['script', {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9763379843362753',
        crossorigin: 'anonymous'
    }]],
    title: 'Trojan Panel',
    description: '支持Xray/Trojan-Go/Hysteria/NaiveProxy的多用户Web管理面板',
    plugins: [['@vuepress/back-to-top'], ['vuepress-plugin-code-copy', true]],
    themeConfig: {
        sidebarDepth: 3,
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        nav: [{text: '新手起步', link: '/start/introduce'}, {
            text: '相关教程', items: [{
                text: '安装教程', link: '/install-tutorial/installation'
            }, {
                text: '使用教程', link: '/tutorial/using-tutorials'
            }]
        },
            {
                text: '开发文档', items: [{text: 'API文档', link: '/api/api'}, {text: 'Core SDK', link: '/sdk/sdk'}]
            },
            {
                text: 'FAQ', link: '/faq/faq'
            }, {text: '更新日志', link: '/change/change-log'}, {
                text: 'GitHub', link: 'https://github.com/trojanpanel'
            }],
        sidebar: {
            '/start/': ['introduce', 'system-structure'],
            '/tutorial/': ['using-tutorials', 'des-of-related-doc', 'using-cdn', 'client-config', 'recommend-tool', 'performance-tuning', 'performance-testing'],
            '/install-tutorial/': ['installation', 'custom-installation', 'docker-compose'],
            '/api/': ['api'],
            '/sdk/': ['sdk'],
            '/faq/': ['faq'],
            '/change/': ['change-log']
        },
    },
    dest: 'docs'
}