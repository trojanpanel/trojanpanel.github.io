(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{292:function(t,v,_){"use strict";_.r(v);var a=_(7),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"自动安装教程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动安装教程"}},[t._v("#")]),t._v(" 自动安装教程")]),t._v(" "),v("h2",{attrs:{id:"准备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),v("h4",{attrs:{id:"系统要求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[t._v("#")]),t._v(" 系统要求")]),t._v(" "),v("p",[t._v("系统支持: CentOS 7+/Ubuntu 18+/Debian 10+")]),t._v(" "),v("p",[t._v("处理器架构: "),v("code",[t._v("linux/386")]),t._v(" "),v("code",[t._v("linux/amd64")]),t._v(" "),v("code",[t._v("liunx/v6")]),t._v(" "),v("code",[t._v("linux/v7")]),t._v(" "),v("code",[t._v("linux/arm64")]),t._v(" "),v("code",[t._v("linux/ppc64le")]),t._v(" "),v("code",[t._v("linux/s390x")])]),t._v(" "),v("p",[t._v("内存要求: ≥1G")]),t._v(" "),v("h4",{attrs:{id:"相关端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关端口"}},[t._v("#")]),t._v(" 相关端口")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("端口")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("80")]),t._v(" "),v("td",[t._v("伪装Web")])]),t._v(" "),v("tr",[v("td",[t._v("8863")]),t._v(" "),v("td",[t._v("Caddy转发")])]),t._v(" "),v("tr",[v("td",[t._v("8888")]),t._v(" "),v("td",[t._v("Trojan Panel前端")])]),t._v(" "),v("tr",[v("td",[t._v("9507")]),t._v(" "),v("td",[t._v("MariaDB")])]),t._v(" "),v("tr",[v("td",[t._v("6378")]),t._v(" "),v("td",[t._v("Redis")])]),t._v(" "),v("tr",[v("td",[t._v("8100")]),t._v(" "),v("td",[t._v("gRPC端口")])])])]),t._v(" "),v("p",[t._v("Trojan Panel服务器需开放以下端口: "),v("code",[t._v("80")]),t._v(" "),v("code",[t._v("8863")]),t._v(" "),v("code",[t._v("8888")]),t._v("，Trojan Panel Core服务器需要开放："),v("code",[t._v("8100")]),t._v("。")]),t._v(" "),v("p",[t._v("如果使用的服务器控制面板有防火墙设置需要自己在控制面板自行开放以上端口。")]),t._v(" "),v("p",[t._v("如果没有没有远程节点，尽量不要开放"),v("code",[t._v("9507")]),t._v("和"),v("code",[t._v("6378")]),t._v("端口。")]),t._v(" "),v("h4",{attrs:{id:"注意"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("控制面板和节点都推荐部署在"),v("strong",[t._v("国外服务器")]),t._v("上，否则会由于网络问题使用一键安装脚本会因为远程下载文件超时报错。")])]),t._v(" "),v("li",[v("p",[t._v("提前准备一个解析到服务的"),v("strong",[t._v("二级域名")]),t._v("。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("数据库和Redis的密码尽量设置复杂")]),t._v("（数字+大小写字母+特殊字符），否则假如开放了对应端口，则存在被撞库的安全风险。")])]),t._v(" "),v("li",[v("p",[t._v("建议的安装顺序: "),v("RouterLink",{attrs:{to:"/tutorial/performance-tuning.html#网络加速"}},[t._v("安装网络加速")]),t._v(" > 安装Trojan Panel > 安装Trojan Panel Core")],1),t._v(" "),v("p",[t._v("建议在脚本运行中需要手动输入的部分，如果没有特殊需求或者不知道这个选项是干什么的，"),v("strong",[t._v("除数据库密码和Redis密码自定义以外，其他默认即可")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("如果是远程多节点的情况，"),v("strong",[t._v("节点服务器只需要安装一次Trojan Panel Core")]),t._v("，在面板界面才可以操作远程服务器从而远程自动化管理节点。")])]),t._v(" "),v("li",[v("p",[t._v("如果使用Caddy自动申请/续签证书，"),v("strong",[t._v("需要开放Caddy端口（默认80）并且保证Caddy端口没有被其他进程占用")]),t._v("。")])])]),t._v(" "),v("h2",{attrs:{id:"一键安装脚本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本"}},[t._v("#")]),t._v(" 一键安装脚本")]),t._v(" "),v("ol",[v("li",[t._v("联机版（推荐）")])]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-L")]),t._v(" https://github.com/trojanpanel/install-script/raw/main/install_script.sh"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("ol",{attrs:{start:"2"}},[v("li",[t._v("单机版")])]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-L")]),t._v(" https://github.com/trojanpanel/install-script/raw/main/install_script_standalone.sh"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("ol",{attrs:{start:"3"}},[v("li",[v("a",{attrs:{href:"https://github.com/trojanpanel/install-script/tree/main/archive",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装旧版"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"安装trojan-panel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装trojan-panel"}},[t._v("#")]),t._v(" 安装Trojan Panel")]),t._v(" "),v("ol",[v("li",[t._v("请输入Caddy的端口(默认:80)")])]),t._v(" "),v("p",[t._v("默认即可，除非80端口被墙或者被其他进程占用。")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("请输入Caddy的转发端口(用于申请证书,默认:8863)")])]),t._v(" "),v("p",[t._v("默认即可，除非8863端口被墙。")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("请输入你的域名(必填)")])]),t._v(" "),v("p",[t._v("输入你提前解析到本机的域名。")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("请选择设置证书的方式?(1/自动申请和续签证书 2/手动设置证书路径 默认:1/自动申请和续签证书)")])]),t._v(" "),v("p",[t._v("推荐自动申请和续签证书，如果自己有证书或者自动申请和续签证书失败可以选择手动设置证书路径（24小时内申请2次以上可能会导致自动申请证书失败，如果搭建频繁，建议选择手动设置证书路径）。")]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("请输入你的邮箱(用于申请证书,默认:"),v("code",[t._v("123456@qq.com")]),t._v(")")])]),t._v(" "),v("p",[t._v("默认即可，或输入一个合法的邮箱地址，此选项用于申请证书。")]),t._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[t._v("请输入证书的.crt文件路径(必填)")])]),t._v(" "),v("p",[t._v("使用.crt文件的绝对路径，例如："),v("code",[t._v("/root/www.google.com.crt")])]),t._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[t._v("请输入证书的.key文件路径(必填)")])]),t._v(" "),v("p",[t._v("使用.key文件的绝对路径，例如："),v("code",[t._v("/root/www.google.com.key")])]),t._v(" "),v("ol",{attrs:{start:"8"}},[v("li",[t._v("请输入数据库的用户名(默认:root)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义数据库用户的需求。")]),t._v(" "),v("ol",{attrs:{start:"9"}},[v("li",[t._v("请输入数据库的密码(必填)")])]),t._v(" "),v("p",[t._v("输入一个较为复杂且你能记得住的密码。")]),t._v(" "),v("ol",{attrs:{start:"10"}},[v("li",[t._v("请输入Redis的密码(必填)")])]),t._v(" "),v("p",[t._v("输入一个较为复杂且你能记得住的密码。")]),t._v(" "),v("ol",{attrs:{start:"10"}},[v("li",[t._v("请输入数据库的IP地址(默认:本地数据库)")])]),t._v(" "),v("p",[t._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的IP地址。")]),t._v(" "),v("ol",{attrs:{start:"11"}},[v("li",[t._v("请输入数据库的端口(默认:本地数据库端口)")])]),t._v(" "),v("p",[t._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的数据库端口。")]),t._v(" "),v("ol",{attrs:{start:"12"}},[v("li",[t._v("请输入数据库的用户名(默认:root)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义数据库用户的需求。")]),t._v(" "),v("ol",{attrs:{start:"13"}},[v("li",[t._v("请输入数据库的密码(必填)")])]),t._v(" "),v("p",[t._v("如果数据库安装在本机则填写本机数据库密码，如果数据库安装在其他服务器这里填远程服务器的数据库密码。")]),t._v(" "),v("ol",{attrs:{start:"14"}},[v("li",[t._v("请输入Redis的IP地址(默认:本机Redis)")])]),t._v(" "),v("p",[t._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的IP地址。")]),t._v(" "),v("ol",{attrs:{start:"15"}},[v("li",[t._v("请输入Redis的端口(默认:本机Redis端口)")])]),t._v(" "),v("p",[t._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的Redis端口。")]),t._v(" "),v("ol",{attrs:{start:"16"}},[v("li",[t._v("请输入Redis的密码(必填)")])]),t._v(" "),v("p",[t._v("如果Redis安装在本机则填写本机Redis密码，如果Redis安装在其他服务器这里填远程服务器的Redis密码。")]),t._v(" "),v("ol",{attrs:{start:"17"}},[v("li",[t._v("请输入Trojan Panel前端端口(默认:8888)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义Trojan Panel前端端口的需求。")]),t._v(" "),v("ol",{attrs:{start:"18"}},[v("li",[t._v("请选择Trojan Panel前端是否开启https?(0/关闭 1/开启 默认:1/开启)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义择Trojan Panel前端是否开启https的需求。如果开启https，则管理面板地址为"),v("code",[t._v("https://你的域名:端口")]),t._v("，如果未开启https，则管理面板地址为"),v("code",[t._v("http://你的域名:端口")]),t._v("。")]),t._v(" "),v("p",[v("strong",[t._v("提示")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("安装结束后，访问"),v("strong",[t._v("你的域名")]),t._v("如果是一个静态网页，说明已经安装成功。")])]),t._v(" "),v("li",[v("p",[t._v("安装成功后，Trojan Panel管理面板地址: "),v("code",[t._v("你的域名:8888")]),t._v("\n系统管理员 默认用户名: "),v("code",[t._v("sysadmin")]),t._v(" 默认密码: "),v("code",[t._v("123456")]),t._v(" 请及时登陆管理面板修改密码。")])])]),t._v(" "),v("h2",{attrs:{id:"安装trojan-panel-core"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装trojan-panel-core"}},[t._v("#")]),t._v(" 安装Trojan Panel Core")]),t._v(" "),v("ol",[v("li",[t._v("请输入数据库的IP地址(默认:本地数据库)")])]),t._v(" "),v("p",[t._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的IP地址。")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("请输入数据库的端口(默认:本地数据库端口)")])]),t._v(" "),v("p",[t._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的数据库端口。")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("请输入数据库的用户名(默认:root)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义数据库用户的需求。")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("请输入数据库的密码(必填)")])]),t._v(" "),v("p",[t._v("如果数据库安装在本机则填写本机数据库密码，如果数据库安装在其他服务器这里填远程服务器的数据库密码。")]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("请输入数据库名称(默认:trojan_panel_db)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义数据库名称的需求。")]),t._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[t._v("请输入数据库的用户表名称(默认:account)")])]),t._v(" "),v("p",[t._v("默认即可，除非有自定义数据库的用户表的需求。")]),t._v(" "),v("ol",{attrs:{start:"7"}},[v("li",[t._v("请输入Redis的IP地址(默认:本机Redis)")])]),t._v(" "),v("p",[t._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的IP地址。")]),t._v(" "),v("ol",{attrs:{start:"8"}},[v("li",[t._v("请输入Redis的端口(默认:本机Redis端口)")])]),t._v(" "),v("p",[t._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的Redis端口。")]),t._v(" "),v("ol",{attrs:{start:"9"}},[v("li",[t._v("请输入Redis的密码(必填)")])]),t._v(" "),v("p",[t._v("如果Redis安装在本机则填写本机Redis密码，如果Redis安装在其他服务器这里填远程服务器的Redis密码。")]),t._v(" "),v("ol",{attrs:{start:"10"}},[v("li",[t._v("请输入API的端口(默认:8100)")])]),t._v(" "),v("p",[t._v("默认即可，除非8100端口被墙。")])])}),[],!1,null,null,null);v.default=s.exports}}]);