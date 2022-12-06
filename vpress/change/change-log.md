# 更新日志

## 2022.12.03 麒麟<Badge type="tip" text="v1.3.0" vertical="top" />

1. 增加NaiveProxy节点类型
2. 增加自定义数据库和Redis端口
3. 增加重设用户下载和上传流量
4. 增加关闭流量排行
5. 优化订阅链接，支持导出hysteria

### 版本对应关系

| Trojan Panel | Trojan Panel Core | Xray   | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|--------------|-------------------|--------|-----------|----------|-------------------|
| v1.3.0       | v1.3.0            | v1.6.0 | v0.10.6   | v1.2.1   | v2.6.2            |

::: danger 注意 
目前支持的NaiveProxy处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.11.08 饕餮<Badge type="tip" text="v1.2.0" vertical="top" />

1. 增加一键安装Trojan Panel Core，远程自动化部署和管理节点
2. 增加自定义Trojan Panel前端端口
3. 增加一键刷新Redis缓存
4. 增加Xray节点类型
5. 增加Clash订阅
6. 修改用户密码加密方式
7. 修改Docker网络模式为Host
8. 修改日志输出级别
9. 将单机版一键安装脚本从主脚本中分离
10. 优化UI界面

### 版本对应关系

| Trojan Panel | Trojan Panel Core | Xray   | Trojan-Go | Hysteria |
|--------------|-------------------|--------|-----------|----------|
| v1.2.0       | v1.2.0            | v1.6.0 | v0.10.6   | v1.2.1   |

## 2022.07.21<Badge type="tip" text="v1.1.4" vertical="top" />

1. 增加一键卸载Caddy TLS
2. 增加一键卸载MariaDB
3. 增加一键卸载Redis

## 2022.06.26<Badge type="tip" text="v1.1.3" vertical="top" />

1. 使用Docker Hub镜像：[Trojan Panel UI](https://hub.docker.com/r/jonssonyan/trojan-panel-ui)
   & [Trojan Panel](https://hub.docker.com/r/jonssonyan/trojan-panel)
2. 增加一键故障检测

## 2022.06.15<Badge type="tip" text="v1.1.2" vertical="top" />

1. 支持arm64架构

## 2022.05.17<Badge type="tip" text="v1.1.1" vertical="top" />

1. 优化Hysteria，增加单客户端最大上传/下载速度

## 2022.05.16 伏羲<Badge type="tip" text="v1.1.0" vertical="top" />

1. 增加一键安装Redis
2. 增加一键安装Hysteria
3. 增加黑名单管理
4. 增加邮件管理
5. 增加流量排行
6. 增加国际化，中/英文切换
7. 增加系统字体大小设置
8. 增加全屏显示
9. 移除Trojan GFW，支持Hysteria
10. 优化Trojan-Go，增加Websocket+SS配置
11. 优化Trojan-Go节点生成的URL
12. 引入Redis作为缓存

::: danger 注意 
目前支持的Hysteria处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.02.10 盘古<Badge type="tip" text="v1.0.0" vertical="top" />

Hello Trojan Panel