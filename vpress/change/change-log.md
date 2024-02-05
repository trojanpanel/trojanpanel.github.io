# 更新日志

## 2023.12.31 烛龙<Badge type="tip" text="v2.3" vertical="top" />

1. feat: 支持Hysteria2
2. fix: 修复SQL注入
3. fix: 将token有效期更改为12小时
4. 忘记密码功能会重设账户状态
5. 支持Xray Socks5
6. 禁止禁用系统管理员账户

#### 版本对应关系

| Install Script | Trojan Panel UI | Trojan Panel | Trojan Panel Core | Core SDK |  Xray  | Trojan Go | Hysteria | Hysteria2 | Caddy（NaiveProxy） |
|:--------------:|:---------------:|:------------:|:-----------------:|:--------:|:------:|:---------:|:--------:|:---------:|:-----------------:|
|     v2.3.2     |     v2.3.0      |    v2.3.1    |      v2.3.1       |  v0.0.1  | v1.8.4 |  v0.10.6  |  v1.3.4  |  v2.0.4   |      v2.6.4       |

## 2023.10.09 犼<Badge type="tip" text="v2.2" vertical="top" />

1. feat: 升级Xray至v1.8.4
2. fix: 将英语作为第一支持的的语言
3. fix: 修复修改用户名重复的Bug
4. pref: 优化反代软件和证书的安装逻辑

#### 版本对应关系

| Install Script | Trojan Panel UI | Trojan Panel | Trojan Panel Core | Core SDK |  Xray  | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|:--------------:|:---------------:|:------------:|:-----------------:|:--------:|:------:|:---------:|:--------:|:-----------------:|
|     v2.2.1     |     v2.1.6      |    v2.2.0    |      v2.2.1       |  v0.0.1  | v1.8.4 |  v0.10.6  |  v1.3.4  |      v2.6.4       |

## 2023.07.08 帝江<Badge type="tip" text="v2.1" vertical="top" />

1. 新增Nginx反代
2. 新增Xray reality 移除xtls
3. 新增修改用户名
4. 新增验证码登录，增强账户安全
5. 新增密码输入三次后账户锁定30分钟，增强账户安全
6. 新增Hysteria混淆密码
7. 新增vless reality随机生成publicKey/privateKey/shortIds/spiderX
8. 新增验证码登录开启和关闭选项
9. 新增批量创建账户和导出未使用账户
10. 新增账户最后一次登录时间
11. 新增Hysteria wechat-video
12. 新增前端单独部署、更新、卸载
13. 新增自定义前端指定后端的IP和端口
14. 新增自定义后端IP和端口
15. 新增自定义内核的IP和端口
16. 新增不设置证书选项
17. 新增将后端和内核配置文件夹挂载到宿主机
18. 新增前端版本号
19. 新增自定义后端的服务端口
20. 新增自定义内核的服务端口
21. 新增在线更换证书选项
22. 新增忘记密码选项
23. 新增节点优先级
24. 新增管理员复制指定账户订阅地址
25. 新增账户列表排序查询
26. 新增Hysteria支持SNI 允许不安全 快速打开
27. 修改证书文件目录至/tpdta/cert/
28. 修改伪装Web目录至/tpdate/web/
29. 修改用户和服务器导出csv格式修改为json，格式更加通用
30. 修改Xray和Clash规则模板长度调整至10240
31. 移除Xray trojan 流控选项
32. 修复Shadowsocks加密方式名称
33. 修复Xray Trojan传输层加密的问题
34. 修复Copy URL失效的问题
35. 修复后端和内核更新不用输入数据库和Redis等相关信息
36. 修复docker compose部署文件
37. 修复Clash模板字符串长度限制提升到102400
38. 修复自动化更新数据结构未变化的问题
39. 升级Xray至v1.8.0，升级Hysteria至v1.3.4
40. 组件化开发重构前端节点模块代码，对后端和内核代码进行优化，错误处理和必要的资源释放
41. 优化Clash订阅
42. 优化Xray分享链接
43. 优化服务器状态检测逻辑
44. 优化Xray reality serverNames编辑确认效果
45. 优化Caddy2故障检测
46. 将锁换成分布式锁，支持部署多个后端
47. 优化代码，并发处理，提升系统性能

#### 版本对应关系

