# 常见问题

## 搭建失败或系统报错的常见解决方案

有以下几个方案，可以按照顺序依次尝试，修复力度逐层递增。

1. 关闭防火墙：如果开放了对应的端口，但是访问不了域名或者控制面板，以下为常用关闭防火墙的命令，仅供参考。

    - CentOS：`systemctl disable firewalld`
    - Debian/Ubuntu：`sudo ufw disable`

2. 故障监测：运行一键安装脚本选择故障检测的选项，对出现运行异常的应用进行单独地卸载重装。
3. 查询系统报错日志：运行一键安装脚本选择日志查询选项，查询对应应用的日志信息，从而进行针对性修复。
4. 重启服务器。
5. 重装系统：有时候搭建失败可能是服务器系统不纯净导致，可以尝试DD系统。

# 忘记密码

如果忘记数据库或者Redis密码，则在Trojan Panel后端服务器上执行以下命令，即可打印配置信息

```shell
docker exec trojan-panel cat /tpdata/trojan-panel/confg/config.ini
```

如果忘记了管理面板的账号和密码，则在数据库服务器上执行以下命令，即可将超级管理员的账号和密码重设为sysadmin
123456，登录后立刻修改默认密码。

```shell
docker exec trojan-panel-mariadb mysql -h"${mariadb_ip}" -P"${mariadb_port}" -u"${mariadb_user}" -p"${mariadb_pas}" -e "update account set username = 'sysadmin',pass = 'tFjD2X1F6i9FfWp2GDU5Vbi1conuaChDKIYbw9zMFrqvMoSz',hash='4366294571b8b267d9cf15b56660f0a70659568a86fc270a52fdc9e5' where id = 1 limit 1" &>/dev/null
```

参数解释：

- `${mariadb_ip}`：数据库的IP地址
- `${mariadb_port}`：数据库的端口
- `${mariadb_user}`：数据库的用户名
- `${mariadb_pas}`：数据库的密码

## 证书申请失败

Caddy内置[acme](https://acme.sh)进行证书申请，使用Caddy自动申请/续签证书时，需要临时听在80端口，所以你的服务器需要开放80端口并且保证80端口没有被其他进程占用，
并且每天申请次数有限制，通常每天超过2次就有很大概率会申请失败，如果申请失败，可以尝试重启Caddy容器或者重启服务器，Caddy就会重新申请，但是不保证100%申请成功。
如果一直申请失败，可以等第二天重试或者在搭建之前提前准备好证书并上传至服务器，在安装的时候选择手动设置证书路径选项指定证书的绝对路径。