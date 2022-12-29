# 使用CDN

## Cloudflare

> Cloudflare: https://www.cloudflare.com/zh-cn/

注意:

1. 节点端口必须使用[CF指定的端口](https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/)

2. Cloudflare 代理状态必须设置为**已代理**，SSL/TLS加密模式必须设置为**完全**或者**完全（严格）**

![cdn-1](/tuorial/cdn-1.png)

![cdn-2](/tuorial/cdn-2.png)

3. 如果前端开启了https，则必须使用[CF指定的https端口](https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/) ，http同理，否则无法通过域名访问面板