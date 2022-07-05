# 手动安装教程

## 前言

以下安装过程大致如下：

Docker > Redis > MariaDB > Caddy > Trojan Panel > Trojan Panel UI > Trojan-go/Hysteria

以下是各应用的版本对应关系：

名称|版本
---|---
Docker|latest
Redis|6.2.7
MariaDB|10.7.3
Caddy|1.0.3
Trojan Panel|latest
Trojan Panel UI|latest
Trojan-go|latest
Hysteria|latest

![docker-images](/docker-images.png)

## 安装Docker

> Docker官方安装教程：https://docs.docker.com/engine/install/

注意：

1. 如果是国内服务器需要设置Docker国内镜像源

## 安装Redis

> Docker Hub：https://hub.docker.com/_/redis

1. Pull the image

```shell
docker pull redis:6.2.7
```

2. Start a container

```shell
docker run -d --name trojan-panel-redis --restart always \
--network=trojan-panel-network \
-p ${redis_port}:6379 \
-v ${REDIS_DATA}:/data redis:6.2.7 \
redis-server --requirepass "${redis_pass}"
```

参数解释：

- `--name trojan-panel-redis`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p ${redis_port}:6379`：映射Redis端口
- `-v ${REDIS_DATA}:/data`：映射Redis数据文件夹
- `redis-server --requirepass "${redis_pass}"`：设置Redis密码为`${redis_pass}`

## 安装MariaDB

> Docker Hub：https://hub.docker.com/_/mariadb

1. Pull the image

```shell
docker pull mariadb:10.7.3
```

2. Start a container

```shell
docker run -d --name trojan-panel-mariadb --restart always \
--network=trojan-panel-network \
-p ${mariadb_port}:3306 \
-v ${MARIA_DATA}:/var/lib/mysql \
-e MYSQL_DATABASE="trojan_panel_db" \
-e MYSQL_ROOT_PASSWORD="${mariadb_pas}" \
-e TZ=Asia/Shanghai \
mariadb:10.7.3
```

参数解释：

- `--name trojan-panel-redis`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p ${mariadb_port}:3306`：映射MariaDB端口
- `-v ${MARIA_DATA}:/var/lib/mysql`：映射MariaDB数据文件夹
- `-e MYSQL_DATABASE="trojan_panel_db"`：容器启动时创建一个默认的`trojan_panel_db`库
- `-e MYSQL_ROOT_PASSWORD="${mariadb_pas}"`：设置MariaDB密码为`${mariadb_pas}`
- `-e TZ=Asia/Shanghai"`：设置时区为上海

注意：

1. 容器启动时必须有一个默认的`trojan_panel_db`库，如果你是自己的数据库，需要自己手动创建一个`trojan_panel_db`库

## 安装Caddy

> Docker Hub：https://hub.docker.com/r/teddysun/caddy

1. Pull the image

```shell
docker pull teddysun/caddy:1.0.5
```

2. Start a container

```shell
docker run -d --name trojan-panel-caddy --restart always \
--network=trojan-panel-network \
-p 80:80 \
-p ${caddy_remote_port}:${caddy_remote_port} \
-v ${CADDY_Caddyfile}:"/etc/caddy/Caddyfile" \
-v ${CADDY_ACME}:"/root/.caddy/acme/acme-v02.api.letsencrypt.org/sites/" \
-v ${CADDY_SRV}:${CADDY_SRV} \
teddysun/caddy:1.0.5
```

参数解释：

