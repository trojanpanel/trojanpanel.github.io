# 性能调优

## 定时重启

每天凌晨4点重启服务

在命令行输入：

```bash
crontab -e
```

添加以下内容：

```bash
0 4 * * * /sbin/reboot
```

## 安装加速

[Linux-NetSpeed](https://github.com/Chikage0o0/Linux-NetSpeed)