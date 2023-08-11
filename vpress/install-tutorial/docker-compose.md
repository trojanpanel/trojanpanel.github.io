# Docker Compose方式安装

## 准备

### 设置伪装网站

将静态网站文件上传至伪装网站文件夹：`/tpdata/web/`

### 新建Caddy配置文件

文件路径：`/tpdata/caddy/config.json`

Caddy配置举例

1. acme自动申请和续签

```
{
    "admin": {
        "disabled": true
    },
    "logging": {
        "logs": {
            "default": {
                "writer": {
                    "output": "file",
                    "filename": "/tpdata/caddy/logs/error.log"
                },
                "level": "ERROR"
            }
        }
    },
    "storage": {
        "module": "file_system",
        "root": "/tpdata/cert/"
    },
    "apps": {
        "http": {
            "http_port": 80,
            "servers": {
                "srv0": {
                    "listen": [
                        ":80"
                    ],
                    "routes": [
                        {
                            "match": [
                                {
                                    "host": [
                                        "${domain}"
                                    ]
                                }
                            ],
                            "handle": [
                                {
                                    "handler": "static_response",
                                    "headers": {
                                        "Location": [
                                            "https://{http.request.host}:8863{http.request.uri}"
                                        ]
                                    },
                                    "status_code": 301
                                }
                            ]
                        }
                    ]
                },
                "srv1": {
                    "listen": [
                        ":8863"
                    ],
                    "routes": [
                        {
                            "handle": [
                                {
                                    "handler": "subroute",
                                    "routes": [
                                        {
                                            "match": [
                                                {
                                                    "host": [
                                                        "${domain}"
                                                    ]
                                                }
                                            ],
                                            "handle": [
                                                {
                                                    "handler": "file_server",
                                                    "root": "/tpdata/web/",
                                                    "index_names": [
                                                        "index.html",
                                                        "index.htm"
                                                    ]
                                                }
                                            ],
                                            "terminal": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "tls_connection_policies": [
                        {
                            "match": {
                                "sni": [
                                    "${domain}"
                                ]
                            }
                        }
                    ],
                    "automatic_https": {
                        "disable": true
                    }
                }
            }
        },
        "tls": {
            "certificates": {
                "automate": [
                    "${domain}"
                ]
            },
            "automation": {
                "policies": [
                    {
                        "issuers": [
                            {
                                "module": "acme",
                                "email": ""
                            }
                        ]
                    }
                ]
            }
        }
    }
}
```

参数解释

- `${domain}`：你的域名

2. 手动设置自定义证书

```
{
    "admin": {
        "disabled": true
    },
    "logging": {
        "logs": {
            "default": {
                "writer": {
                    "output": "file",
                    "filename": "/tpdata/caddy/logs/error.log"
                },
                "level": "ERROR"
            }
        }
    },
    "storage": {
        "module": "file_system",
        "root": "/tpdata/cert/"
    },
    "apps": {
        "http": {
            "http_port": 80,
            "servers": {
                "srv0": {
                    "listen": [
                        ":80"
                    ],
                    "routes": [
                        {
                            "match": [
                                {
                                    "host": [
                                        "${domain}"
                                    ]
                                }
                            ],
                            "handle": [
                                {
                                    "handler": "static_response",
                                    "headers": {
                                        "Location": [
                                            "https://{http.request.host}:8863{http.request.uri}"
                                        ]
                                    },
                                    "status_code": 301
                                }
                            ]
                        }
                    ]
                },
                "srv1": {
                    "listen": [
                        ":8863"
                    ],
                    "routes": [
                        {
                            "handle": [
                                {
                                    "handler": "subroute",
                                    "routes": [
                                        {
                                            "match": [
                                                {
                                                    "host": [
                                                        "${domain}"
                                                    ]
                                                }
                                            ],
                                            "handle": [
                                                {
                                                    "handler": "file_server",
                                                    "root": "/tpdata/web/",
                                                    "index_names": [
                                                        "index.html",
                                                        "index.htm"
                                                    ]
                                                }
                                            ],
                                            "terminal": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "tls_connection_policies": [
                        {
                            "match": {
                                "sni": [
                                    "${domain}"
                                ]
                            }
                        }
                    ],
                    "automatic_https": {
                        "disable": true
                    }
                }
            }
        },
        "tls": {
            "certificates": {
                "automate": [
                    "${domain}"
                ],
                "load_files": [
                    {
                        "certificate": "/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/${domain}.crt",
                        "key": "/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/${domain}.key"
                    }
                ]
            },
            "automation": {
                "policies": [
                    {
                        "issuers": [
                            {
                                "module": "acme",
                                "email": ""
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

参数解释

- `${domain}`：你的域名

### 新建Nginx配置文件

文件路径：`/tpdata/trojan-panel-ui/nginx/default.conf`

1. 使用 https

```
server {
    listen       8888 ssl;
    server_name  localhost;
    #强制ssl
    ssl on;
    ssl_certificate      /tpdata/cert/${domain}.crt;
    ssl_certificate_key  /tpdata/cert/${domain}.key;
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
        root   /tpdata/trojan-panel-ui/;
        index  index.html index.htm;
    }
    location /api {
        proxy_pass http://127.0.0.1:8081;
    }
    #error_page  404              /404.html;
    #497 http->https
    error_page  497               https://\$host:8888\$request_uri;
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