- `--name trojan-panel-redis`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p 80:80`：映射Caddy Web端口，建议`80`
- `-p ${caddy_remote_port}:${caddy_remote_port}`：映射Caddy SSL端口，建议`443`
- `-v ${CADDY_Caddyfile}:"/etc/caddy/Caddyfile"`：映射Caddyfile文件
- `-v ${CADDY_ACME}:"/root/.caddy/acme/acme-v02.api.letsencrypt.org/sites/"`：映射证书文件夹
- `-v ${CADDY_SRV}:${CADDY_SRV}`：映射伪装网站文件夹

## 安装Trojan Panel

> Docker Hub：https://hub.docker.com/r/jonssonyan/trojan-panel

1. Pull the image

```shell
docker pull jonssonyan/trojan-panel
```

2. Start a container

```shell
docker run -d --name trojan-panel --restart always \
--network=trojan-panel-network \
-p 8081:8081 \
-v ${CADDY_SRV}:${TROJAN_PANEL_WEBFILE} \
-v ${TROJAN_PANEL_LOGS}:${TROJAN_PANEL_LOGS} \
-v /etc/localtime:/etc/localtime \
-e "mariadb_ip=${mariadb_ip}" \
-e "mariadb_port=${mariadb_port}" \
-e "mariadb_user=${mariadb_user}" \
-e "mariadb_pas=${mariadb_pas}" \
-e "redis_host=${redis_host}" \
-e "redis_port=${redis_port}" \
-e "redis_pass=${redis_pass}" \
jonssonyan/trojan-panel
```

参数解释：

- `--name trojan-panel`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p 8081:8081`：映射Trojan Panel端口。注意要和 Trojan Panel UI 中 Nginx 转发的端口保持一致
- `-v ${CADDY_SRV}:/tpdata/trojan-panel/webfile/`：映射伪装网站文件夹
- `-v ${TROJAN_PANEL_LOGS}:/tpdata/trojan-panel/logs/`：映射日志文件夹
- `-v /etc/localtime:/etc/localtime`：同步宿主机和容器的时区
- `-e "mariadb_ip=${mariadb_ip}"`：`${mariadb_ip}`为 MariaDB 数据库的 IP 地址(默认:本机数据库)
- `-e "mariadb_port=${mariadb_port}"`：`${mariadb_port}`为 MariaDB 数据库的端口(默认:本机数据库端口)
- `-e "mariadb_user=${mariadb_user}"`：`${mariadb_user}`为 MariaDB 数据库的用户名(默认:root)
- `-e "mariadb_pas=${mariadb_pas}"`：`${mariadb_pas}`为 MariaDB 数据库密码(默认:123456)
- `-e "redis_host=${redis_host}"`：`${redis_host}`为 Redis 的 IP 地址(默认:本机 Redis)
- `-e "redis_port=${redis_port}"`：`${redis_port}`为 Redis 的端口(默认:本机 Redis 端口)
- `-e "redis_pass=${redis_pass}"`：`${redis_pass}`为 Redis 的密码(默认:123456)

## 安装Trojan Panel UI

> Docker Hub：https://hub.docker.com/r/jonssonyan/trojan-panel-ui

1. Pull the image

```shell
docker pull jonssonyan/trojan-panel-ui
```

2. Start a container

```shell
docker run -d --name trojan-panel-ui --restart always \
--network=trojan-panel-network \
-p 8888:80 \
-v ${NGINX_CONFIG}:/etc/nginx/conf.d/default.conf \
-v ${CADDY_ACME}"${domain}":${CADDY_ACME}"${domain}" \
jonssonyan/trojan-panel-ui
```

参数解释：

- `--name trojan-panel-ui`：定义容器名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p 8888:80`：映射Trojan Panel UI端口
- `-v ${NGINX_CONFIG}:/etc/nginx/conf.d/default.conf`：映射Nginx 配置文件
- `-v ${CADDY_ACME}"${domain}":${CADDY_ACME}"${domain}"`：映射证书文件夹

## 安装Trojan-go

> Docker Hub：https://hub.docker.com/r/p4gefau1t/trojan-go

1. Pull the image

```shell
docker pull p4gefau1t/trojan-go
```

2. Start a container

```shell
docker run -d --name trojan-panel-trojanGO --restart=always \
--network=trojan-panel-network \
-p ${trojanGO_port}:${trojanGO_port} \
-v ${TROJANGO_CONFIG}:"/etc/trojan-go/config.json" \
-v ${CADDY_ACME}:${CADDY_ACME} \
p4gefau1t/trojan-go
```

参数解释：

- `--name trojan-panel-ui`：定义容器名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p ${trojanGO_port}:${trojanGO_port}`：映射Trojan-go端口
- `-v ${TROJANGO_CONFIG}:"/etc/trojan-go/config.json"`：映射Trojan-go配置文件
- `-v ${CADDY_ACME}:${CADDY_ACME}`：映射证书文件夹

## 安装Hysteria

> Docker Hub：https://hub.docker.com/r/tobyxdd/hysteria

1. Pull the image

```shell
docker pull tobyxdd/hysteria
```

2. Start a container

```shell
docker run -d --name trojan-panel-hysteria --restart=always \
--network=trojan-panel-network \
-p ${hysteria_port}:${hysteria_port}/udp \
-p 8801:8801 \
-v ${HYSTERIA_CONFIG}:/etc/hysteria.json \
-v ${CADDY_ACME}:${CADDY_ACME} \
tobyxdd/hysteria -c /etc/hysteria.json server
```

参数解释：

- `--name trojan-panel-ui`：定义容器名称
- `--restart always`：容器随着Docker启动而启动
- `--network=trojan-panel-network`：使用桥接网络
- `-p ${hysteria_port}:${hysteria_port}/udp`：映射Hysteria端口
- `-p 8801:8801`：映射Hysteria Prometheus 流量统计端口
- `-v ${HYSTERIA_CONFIG}:/etc/hysteria.json`：映射Hysteria文件
- `-v ${CADDY_ACME}:${CADDY_ACME}`：映射证书文件夹

## 总结

以下是所有容器运行的状态：

![](/docker-ps.png)
