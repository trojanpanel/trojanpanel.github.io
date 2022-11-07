(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{285:function(v,_,t){"use strict";t.r(_);var a=t(10),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"安装教程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装教程"}},[v._v("#")]),v._v(" 安装教程")]),v._v(" "),_("h2",{attrs:{id:"系统要求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[v._v("#")]),v._v(" 系统要求")]),v._v(" "),_("p",[v._v("系统支持: CentOS 7+/Ubuntu 18+/Debian 10+")]),v._v(" "),_("p",[v._v("处理器架构: "),_("code",[v._v("linux/386")]),v._v(" "),_("code",[v._v("linux/amd64")]),v._v(" "),_("code",[v._v("liunx/v6")]),v._v(" "),_("code",[v._v("linux/v7")]),v._v(" "),_("code",[v._v("linux/arm64")]),v._v(" "),_("code",[v._v("linux/ppc64le")]),v._v(" "),_("code",[v._v("linux/s390x")])]),v._v(" "),_("p",[v._v("内存要求: ≥1G")]),v._v(" "),_("h2",{attrs:{id:"安装前准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装前准备"}},[v._v("#")]),v._v(" 安装前准备")]),v._v(" "),_("ol",[_("li",[v._v("一台未被墙的"),_("strong",[v._v("国外VPS")])]),v._v(" "),_("li",[v._v("一个解析到VPS的"),_("strong",[v._v("二级域名")])]),v._v(" "),_("li",[v._v("开放端口")])]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("端口")]),v._v(" "),_("th",[v._v("描述")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("80")]),v._v(" "),_("td",[v._v("伪装Web")])]),v._v(" "),_("tr",[_("td",[v._v("8863")]),v._v(" "),_("td",[v._v("Caddy转发")])]),v._v(" "),_("tr",[_("td",[v._v("8888")]),v._v(" "),_("td",[v._v("Trojan Panel前端")])]),v._v(" "),_("tr",[_("td",[v._v("3306")]),v._v(" "),_("td",[v._v("MariaDB")])]),v._v(" "),_("tr",[_("td",[v._v("6379")]),v._v(" "),_("td",[v._v("Redis")])]),v._v(" "),_("tr",[_("td",[v._v("8100")]),v._v(" "),_("td",[v._v("gRPC端口")])])])]),v._v(" "),_("p",[v._v("Trojan Panel服务器需开放以下端口: "),_("code",[v._v("80")]),v._v(" "),_("code",[v._v("8863")]),v._v(" "),_("code",[v._v("8888")]),v._v("，Trojan Panel Core服务器需要开放："),_("code",[v._v("8100")]),v._v("。")]),v._v(" "),_("p",[v._v("如果使用的服务器控制面板有防火墙设置需要自己在控制面板自行开放以上端口。")]),v._v(" "),_("h2",{attrs:{id:"安装建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装建议"}},[v._v("#")]),v._v(" 安装建议")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("控制面板和节点都推荐部署在"),_("strong",[v._v("国外服务器")]),v._v("上，否则会由于网络问题使用一键安装脚本会因为远程下载文件超时报错。")])]),v._v(" "),_("li",[_("p",[v._v("建议的安装顺序: 卸载云盾(阿里云服务器) > 安装BBRplus > 安装Trojan Panel > 安装Trojan Panel Core")]),v._v(" "),_("p",[v._v("建议在脚本运行中需要手动输入的部分，如果没有特殊需求或者不知道这个选项是干什么的，除数据库密码和Redis密码自定义以外，其他默认即可。")])])]),v._v(" "),_("h2",{attrs:{id:"一键安装脚本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本"}},[v._v("#")]),v._v(" 一键安装脚本")]),v._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[v._v("source")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),_("span",{pre:!0,attrs:{class:"token function"}},[v._v("curl")]),v._v(" -L https://github.com/trojanpanel/install-script/raw/main/install_script.sh"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])])]),_("h2",{attrs:{id:"安装trojan-panel"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装trojan-panel"}},[v._v("#")]),v._v(" 安装Trojan Panel")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("请输入Caddy的转发端口(用于申请证书,默认:8863)")]),v._v(" "),_("p",[v._v("默认即可，除非8863端口被墙。")])]),v._v(" "),_("li",[_("p",[v._v("请输入你的域名(必填)")]),v._v(" "),_("p",[v._v("输入你提前解析到本机的域名。")])]),v._v(" "),_("li",[_("p",[v._v("请选择设置证书的方式?(1/自动申请和续签证书 2/手动设置证书路径 默认:1/自动申请和续签证书)")]),v._v(" "),_("p",[v._v("推荐自动申请和续签证书，如果自己有证书或者自动申请和续签证书失败可以选择手动设置证书路径。")])]),v._v(" "),_("li",[_("p",[v._v("请输入你的邮箱(用于申请证书,默认:"),_("code",[v._v("123456@qq.com")]),v._v(")")]),v._v(" "),_("p",[v._v("默认即可，或输入一个合法的邮箱地址，此选项用于申请证书。")])]),v._v(" "),_("li",[_("p",[v._v("请输入证书的.crt文件路径(必填)")]),v._v(" "),_("p",[v._v("使用.crt文件的绝对路径，例如："),_("code",[v._v("/root/www.google.com.crt")])])]),v._v(" "),_("li",[_("p",[v._v("请输入证书的.key文件路径(必填)")]),v._v(" "),_("p",[v._v("使用.key文件的绝对路径，例如："),_("code",[v._v("/root/www.google.com.key")])])]),v._v(" "),_("li",[_("p",[v._v("请输入数据库的用户名(默认:root)")]),v._v(" "),_("p",[v._v("默认即可，除非有自定义数据库用户的需求。")])]),v._v(" "),_("li",[_("p",[v._v("请输入数据库的密码(必填)")]),v._v(" "),_("p",[v._v("输入一个较为复杂且你能记得住的密码。")])]),v._v(" "),_("li",[_("p",[v._v("请输入Redis的密码(必填)")])])]),v._v(" "),_("p",[v._v("输入一个较为复杂且你能记得住的密码。")]),v._v(" "),_("ol",{attrs:{start:"10"}},[_("li",[v._v("请输入数据库的IP地址(默认:本地数据库)")])]),v._v(" "),_("p",[v._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的IP地址。")]),v._v(" "),_("ol",{attrs:{start:"11"}},[_("li",[v._v("请输入数据库的端口(默认:本地数据库端口)")])]),v._v(" "),_("p",[v._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的数据库端口。")]),v._v(" "),_("ol",{attrs:{start:"12"}},[_("li",[v._v("请输入数据库的用户名(默认:root)")])]),v._v(" "),_("p",[v._v("默认即可，除非有自定义数据库用户的需求。")]),v._v(" "),_("ol",{attrs:{start:"13"}},[_("li",[v._v("请输入数据库的密码(必填)")])]),v._v(" "),_("p",[v._v("如果数据库安装在本机则填写本机数据库密码，如果数据库安装在其他服务器这里填远程服务器的数据库密码。")]),v._v(" "),_("ol",{attrs:{start:"14"}},[_("li",[v._v("请输入Redis的IP地址(默认:本机Redis)")])]),v._v(" "),_("p",[v._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的IP地址。")]),v._v(" "),_("ol",{attrs:{start:"15"}},[_("li",[v._v("请输入Redis的端口(默认:本机Redis端口)")])]),v._v(" "),_("p",[v._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的Redis端口。")]),v._v(" "),_("ol",{attrs:{start:"16"}},[_("li",[v._v("请输入Redis的密码(必填)")])]),v._v(" "),_("p",[v._v("如果Redis安装在本机则填写本机Redis密码，如果Redis安装在其他服务器这里填远程服务器的Redis密码。")]),v._v(" "),_("ol",{attrs:{start:"17"}},[_("li",[v._v("请输入Trojan Panel前端端口(默认:8888)")])]),v._v(" "),_("p",[v._v("默认即可，除非有自定义Trojan Panel前端端口的需求。")]),v._v(" "),_("p",[_("strong",[v._v("提示")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("安装结束后，访问"),_("strong",[v._v("你的域名")]),v._v("如果是一个静态网页，说明已经安装成功。")])]),v._v(" "),_("li",[_("p",[v._v("安装成功后，Trojan Panel管理面板地址: "),_("code",[v._v("你的域名:8888")]),v._v("\n系统管理员 默认用户名: "),_("code",[v._v("sysadmin")]),v._v(" 默认密码: "),_("code",[v._v("123456")]),v._v(" 请及时登陆管理面板修改密码。")])])]),v._v(" "),_("h2",{attrs:{id:"安装trojan-panel-core"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装trojan-panel-core"}},[v._v("#")]),v._v(" 安装Trojan Panel Core")]),v._v(" "),_("ol",[_("li",[v._v("请输入数据库的IP地址(默认:本地数据库)")])]),v._v(" "),_("p",[v._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的IP地址。")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("请输入数据库的端口(默认:本地数据库端口)")])]),v._v(" "),_("p",[v._v("如果数据库安装在本机则默认即可，如果数据库安装在其他服务器这里填远程服务器的数据库端口。")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("请输入数据库的用户名(默认:root)")])]),v._v(" "),_("p",[v._v("默认即可，除非有自定义数据库用户的需求。")]),v._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[v._v("请输入数据库的密码(必填)")])]),v._v(" "),_("p",[v._v("如果数据库安装在本机则填写本机数据库密码，如果数据库安装在其他服务器这里填远程服务器的数据库密码。")]),v._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[v._v("请输入数据库名称(默认:trojan_panel_db)")])]),v._v(" "),_("p",[v._v("默认即可，除非有自定义数据库名称的需求。")]),v._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[v._v("请输入数据库的用户表名称(默认:account)")])]),v._v(" "),_("p",[v._v("默认即可，除非有自定义数据库的用户表的需求。")]),v._v(" "),_("ol",{attrs:{start:"7"}},[_("li",[v._v("请输入Redis的IP地址(默认:本机Redis)")])]),v._v(" "),_("p",[v._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的IP地址。")]),v._v(" "),_("ol",{attrs:{start:"8"}},[_("li",[v._v("请输入Redis的端口(默认:本机Redis端口)")])]),v._v(" "),_("p",[v._v("如果Redis安装在本机则默认即可，如果Redis安装在其他服务器这里填远程服务器的Redis端口。")]),v._v(" "),_("ol",{attrs:{start:"9"}},[_("li",[v._v("请输入Redis的密码(必填)")])]),v._v(" "),_("p",[v._v("如果Redis安装在本机则填写本机Redis密码，如果Redis安装在其他服务器这里填远程服务器的Redis密码。")])])}),[],!1,null,null,null);_.default=s.exports}}]);