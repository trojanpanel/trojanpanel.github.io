# 客户端配置

## v2rayN

[下载v2rayN-Core](https://github.com/2dust/v2rayN/releases)

### 配置Hysteria（Windows）

1. [下载Hysteria](https://github.com/apernet/hysteria/releases)

2. 将Hysteria执行文件复制到v2rayN-Core目录下

![](/client-config/hysteria/v2rayn-hysteria-win-1.png)

3. 编辑Hysteria配置文件

```json
{
  "server": "域名:端口",
  "protocol": "udp",
  "up_mbps": 100,
  "down_mbps": 100,
  "auth_str": "密码",
  "socks5": {
    "listen": "127.0.0.1:1080"
  }
}
```

备注：auth_str不需要base64编码

4. 开启对应的udp端口或者关闭防火墙

5. 打开v2rayN，添加自定义服务器

![](/client-config/hysteria/v2rayn-hysteria-win-2.png)

![](/client-config/hysteria/v2rayn-hysteria-win-3.png)

6. 将v2rayN的系统代理设置为自动配置系统代理

7. 选中节点，点击Enter即可连接节点

### 配置NaiveProxy（Windows）

1. [下载NaiveProxy](https://github.com/klzgrad/naiveproxy/releases)

2. 将NaiveProxy执行文件复制到v2rayN-Core目录下

![](/client-config/naiveproxy/v2rayn-naiveproxy-win-1.png)

3. 编辑NaiveProxy配置文件

```json
{
  "listen": "socks://127.0.0.1:1080",
  "proxy": "https://user:pass@example.com:port"
}
```

4. 开启对应的tcp端口或者关闭防火墙

5. 开v2rayN，添加自定义服务器

![](/client-config/naiveproxy/v2rayn-naiveproxy-win-2.png)

6. 将v2rayN的系统代理设置为自动配置系统代理

7. 选中节点，点击Enter即可连接节点

## Qv2ray

1. [下载Qv2ray](https://github.com/Qv2ray/Qv2ray/releases)

2. [下载Xray-core](https://github.com/XTLS/Xray-core/releases)

3. 在Qv2ray配置v2ray-core/Xray-core

- [下载v2ray-core](https://github.com/v2fly/v2ray-core/releases)
- [下载Xray-core（推荐）](https://github.com/XTLS/Xray-core/releases)

![](/client-config/qv2ray/qv2ray-win-1.png)

### 配置Trojan-Go（Windows）

1. [下载Trojan-Go](https://github.com/p4gefau1t/trojan-go/releases)

2. 添加[Trojan-Go插件](https://github.com/Qv2ray/QvPlugin-Trojan-Go/releases) 并设定Trojan-Go Kernel Path

![](/client-config/trojango/qv2ray-trojan-go-win-1.png)

3. 重启Qv2ray后即可添加Trojan-Go节点

### 配置Trojan（Windows）

1. 添加[Trojan插件](https://github.com/Qv2ray/QvPlugin-Trojan/releases)

2. 重启Qv2ray后即可添加Trojan节点

### 配置NaiveProxy（Windows）

1. [下载NaiveProxy](https://github.com/klzgrad/naiveproxy/releases)

2. 添加[NaiveProxy插件](https://github.com/Qv2ray/QvPlugin-NaiveProxy/releases) 并设定NaiveProxy Kernel Path

![](/client-config/naiveproxy/qv2ray-naiveproxy-win-1.png)

3. 重启Qv2ray后即可添加NaiveProxy节点

### 配置SS/SSR（Windows）

1. 添加[SS插件](https://github.com/Qv2ray/QvPlugin-SS/releases) / [SSR插件](https://github.com/Qv2ray/QvPlugin-SSR/releases)

2. 重启Qv2ray后即可添加SS/SSR节点
 