# 客户端配置

## v2rayN配置Hysteria（Windows）

1. [下载v2rayN](https://github.com/2dust/v2rayN/releases)


2. [下载Hysteria](https://github.com/apernet/hysteria/releases)

3. 将hysteria执行文件复制到v2rayN-Core目录下

![hysteria-win-1](/client-config/hysteria/hysteria-win-1.png)

4. 编辑hysteria配置文件

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

5. 开启对应的udp端口或者关闭防火墙

6. 打开v2rayN，添加自定义服务器

   ![hysteria-win-2](/client-config/hysteria/hysteria-win-2.png)

   ![hysteria-win-3](/client-config/hysteria/hysteria-win-3.png)

7. 将v2rayN的系统代理设置为自动配置系统代理
8. 选中节点，点击Enter即可连接节点

## 