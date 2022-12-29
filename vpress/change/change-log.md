# 更新日志

## 2022.12.03 麒麟<Badge type="tip" text="v1.3" vertical="top" />

1. 新增NaiveProxy节点类型
2. 新增自定义数据库和Redis端口
3. 新增重设用户下载和上传流量
4. 新增关闭流量排行
5. 新增服务器管理
6. 新增韩语，更彻底的国际化
7. 新增服务器信息显示
8. 新增一键安装NaiveProxy单机版
9. 新增Trojan Panel前端是否开启https选项
10. 新增实时修改Trojan Panel前端端口
11. 修复Trojan-Go复制URL的Bug
12. 修复Xray tcp+tls 回落地址无法访问
13. 修复Hysteria单客户端最大上传/下载速度上限为9999999999
14. 优化订阅链接，支持导出Hysteria
15. 升级Xray至v1.6.1，升级Hysteria至v1.3.2
16. 使用Go 1.19.4编译
17. 将一键安装脚本中Caddy升级至v2.6.2
18. 优化一键安装脚本故障监测
19. 新增一键安装脚本自动化升级
20. 移除一键安装脚本本地IP检测

### 版本对应关系

| Trojan Panel | Trojan Panel Core |  Xray  | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|:------------:|:-----------------:|:------:|:---------:|:--------:|:-----------------:|
|    v1.3.1    |      v1.3.2       | v1.6.1 |  v0.10.6  |  v1.3.2  |      v2.6.2       |

::: danger 注意 
目前支持的NaiveProxy处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.11.08 饕餮<Badge type="tip" text="v1.2.0" vertical="top" />

1. 新增一键安装Trojan Panel Core，远程自动化部署和管理节点
2. 新增自定义Trojan Panel前端端口
3. 新增一键刷新Redis缓存
4. 新增Xray节点类型
5. 新增Clash订阅
6. 修改用户密码加密方式
7. 修改Docker网络模式为Host
8. 修改日志输出级别
9. 将单机版一键安装脚本从主脚本中分离
10. 优化UI界面

### 版本对应关系

| Trojan Panel | Trojan Panel Core |  Xray  | Trojan-Go | Hysteria |
|:------------:|:-----------------:|:------:|:---------:|:--------:|
|    v1.2.0    |      v1.2.0       | v1.6.0 |  v0.10.6  |  v1.2.1  |

## 2022.07.21<Badge type="tip" text="v1.1.4" vertical="top" />

1. 新增一键卸载Caddy TLS
2. 新增一键卸载MariaDB
3. 新增一键卸载Redis

## 2022.06.26<Badge type="tip" text="v1.1.3" vertical="top" />

1. 使用Docker Hub镜像：[Trojan Panel UI](https://hub.docker.com/r/jonssonyan/trojan-panel-ui)
   & [Trojan Panel](https://hub.docker.com/r/jonssonyan/trojan-panel)
2. 新增一键故障检测

## 2022.06.15<Badge type="tip" text="v1.1.2" vertical="top" />

1. 支持arm64架构

## 2022.05.17<Badge type="tip" text="v1.1.1" vertical="top" />

1. 优化Hysteria，新增单客户端最大上传/下载速度

## 2022.05.16 伏羲<Badge type="tip" text="v1.1.0" vertical="top" />

1. 新增一键安装Redis
2. 新增一键安装Hysteria
3. 新增黑名单管理
4. 新增邮件管理
5. 新增流量排行
6. 新增国际化，中/英文切换
7. 新增系统字体大小设置
8. 新增全屏显示
9. 移除Trojan GFW，支持Hysteria
10. 优化Trojan-Go，新增Websocket+SS配置
11. 优化Trojan-Go节点生成的URL
12. 引入Redis作为缓存

::: danger 注意 
目前支持的Hysteria处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.02.10 盘古<Badge type="tip" text="v1.0.0" vertical="top" />

Hello Trojan Panel