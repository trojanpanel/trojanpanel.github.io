# 手动安装教程

## 准备

#### 安装顺序

Docker -> Caddy2 -> MariaDB -> Redis -> Trojan Panel Backend -> Trojan Panel Frontend -> Trojan Panel Core

#### 版本对应关系

| 名称                    | 版本          |
|-----------------------|-------------|
| Docker                | latest      |
| Nginx                 | 1.20-alpine |
| Caddy2                | 2.6.2       |
| MariaDB               | 10.7.3      |
| Redis                 | 6.2.7       |
| Trojan Panel Frontend | latest      |
| Trojan Panel Backend  | latest      |
| Trojan Panel Core     | latest      |

## 安装Docker

> Docker官方安装教程：https://docs.docker.com/engine/install/

## 安装Caddy2

> Docker Hub：https://hub.docker.com/_/caddy

1. Pull the image

    ```shell
    docker pull caddy:2.6.2
    ```

2. Start a container

    ```shell
    docker run -d --name trojan-panel-caddy --restart always \
    --network=host \
    -v "${CADDY_CONFIG}":"${CADDY_CONFIG}" \
    -v ${CERT_PATH}:"/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/" \
    -v ${WEB_PATH}:${WEB_PATH} \
    -v ${CADDY_LOG}:${CADDY_LOG} \
    caddy:2.6.2 caddy run --config ${CADDY_CONFIG}
    ```

参数解释：

