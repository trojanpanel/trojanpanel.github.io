# 更新日志

## 2022.12.03 麒麟<Badge type="tip" text="v1.3.0" vertical="top" />

### Install Script

1. 支持自定义数据库和Redis端口
2. 修复已知Bug

### Trojan Panel

1. 支持重设用户下载和上传流量
2. 支持关闭流量排行功能
3. 新增naiveproxy节点类型
4. 订阅链接支持导出hysteria
5. 修复已知Bug

### Trojan Panel Core

1. 支持naiveproxy
2. 修复已知Bug

### 版本对应关系

| Trojan Panel | Trojan Panel Core | Xray   | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|--------------|-------------------|--------|-----------|----------|-------------------|
| v1.3.0       | v1.3.0            | v1.6.0 | v0.10.6   | v1.2.1   | v2.6.2            |

## 2022.11.08 饕餮<Badge type="tip" text="v1.2.0" vertical="top" />

### Install Script

1. 修改Docker网络模式为Host
2. 将单机版一键安装脚本从主脚本中分离
3. 支持一键安装Trojan Panel Core
4. 支持自定义Trojan Panel前端端口
5. 支持刷新Redis缓存功能
6. 修复已知Bug

### Trojan Panel

1. 支持Trojan Panel Core，支持远程自动化部署和管理节点
2. 支持Xray节点类型
3. 支持Clash订阅
4. 修改用户密码加密方式，账户更加安全
5. 修改日志输出级别
6. 优化UI界面
7. 修复已知Bug

### Trojan Panel Core

1. 支持Xray/Trojan-Go/Hysteria

### 版本对应关系

| Trojan Panel | Trojan Panel Core | Xray   | Trojan-Go | Hysteria |
|--------------|-------------------|--------|-----------|----------|
| v1.2.0       | v1.2.0            | v1.6.0 | v0.10.6   | v1.2.1   |

## 2022.07.21<Badge type="tip" text="v1.1.4" vertical="top" />

### Install Script

1. 增加一键卸载Caddy TLS，一键卸载MariaDB，一键卸载Redis
2. 修复已知Bug

### Trojan Panel

1. 修复已知Bug

## 2022.06.26<Badge type="tip" text="v1.1.3" vertical="top" />

### Install Script

1. 使用Docker Hub镜像：[Trojan Panel UI](https://hub.docker.com/r/jonssonyan/trojan-panel-ui)
   & [Trojan Panel](https://hub.docker.com/r/jonssonyan/trojan-panel)
2. 增加故障检测功能
3. 优化逻辑
4. 修复已知Bug

### Trojan Panel

1. 修复已知Bug

## 2022.06.15<Badge type="tip" text="v1.1.2" vertical="top" />

### Install Script

1. 修复已知Bug

### Trojan Panel

1. 支持arm64架构
2. 修复已知Bug

## 2022.05.17<Badge type="tip" text="v1.1.1" vertical="top" />

### Install Script

1. 修复已知Bug

### Trojan Panel

1. 添加Hysteria单客户端最大上传/下载速度
2. 修复已知Bug

## 2022.05.16 伏羲<Badge type="tip" text="v1.1.0" vertical="top" />

### Install Script

1. 增加Redis一键安装
2. 增加Hysteria节点一键安装
3. 修复已知Bug

### Trojan Panel

1. 引入Redis
2. 增加黑名单管理
3. 增加邮件管理
4. 增加流量排行
5. 增加Trojan-Go节点 Websocket+SS配置
6. 支持国际化
7. 支持设置系统字体大小
8. 支持全屏显示
9. 移除Trojan GFW，支持Hysteria
10. 优化Trojan-Go节点生成的URL
11. 修复已知Bug

::: danger 注意
目前支持的Hysteria处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.02.10 盘古<Badge type="tip" text="v1.0.0" vertical="top" />

Hello Trojan Panel