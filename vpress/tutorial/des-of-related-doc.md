# 相关说明

## 文件路径

Xray/Trojan-Go/Hysteria/NaiveProxy配置文件位置如下

- Xray：`/tpdata/trojan-panel-core/bin/xray/config/`
- Trojan-Go：`/tpdata/trojan-panel-core/bin/trojango/config/`
- Hysteria：`/tpdata/trojan-panel-core/bin/hysteria/config/`
- NaiveProxy：`/tpdata/trojan-panel-core/bin/naiveproxy/config/`

Trojan Panel日志文件位置如下

`/tpdata/trojan-panel/logs/`

Trojan Panel Core日志文件位置如下

`/tpdata/trojan-panel-core/logs/`

Nginx配置文件位置如下

`/tpdata/nginx/default.conf`

Caddy证书文件位置如下

`/tpdata/caddy/acme/`

伪装网站文件位置如下

`/tpdata/caddy/srv/`

## Xray

1. [xtls-rprx-vision仅支持TLS](vhttps://github.com/XTLS/Xray-core/issues/1562)
2. [fallbacks仅支持TCP+TLS](https://xtls.github.io/config/features/fallback.html#fallbacks-%E9%85%8D%E7%BD%AE)
3. [Xray配置](https://xtls.github.io/config/#%E6%A6%82%E8%BF%B0)
4. [Xray配置举例](https://github.com/XTLS/Xray-examples)

## Clash

1. [Clash规则](https://github.com/Loyalsoldier/clash-rules)