- `--name trojan-panel-redis`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=host`：使用Host网络模式
- `-v "${CADDY_CONFIG}":"${CADDY_CONFIG}"`：映射Caddy配置文件
- `-v ${CERT_PATH}:"/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/"`：映射证书文件夹
- `-v ${WEB_PATH}:${WEB_PATH}`：映射伪装网站文件夹
- `-v ${CADDY_LOG}:${CADDY_LOG}`：日志文件夹
- `caddy run --config ${CADDY_CONFIG}`：指定配置文件运行

Caddy配置举例

1. acme自动申请和续签

```
{
    "admin":{
        "disabled":true
    },
    "logging":{
        "logs":{
            "default":{
                "writer":{
                    "output":"file",
                    "filename":"${CADDY_LOG}error.log"
                },
                "level":"ERROR"
            }
        }
    },
    "storage":{
        "module":"file_system",
        "root":"${CERT_PATH}"
    },
    "apps":{
        "http":{
            "http_port": ${caddy_port},
            "servers":{
                "srv0":{
                    "listen":[
                        ":${caddy_port}"
                    ],
                    "routes":[
                        {
                            "match":[
                                {
                                    "host":[
                                        "${domain}"
                                    ]
                                }
                            ],
                            "handle":[
                                {
                                    "handler":"static_response",
                                    "headers":{
                                        "Location":[
                                            "https://{http.request.host}:${caddy_remote_port}{http.request.uri}"
                                        ]
                                    },
                                    "status_code":301
                                }
                            ]
                        }
                    ]
                },
                "srv1":{
                    "listen":[
                        ":${caddy_remote_port}"
                    ],
                    "routes":[
                        {
                            "handle":[
                                {
                                    "handler":"subroute",
                                    "routes":[
                                        {
                                            "match":[
                                                {
                                                    "host":[
                                                        "${domain}"
                                                    ]
                                                }
                                            ],
                                            "handle":[
                                                {
                                                    "handler":"file_server",
                                                    "root":"${WEB_PATH}",
                                                    "index_names":[
                                                        "index.html",
                                                        "index.htm"
                                                    ]
                                                }
                                            ],
                                            "terminal":true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "tls_connection_policies":[
                        {
                            "match":{
                                "sni":[
                                    "${domain}"
                                ]
                            }
                        }
                    ],
                    "automatic_https":{
                        "disable":true
                    }
                }
            }
        },
        "tls":{
            "certificates":{
                "automate":[
                    "${domain}"
                ]
            },
            "automation":{
                "policies":[
                    {
                        "issuers":[
                            {
                                "module":"acme",
                                "email":""
                            }
                        ]
                    }
                ]
            }
        }
    }
}
```

参数解释：

- `${CADDY_LOG}`：日志文件夹
- `${CERT_PATH}`：证书文件夹
- `${caddy_port}`：Caddy端口
- `${domain}`：你的域名
- `${caddy_remote_port}`：Caddy转发的端口
- `${WEB_PATH}`：伪装网站文件夹

2. 手动设置自定义证书

```
{
    "admin":{
        "disabled":true
    },
    "logging":{
        "logs":{
            "default":{
                "writer":{
                    "output":"file",
                    "filename":"${CADDY_LOG}error.log"
                },
                "level":"ERROR"
            }
        }
    },
    "storage":{
        "module":"file_system",
        "root":"${CERT_PATH}"
    },
    "apps":{
        "http":{
            "http_port": ${caddy_port},
            "servers":{
                "srv0":{
                    "listen":[
                        ":${caddy_port}"
                    ],
                    "routes":[
                        {
                            "match":[
                                {
                                    "host":[
                                        "${domain}"
                                    ]
                                }
                            ],
                            "handle":[
                                {
                                    "handler":"static_response",
                                    "headers":{
                                        "Location":[
                                            "https://{http.request.host}:${caddy_remote_port}{http.request.uri}"
                                        ]
                                    },
                                    "status_code":301
                                }
                            ]
                        }
                    ]
                },
                "srv1":{
                    "listen":[
                        ":${caddy_remote_port}"
                    ],
                    "routes":[
                        {
                            "handle":[
                                {
                                    "handler":"subroute",
                                    "routes":[
                                        {
                                            "match":[
                                                {
                                                    "host":[
                                                        "${domain}"
                                                    ]
                                                }
                                            ],
                                            "handle":[
                                                {
                                                    "handler":"file_server",
                                                    "root":"${WEB_PATH}",
                                                    "index_names":[
                                                        "index.html",
                                                        "index.htm"
                                                    ]
                                                }
                                            ],
                                            "terminal":true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "tls_connection_policies":[
                        {
                            "match":{
                                "sni":[
                                    "${domain}"
                                ]
                            }
                        }
                    ],
                    "automatic_https":{
                        "disable":true
                    }
                }
            }
        },
        "tls":{
            "certificates":{
                "automate":[
                    "${domain}"
                ],
                "load_files":[
                    {
                        "certificate":"/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/${domain}.crt",
                        "key":"/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/${domain}.key"
                    }
                ]
            },
            "automation":{
                "policies":[
                    {
                        "issuers":[
                            {
                                "module":"acme",
                                "email":""
                            }
                        ]
                    }
                ]
            }
        }
    }
}
```

注意：需要将证书文件上传至证书文件夹：`/tpdata/cert/`，证书文件名称格式为`${domian}.crt`和`${domian}.key`。

参数解释：

- `${CADDY_LOG}`：日志文件夹
- `${CERT_PATH}`：证书文件夹
- `${caddy_port}`：Caddy端口
- `${domain}`：你的域名
- `${caddy_remote_port}`：Caddy转发的端口
- `${WEB_PATH}`：伪装网站文件夹

## 安装MariaDB

> Docker Hub：https://hub.docker.com/_/mariadb

1. Pull the image

    ```shell
    docker pull mariadb:10.7.3
    ```

2. Start a container

    ```shell
    docker run -d --name trojan-panel-mariadb --restart always \
    --network=host \
    -e MYSQL_DATABASE="trojan_panel_db" \
    -e MYSQL_ROOT_PASSWORD="${mariadb_pas}" \
    -e TZ=Asia/Shanghai \
    mariadb:10.7.3 \
    --port ${mariadb_port}
    ```

参数解释：

- `--name trojan-panel-mariadb`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=host`：使用Host网络模式
- `-e MYSQL_DATABASE="trojan_panel_db"`：容器启动时创建一个默认的`trojan_panel_db`库
- `-e MYSQL_ROOT_PASSWORD="${mariadb_pas}"`：设置MariaDB密码为`${mariadb_pas}`
- `-e TZ=Asia/Shanghai`：设置时区为上海
- `--port ${mariadb_port}`：自定义数据库端口（默认:9507）

## 安装Redis

> Docker Hub：https://hub.docker.com/_/redis

1. Pull the image

    ```shell
    docker pull redis:6.2.7
    ```

2. Start a container

    ```shell
    docker run -d --name trojan-panel-redis --restart always \
    --network=host \
    redis:6.2.7 \
    redis-server --requirepass "${redis_pass}" --port ${redis_port}
    ```

参数解释：

- `--name trojan-panel-redis`：定义容器的名称
- `--restart always`：容器随着Docker启动而启动
- `--network=host`：使用Host网络模式
- `redis-server --requirepass "${redis_pass}" --port ${redis_port}`：设置Redis密码为`${redis_pass}`
  设置Redis端口为`${redis_port}`（默认:6378）

## 安装Trojan Panel Backend

> Docker Hub：https://hub.docker.com/r/jonssonyan/trojan-panel

1. Pull the image

   ```shell
   docker pull jonssonyan/trojan-panel
   ```

2. Start a container

   ```shell
   docker run -d --name trojan-panel --restart always \
   --network=host \
   -v ${WEB_PATH}:/tpdata/trojan-panel/webfile/ \
   -v ${TROJAN_PANEL_LOGS}:/tpdata/trojan-panel/logs/ \
   -v ${TROJAN_PANEL_EXPORT}:/tpdata/trojan-panel/export/ \
   -v ${TROJAN_PANEL_TEMPLATE}:/tpdata/trojan-panel/template/ \
   -v /etc/localtime:/etc/localtime \
   -e GIN_MODE=release \
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
- `--network=host`：使用Host网络模式
- `-v ${WEB_PATH}:/tpdata/trojan-panel/webfile/`：映射伪装网站文件夹
- `-v ${TROJAN_PANEL_LOGS}:/tpdata/trojan-panel/logs/`：映射日志文件夹
- `-v ${TROJAN_PANEL_EXPORT}:/tpdata/trojan-panel/export/`：映射导出文件文件夹
- `-v ${TROJAN_PANEL_TEMPLATE}:/tpdata/trojan-panel/template/`：映射模板文件夹
- `-v /etc/localtime:/etc/localtime`：同步宿主机和容器的时区
- `-e GIN_MODE=release`：release模式启动
- `-e "mariadb_ip=${mariadb_ip}"`：`${mariadb_ip}`为 MariaDB 数据库的 IP 地址(默认:本机数据库)
- `-e "mariadb_port=${mariadb_port}"`：`${mariadb_port}`为 MariaDB 数据库的端口(默认:本机数据库端口)
- `-e "mariadb_user=${mariadb_user}"`：`${mariadb_user}`为 MariaDB 数据库的用户名(默认:root)
- `-e "mariadb_pas=${mariadb_pas}"`：`${mariadb_pas}`为 MariaDB 数据库密码(必填)
- `-e "redis_host=${redis_host}"`：`${redis_host}`为 Redis 的 IP 地址(默认:本机 Redis)
- `-e "redis_port=${redis_port}"`：`${redis_port}`为 Redis 的端口(默认:本机 Redis 端口)
- `-e "redis_pass=${redis_pass}"`：`${redis_pass}`为 Redis 的密码(必填)

## 安装Trojan Panel Frontend

> Docker Hub：https://hub.docker.com/r/jonssonyan/trojan-panel-ui

1. Pull the image

   ```shell
   docker pull jonssonyan/trojan-panel-ui
   ```

2. Start a container

   ```shell
   docker run -d --name trojan-panel-ui --restart always \
   --network=host \
   -v "${UI_NGINX_CONFIG}":"/etc/nginx/conf.d/default.conf" \
   -v ${CERT_PATH}:${CERT_PATH} \
   jonssonyan/trojan-panel-ui
   ```

参数解释：

- `--name trojan-panel-ui`：定义容器名称
- `--restart always`：容器随着Docker启动而启动
- `--network=host`：使用Host网络模式
- `-v "${NGINX_CONFIG}":"/etc/nginx/conf.d/default.conf"`：映射Nginx配置文件
- `-v ${CERT_PATH}:${CERT_PATH}`：映射证书文件夹

Nginx配置举例

1. 使用 https

```
server {
    listen       ${trojan_panel_ui_port} ssl;
    server_name  localhost;
    #强制ssl
    ssl on;
    ssl_certificate      ${CERT_PATH}${domain}.crt;
    ssl_certificate_key  ${CERT_PATH}${domain}.key;
    #缓存有效期
    ssl_session_timeout  5m;
    #安全链接可选的加密协议
    ssl_protocols  TLSv1.3;
    #加密算法
    ssl_ciphers  ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    #使用服务器端的首选算法
    ssl_prefer_server_ciphers  on;
    #access_log  /var/log/nginx/host.access.log  main;
    location / {
        root   ${TROJAN_PANEL_UI_DATA};
        index  index.html index.htm;
    }
    location /api {
        proxy_pass http://127.0.0.1:8081;
    }
    #error_page  404              /404.html;
    #497 http->https
    error_page  497               https://\$host:${trojan_panel_ui_port}\$request_uri;
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

参数解释：

- `${trojan_panel_ui_port}`：Trojan Panel 端口
- `${CERT_PATH}`：证书文件夹
- `${domain}`：你的域名
- `${TROJAN_PANEL_UI_DATA}`：前端编译文件所在的文件夹

2. 使用 http

```
server {
    listen       ${trojan_panel_ui_port};
    server_name  localhost;
    location / {
        root   ${TROJAN_PANEL_UI_DATA};
        index  index.html index.htm;
    }
    location /api {
        proxy_pass http://127.0.0.1:8081;
    }
    error_page  497               http://\$host:${trojan_panel_ui_port}\$request_uri;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

参数解释：

- `${trojan_panel_ui_port}`：Trojan Panel 前端端口
- `${TROJAN_PANEL_UI_DATA}`：前端编译文件所在的文件夹

## 安装Trojan Panel Core

> Docker Hub：https://hub.docker.com/r/jonssonyan/trojan-panel-core

1. Pull the image

   ```shell
   docker pull jonssonyan/trojan-panel-core
   ```

2. Start a container

   ```shell
   docker run -d --name trojan-panel-core --restart always \
   --network=host \
   -v ${TROJAN_PANEL_CORE_DATA}bin/xray/config:${TROJAN_PANEL_CORE_DATA}bin/xray/config \
   -v ${TROJAN_PANEL_CORE_DATA}bin/trojango/config:${TROJAN_PANEL_CORE_DATA}bin/trojango/config \
   -v ${TROJAN_PANEL_CORE_DATA}bin/hysteria/config:${TROJAN_PANEL_CORE_DATA}bin/hysteria/config \
   -v ${TROJAN_PANEL_CORE_DATA}bin/naiveproxy/config:${TROJAN_PANEL_CORE_DATA}bin/naiveproxy/config \
   -v ${TROJAN_PANEL_CORE_LOGS}:${TROJAN_PANEL_CORE_LOGS} \
   -v ${TROJAN_PANEL_CORE_SQLITE}:${TROJAN_PANEL_CORE_SQLITE} \
   -v ${CERT_PATH}:${CERT_PATH} \
   -v ${WEB_PATH}:${WEB_PATH} \
   -v /etc/localtime:/etc/localtime \
   -e GIN_MODE=release \
   -e "mariadb_ip=${mariadb_ip}" \
   -e "mariadb_port=${mariadb_port}" \
   -e "mariadb_user=${mariadb_user}" \
   -e "mariadb_pas=${mariadb_pas}" \
   -e "database=${database}" \
   -e "account-table=${account_table}" \
   -e "redis_host=${redis_host}" \
   -e "redis_port=${redis_port}" \
   -e "redis_pass=${redis_pass}" \
   -e "crt_path=${CERT_PATH}${domain}.crt" \
   -e "key_path=${CERT_PATH}${domain}.key" \
   -e "grpc_port=${grpc_port}" \
   jonssonyan/trojan-panel-core
   ```

参数解释：

- `--name trojan-panel-core`：定义容器名称
- `--restart always`：容器随着Docker启动而启动
- `--network=host`：使用Host网络模式
- `-v ${TROJAN_PANEL_CORE_DATA}bin/xray/config:${TROJAN_PANEL_CORE_DATA}bin/xray/config`：映射Xray配置文件夹
- `-v ${TROJAN_PANEL_CORE_DATA}bin/trojango/config:${TROJAN_PANEL_CORE_DATA}bin/trojango/config`：映射TrojanGo配置文件夹
- `-v ${TROJAN_PANEL_CORE_DATA}bin/hysteria/config:${TROJAN_PANEL_CORE_DATA}bin/hysteria/config`：映射Hysteria配置文件夹
- `-v ${TROJAN_PANEL_CORE_DATA}bin/naiveproxy/config:${TROJAN_PANEL_CORE_DATA}bin/naiveproxy/config`：映射NaiveProxy配置文件夹
- `-v ${TROJAN_PANEL_CORE_LOGS}:${TROJAN_PANEL_CORE_LOGS}`：映射日志文件夹
- `-v ${TROJAN_PANEL_CORE_SQLITE}:${TROJAN_PANEL_CORE_SQLITE}`：映射SQLite文件夹
- `-v ${CERT_PATH}:${CERT_PATH}`：映射证书文件夹
- `-v ${WEB_PATH}:${WEB_PATH}`：映射回落资源文件夹
- `-v /etc/localtime:/etc/localtime`：同步宿主机和容器的时区
- `-e GIN_MODE=release`：release模式启动
- `-e "mariadb_ip=${mariadb_ip}"`：`${mariadb_ip}`为 MariaDB 数据库的 IP 地址(默认:本机数据库)
- `-e "mariadb_port=${mariadb_port}"`：`${mariadb_port}`为 MariaDB 数据库的端口(默认:本机数据库端口)
- `-e "mariadb_user=${mariadb_user}"`：`${mariadb_user}`为 MariaDB 数据库的用户名(默认:root)
- `-e "mariadb_pas=${mariadb_pas}"`：`${mariadb_pas}`为 MariaDB 数据库密码(默认:123456)
- `-e "database=${database}"`：`${database}`为数据库名称
- `-e "account-table=${account_table}"`：`${account_table}`为用户表名称
- `-e "redis_host=${redis_host}"`：`${redis_host}`为 Redis 的 IP 地址(默认:本机 Redis)
- `-e "redis_port=${redis_port}"`：`${redis_port}`为 Redis 的端口(默认:本机 Redis 端口)
- `-e "redis_pass=${redis_pass}"`：`${redis_pass}`为 Redis 的密码(默认:123456)
- `-e "crt_path=${CERT_PATH}${domain}.crt"`：自定义证书.crt文件路径
- `-e "key_path=${CERT_PATH}${domain}.key"`：自定义证书.key文件路径
- `-e "grpc_port=${grpc_port}"`：自定义服务器之间的通讯端口