参数解释

- `${domain}`：你的域名

2. 使用 http

```
server {
    listen       8888;
    server_name  localhost;
    location / {
        root   /tpdata/trojan-panel-ui/;
        index  index.html index.htm;
    }
    error_page  497               http://\$host:8888\$request_uri;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

## 配置文件

```yml
version: '3'

services:
  trojan-panel-caddy:
    image: caddy:2.6.2
    container_name: trojan-panel-caddy
    restart: always
    network_mode: host
    volumes:
      - "/tpdata/caddy/config.json:/tpdata/caddy/config.json"
      - "/tpdata/cert/:/tpdata/cert/certificates/acme-v02.api.letsencrypt.org-directory/${domain}/"
      - "/tpdata/web/:/tpdata/web/"
      - "/tpdata/caddy/logs/:/tpdata/caddy/logs/"
    command: caddy run --config /tpdata/caddy/config.json

  trojan-panel-mariadb:
    image: mariadb:10.7.3
    container_name: trojan-panel-mariadb
    restart: always
    network_mode: host
    environment:
      MYSQL_DATABASE: trojan_panel_db
      MYSQL_ROOT_PASSWORD: "${mariadb_pas}"
      TZ: Asia/Shanghai
    command: --port=9507

  trojan-panel-redis:
    image: redis:6.2.7
    container_name: trojan-panel-redis
    restart: always
    network_mode: host
    command: redis-server --requirepass ${redis_pass} --port 6378

  trojan-panel:
    image: jonssonyan/trojan-panel
    container_name: trojan-panel
    restart: always
    network_mode: host
    volumes:
      - "/tpdata/web/:/tpdata/trojan-panel/webfile/"
      - "/tpdata/trojan-panel/logs/:/tpdata/trojan-panel/logs/"
      - "/tpdata/trojan-panel/export:/tpdata/trojan-panel/export"
      - "/tpdata/trojan-panel/template:/tpdata/trojan-panel/template"
      - "/etc/localtime:/etc/localtime"
    environment:
      - "GIN_MODE=release"
      - "mariadb_ip=127.0.0.1"
      - "mariadb_port=9507"
      - "mariadb_user=root"
      - "mariadb_pas=${mariadb_pas}"
      - "redis_host=127.0.0.1"
      - "redis_port=6378"
      - "redis_pass=${redis_pass}"
      - "server_port=8081"

  trojan-panel-ui:
    image: jonssonyan/trojan-panel-ui
    container_name: trojan-panel-ui
    restart: always
    network_mode: host
    volumes:
      - "/tpdata/trojan-panel-ui/nginx/default.conf:/etc/nginx/conf.d/default.conf"
      - "/tpdata/cert/:/tpdata/cert/"

  trojan-panel-core:
    image: jonssonyan/trojan-panel-core
    container_name: trojan-panel-core
    restart: always
    network_mode: host
    volumes:
      - "/tpdata/trojan-panel-core/bin/xray/config:/tpdata/trojan-panel-core/bin/xray/config"
      - "/tpdata/trojan-panel-core/bin/trojango/config:/tpdata/trojan-panel-core/bin/trojango/config"
      - "/tpdata/trojan-panel-core/bin/hysteria/config:/tpdata/trojan-panel-core/bin/hysteria/config"
      - "/tpdata/trojan-panel-core/bin/naiveproxy/config:/tpdata/trojan-panel-core/bin/naiveproxy/config"
      - "/tpdata/trojan-panel-core/logs/:/tpdata/trojan-panel-core/logs/"
      - "/tpdata/trojan-panel-core/config/sqlite/:/tpdata/trojan-panel-core/config/sqlite/"
      - "/tpdata/cert/:/tpdata/cert/"
      - "/tpdata/web/:/tpdata/web/"
      - "/etc/localtime:/etc/localtime"
    environment:
      - "GIN_MODE=release"
      - "mariadb_ip=127.0.0.1"
      - "mariadb_port=9507"
      - "mariadb_user=root"
      - "mariadb_pas=${mariadb_pas}"
      - "database=trojan_panel_db"
      - "account-table=account"
      - "redis_host=127.0.0.1"
      - "redis_port=6378"
      - "redis_pass=${redis_pass}"
      - "crt_path=/tpdata/cert/${domain}.crt"
      - "key_path=/tpdata/cert/${domain}.key"
      - "grpc_port=8100"
      - "server_port=8082"
```

参数解释：

- `${mariadb_pas}`：MariaDB 数据库密码
- `${redis_pass}`：Redis 的密码
- `${domain}`：你的域名

## 部署

在Docker Compose配置文件同一级目录下执行

```shell
docker compose up
```