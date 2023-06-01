module.exports = {
    head: [['link', {rel: 'icon', href: 'logo.png'}], ['script', {}, `
    var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?37275f991707c27db91dbb6f668ee1c6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`]],
    title: 'Trojan Panel',
    description: '支持Xray/Trojan-Go/Hysteria/NaiveProxy的多用户Web管理面板',
    plugins: [['@vuepress/back-to-top'], ['vuepress-plugin-code-copy', true]],
    themeConfig: {
        logo: '/logo.png', lastUpdated: 'Last Updated', nav: [{text: '新手起步', link: '/start/introduce'}, {
            text: '相关教程', items: [{
                text: '安装教程', link: '/install-tutorial/installation'
            }, {
                text: '使用教程', link: '/tutorial/using-tutorials'
            }]
        }, {
            text: 'Q&A', link: '/Q&A/Q&A'
        }, {text: '更新日志', link: '/change/change-log'}, {
            text: 'GitHub', link: 'https://github.com/trojanpanel'
        }], sidebar: {
            '/start/': ['introduce', 'system-structure', 'related-video'],
            '/tutorial/': ['using-tutorials', 'des-of-related-doc', 'common-problem', 'using-cdn', 'client-config', 'recommend-tool', 'performance-tuning', 'performance-testing'],
            '/install-tutorial/': ['installation', 'custom-installation', 'docker-compose'],
            '/Q&A/': ['Q&A'],
            '/change/': ['change-log']
        },
    },
    dest: 'docs'
}