| Install Script | Trojan Panel UI | Trojan Panel | Trojan Panel Core | Core SDK |  Xray  | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|:--------------:|:---------------:|:------------:|:-----------------:|:--------:|:------:|:---------:|:--------:|:-----------------:|
|     v2.1.8     |     v2.1.6      |    v2.1.5    |      v2.1.2       |  v0.0.1  | v1.8.0 |  v0.10.6  |  v1.3.4  |      v2.6.4       |

## 2023.03.31 穷奇<Badge type="tip" text="v2.0" vertical="top" />

1. 新增自动化无损升级
2. 新增Xray模板
3. 新增Clash规则模板
4. 新增节点详情
5. 新增服务器详情
6. 新增波斯语
7. 新增节点守护进程
8. 新增Shadowsocks协议
9. 新增流控设置
10. 新增Xray tcp+tls自定义回落
11. 新增版本查询功能
12. 新增自定义面板与节点的通信端口
13. 新增自定义Caddy2端口
14. 新增旧版本安装
15. 新增服务器选项框跳转到服务器列表
16. 新增SQLite作为持久化
17. 新增服务器管理TP Core版本显示
18. 新增用户导入和导出
19. 新增服务器导入和导出
20. 新增自定义系统名称
21. 新增自定义Logo
22. 设置Docker日志文件大小最大值为50m
23. 设置故障监测默认日志查询级别为error
24. 设置MariaDB数据库默认编码为utf8mb4
25. 设置Nginx支持TLSv1.3
26. 修复一些显示错误和控制台报错
27. 修复Clash订阅地址 Hysteria连接密码字段错误
28. 修复弹窗显示异常的Bug
29. 优化系统归档和更新
30. 优化节点状态展示
31. 优化服务器和节点的状态检测逻辑
32. 升级Xray至v1.7.5，升级Hysteria至v1.3.3，升级Caddy（NaiveProxy）至v2.6.4

#### 版本对应关系

| Trojan Panel | Trojan Panel Core |  Xray  | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|:------------:|:-----------------:|:------:|:---------:|:--------:|:-----------------:|
|    v2.0.5    |      v2.0.4       | v1.7.5 |  v0.10.6  |  v1.3.3  |      v2.6.4       |

## 2022.12.29 麒麟<Badge type="tip" text="v1.3" vertical="top" />

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

#### 版本对应关系

| Trojan Panel | Trojan Panel Core |  Xray  | Trojan Go | Hysteria | Caddy（NaiveProxy） |
|:------------:|:-----------------:|:------:|:---------:|:--------:|:-----------------:|
|    v1.3.1    |      v1.3.2       | v1.6.1 |  v0.10.6  |  v1.3.2  |      v2.6.2       |

::: danger 注意
目前支持的NaiveProxy处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.11.08 饕餮<Badge type="tip" text="v1.2" vertical="top" />

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

#### 版本对应关系

| Trojan Panel | Trojan Panel Core |  Xray  | Trojan-Go | Hysteria |
|:------------:|:-----------------:|:------:|:---------:|:--------:|
|    v1.2.0    |      v1.2.0       | v1.6.0 |  v0.10.6  |  v1.2.1  |

## 2022.05.16 伏羲<Badge type="tip" text="v1.1" vertical="top" />

1. 新增一键安装Redis
2. 新增一键安装Hysteria
3. 新增黑名单管理
4. 新增邮件管理
5. 新增流量排行
6. 新增国际化，中/英文切换
7. 新增系统字体大小设置
8. 新增全屏显示
9. 新增一键卸载Caddy TLS
10. 新增一键卸载MariaDB
11. 新增一键卸载Redis
12. 新增一键故障检测
13. 移除Trojan GFW，支持Hysteria
14. 优化Trojan-Go，新增Websocket+SS配置
15. 优化Trojan-Go节点生成的URL
16. 优化Hysteria，新增单客户端最大上传/下载速度
17. 引入Redis作为缓存
18. 支持arm64架构
19. 使用Docker Hub镜像：[trojan-panel-ui](https://hub.docker.com/r/jonssonyan/trojan-panel-ui)
    & [trojan-panel](https://hub.docker.com/r/jonssonyan/trojan-panel)

::: danger 注意
目前支持的Hysteria处于测试阶段，只支持用户认证不支持流量统计。
:::

## 2022.02.10 盘古<Badge type="tip" text="v1.0" vertical="top" />

Hello Trojan Panel