# 性能测试

测试服务器配置：`CentOS 7 x86_64 1H1G`

```bash
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                1
On-line CPU(s) list:   0
Thread(s) per core:    1
Core(s) per socket:    1
Socket(s):             1
NUMA node(s):          1
Vendor ID:             AuthenticAMD
CPU family:            23
Model:                 49
Model name:            AMD EPYC 7K62 48-Core Processor
Stepping:              0
CPU MHz:               2595.124
BogoMIPS:              5190.24
Hypervisor vendor:     KVM
Virtualization type:   full
L1d cache:             32K
L1i cache:             32K
L2 cache:              4096K
L3 cache:              16384K
NUMA node0 CPU(s):     0
```

一共安装7个服务，运行一个星期，实际使用内存不到600M

![linux-memory](/linux-memory.png)

以下时所有服务的性能监控，内存消耗(MEM USAGE)
从小到大依次为：`trojan-panel-ui < trojan-panel-redis < trojan-panel-caddy < trojan-panel-hysteria < trojan-panel < trojan-panel-trojanGO < trojan-panel-mariadb`

![docker-memory](/docker-memory.png)