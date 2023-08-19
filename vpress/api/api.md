# API文档

## 开发前必读

1. 接口认证和鉴权

   除了开放接口，其余接口必须设置请求头`Authorization`用于认证和鉴权
   `Authorization`值格式为`Bearer ${Token}`
   `${Token}`可通过登录接口（`/api/auth/login`）获得

2. 通用返回对象

   返回示例:

   ```json
   {
     "code": 20000,
     "type": "success",
     "message": "",
     "data": {}
   }
   ```

   参数说明:

| 参数   | 必须  | 说明                                                                 |
|------|-----|--------------------------------------------------------------------|
| code | 是   | 状态码 20000/成功 50000/系统错误 50014/登录过期 50008/认证失败 50401/未认证 50403/暂无权限 |
| type | 是   | 类型  success/成功 error/错误 warning/警告                                 |
| data | 是   | 返回值                                                                |

## 开放接口

### 验证码

接口地址: `/api/auth/generateCaptcha`

请求方式: `GET`

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "captchaId": "VeC7Raoxo33hQTrnJT8s",
    "captchaImg": "data:image/png;base64,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"
  }
}
```

参数说明:

| 参数         | 必须  | 说明    |
|------------|-----|-------|
| captchaId  | 是   | 验证码id |
| captchaImg | 是   | 验证码图片 |

### 登录

接口地址: `/api/auth/login`

请求方式: `POST`

请求示例:

```json
{
  "username": "sysadmin",
  "pass": "123456",
  "captchaId": "y1mAtmYe4fErHN6vcYvo",
  "captchaCode": "25"
}
```

参数说明:

| 参数          | 必须  | 说明    |
|-------------|-----|-------|
| username    | 是   | 登录用户名 |
| pass        | 是   | 登录密码  |
| captchaId   | 否   | 验证码id |
| captchaCode | 否   | 验证码值  |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50Vm8iOnsiaWQiOjEsInF1b3RhIjowLCJkb3dubG9hZCI6MCwidXBsb2FkIjowLCJ1c2VybmFtZSI6InN5c2FkbWluIiwiZW1haWwiOiIiLCJyb2xlSWQiOjEsImRlbGV0ZWQiOjAsInByZXNldEV4cGlyZSI6MCwicHJlc2V0UXVvdGEiOjAsImxhc3RMb2dpblRpbWUiOjAsImV4cGlyZVRpbWUiOjAsImNyZWF0ZVRpbWUiOiIwMDAxLTAxLTAxVDAwOjAwOjAwWiIsInJvbGVzIjpbInN5c2FkbWluIiwiYWRtaW4iLCJ1c2VyIl19LCJleHAiOjE2OTIzODM4MzQsImlzcyI6InRyb2phbi1wYW5lbCJ9.ymvQ_VPsCvxjNpQUPTZ3fjWTZJk-URujCt3vSI-bnw8"
  }
}
```

参数说明:

| 参数    | 必须  | 说明      |
|-------|-----|---------|
| token | 是   | 授权Token |

### 注册

接口地址: `/api/auth/register`

请求方式: `POST`

请求示例:

```json
{
  "username": "123456",
  "pass": "123456",
  "captchaId": "BqEEo9jEdZrmfzz8K7R9",
  "captchaCode": "9"
}
```

参数说明:

| 参数          | 必须  | 说明    |
|-------------|-----|-------|
| username    | 是   | 登录用户名 |
| pass        | 是   | 登录密码  |
| captchaId   | 否   | 验证码id |
| captchaCode | 否   | 验证码值  |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

### 系统默认设置

接口地址: `/api/auth/setting`

请求方式: `GET`

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "registerEnable": 1,
    "registerQuota": 0,
    "registerExpireDays": 0,
    "trafficRankEnable": 1,
    "captchaEnable": 1,
    "emailEnable": 0,
    "systemName": "Trojan Panel"
  }
}
```

参数说明:

| 参数                 | 必须  | 说明               |
|--------------------|-----|------------------|
| registerEnable     | 是   | 是否开放注册           |
| registerQuota      | 是   | 注册用户默认配额 单位/MB   |
| registerExpireDays | 是   | 注册用户过期天数 单位/天    |
| captchaEnable      | 是   | 是否开启验证码登录        |
| emailEnable        | 是   | 是否开启邮箱功能 0/否 1/是 |
| systemName         | 是   | 系统名称             |

### 订阅

接口地址: `/api/subscribe/:token`

请求方式: `GET`

请求示例:

```
/api/auth/subscribe/NUNjOWtCZHhwWGpUYXZKSjRvNF9JTFBMU3VZWmphOTB4MEpmZWVicGt1UFBHZmRT
```

参数说明:

| 参数    | 必须  | 说明    |
|-------|-----|-------|
| token | 是   | Token |

返回示例:

参数说明:

### logo

接口地址: `/api/image/logo`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 首页

### 仪表板

接口地址: `/api/dashboard/panelGroup`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 流量排行榜

接口地址: `/api/dashboard/trafficRank`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 账户

### 注销

接口地址: `/api/account/logout`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 查询单个账户

接口地址: `/api/account/selectAccountById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 创建账户

接口地址: `/api/account/createAccount`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 获取当前账户信息

接口地址: `/api/account/getAccountInfo`

请求方式: `GET`

请求示例:

```json

```

参数说明:

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "id": 1,
    "username": "sysadmin",
    "roles": [
      "sysadmin",
      "admin",
      "user"
    ]
  }
}
```

参数说明:

| 参数       | 必须  | 说明    |
|----------|-----|-------|
| id       | 是   | 主键    |
| username | 是   | 登录用户名 |
| roles    | 是   | 角色    |

### 分页查询账户

接口地址: `/api/account/selectAccountPage`

请求方式: `GET`

请求示例:

```
/api/account/selectAccountPage?pageNum=1&pageSize=20&username=admin&deleted=0&orderFields=role_id,create_time&orderBy=desc&lastLoginTime=1
```

参数说明:

| 参数            | 必须  | 说明                                                                                                |
|---------------|-----|---------------------------------------------------------------------------------------------------|
| pageNum       | 是   | 页号                                                                                                |
| pageSize      | 是   | 页大小                                                                                               |
| username      | 否   | 登录用户名                                                                                             |
| deleted       | 否   | 是否禁用 0/正常 1/禁用                                                                                    |
| orderFields   | 否   | 排序字段 quota/总流量 role_id/角色 last_login_time/最后一次登录时间 expire_time/到期时间 deleted/是否禁用 create_time/创建时间 |
| orderBy       | 否   | 排序方式 asc/正序 desc/倒序                                                                               |
| lastLoginTime | 否   | 是否使用过 0/未使用过 1/使用过                                                                                |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "pageNum": 1,
    "pageSize": 20,
    "total": 1,
    "accounts": [
      {
        "id": 1,
        "quota": -1,
        "download": 0,
        "upload": 0,
        "username": "sysadmin",
        "email": "",
        "roleId": 1,
        "deleted": 0,
        "presetExpire": 0,
        "presetQuota": 0,
        "lastLoginTime": 1692430857369,
        "expireTime": 4078656000000,
        "createTime": "2022-04-01T00:00:00+08:00"
      }
    ]
  }
}
```

参数说明:

| 参数            | 必须  | 说明                  |
|---------------|-----|---------------------|
| pageNum       | 是   | 页号                  |
| pageSize      | 是   | 页大小                 |
| total         | 是   | 总数                  |
| accounts      | 否   | 账户                  |
| id            | 否   | 主键                  |
| quota         | 否   | 配额 单位/byte          |
| download      | 否   | 下载 单位/byte          |
| upload        | 否   | 上传 单位/byte          |
| username      | 否   | 登录用户名               |
| email         | 否   | 邮箱                  |
| roleId        | 否   | 角色id 1/系统管理员 3/普通用户 |
| deleted       | 否   | 是否禁用 0/正常 1/禁用      |
| presetExpire  | 否   | 预设过期时长 单位/天         |
| presetQuota   | 否   | 预设配额 单位/byte        |
| lastLoginTime | 否   | 最后一次登录时间            |
| expireTime    | 否   | 过期时间                |
| createTime    | 否   | 创建时间                |

### 通过id删除账户

接口地址: `/api/account/deleteAccountById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 修改密码

接口地址: `/api/account/updateAccountPass`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 修改用户名或者邮箱

接口地址: `/api/account/updateAccountProperty`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 修改账户

接口地址: `/api/account/updateAccountById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 获取Clash订阅地址

接口地址: `/api/account/clashSubscribe`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 获取指定人的Clash订阅地址

接口地址: `/api/account/clashSubscribeForSb`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 重设下载和上传流量

接口地址: `/api/account/resetAccountDownloadAndUpload`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 导出账户

接口地址: `/api/account/exportAccount`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 导入账户

接口地址: `/api/account/importAccount`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 批量生成账户

接口地址: `/api/account/createAccountBatch`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 导出未使用的账户

接口地址: `/api/account/exportAccountUnused`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 角色

### 查询角色列表

接口地址: `/api/role/selectRoleList`

请求方式: `GET`

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": [
    {
      "id": 1,
      "name": "sysadmin",
      "desc": "System Admin"
    },
    {
      "id": 2,
      "name": "admin",
      "desc": "Admin"
    },
    {
      "id": 3,
      "name": "user",
      "desc": "User"
    }
  ]
}
```

参数说明:

| 参数   | 必须  | 说明  |
|------|-----|-----|
| id   | 是   | 主键  |
| name | 是   | 名称  |
| desc | 是   | 描述  |

## 服务器

### 根据id查询服务器

接口地址: `/api/nodeServer/selectNodeServerById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 创建服务器

接口地址: `/api/nodeServer/createNodeServer`

请求方式: `POST`

请求示例:

```json
{
  "ip": "1.cybevo.cn",
  "name": "测试服务器",
  "grpcPort": 8100
}
```

参数说明:

| 参数       | 必须  | 说明    |
|----------|-----|-------|
| ip       | 是   | 服务器IP |
| name     | 是   | 服务器名称 |
| grpcPort | 是   | API端口 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

### 分页查询服务器

接口地址: `/api/nodeServer/selectNodeServerPage`

请求方式: `GET`

请求示例:

```
/api/nodeServer/selectNodeServerPage?pageNum=1&pageSize=20&ip=trojanpanel.github.io&name=测试服务器
```

参数说明:

| 参数       | 必须  | 说明    |
|----------|-----|-------|
| pageNum  | 是   | 页号    |
| pageSize | 是   | 页大小   |
| ip       | 否   | 服务器IP |
| name     | 否   | 服务器名称 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "nodeServers": [
      {
        "id": 1,
        "name": "测试服务器",
        "ip": "1.cybevo.cn",
        "grpcPort": 8100,
        "createTime": "2023-08-19T01:24:22+08:00",
        "status": 1,
        "trojanPanelCoreVersion": "v2.1.2"
      }
    ],
    "pageNum": 1,
    "pageSize": 20,
    "total": 1
  }
}
```

参数说明:

| 参数                     | 必须  | 说明                   |
|------------------------|-----|----------------------|
| nodeServers            | 否   | 服务器对象                |
| id                     | 否   | 主键                   |
| name                   | 否   | 服务器名称                |
| ip                     | 否   | 服务器名称                |
| grpcPort               | 否   | API端口                |
| createTime             | 否   | 创建时间                 |
| status                 | 否   | 状态 0/异常 1/正常         |
| trojanPanelCoreVersion | 否   | Trojan Panel Core 版本 |
| pageNum                | 是   | 页号                   |
| pageSize               | 是   | 页大小                  |
| total                  | 是   | 总数                   |

### 删除服务器

接口地址: `/api/nodeServer/deleteNodeServerById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 更新服务器

接口地址: `/api/nodeServer/updateNodeServerById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 更新服务器列表

接口地址: `/api/nodeServer/selectNodeServerList`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 查询服务器状态

接口地址: `/api/nodeServer/nodeServerState`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 导出服务器

接口地址: `/api/nodeServer/exportNodeServer`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 导入服务器

接口地址: `/api/nodeServer/importNodeServer`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 节点

### 根据id查询节点

接口地址: `/api/node/selectNodeById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 查询节点连接信息

接口地址: `/api/node/selectNodeInfo`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 创建节点

接口地址: `/api/node/createNode`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 分页查询节点

接口地址: `/api/node/selectNodePage`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 删除节点

接口地址: `/api/node/deleteNodeById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 更新节点

接口地址: `/api/node/updateNodeById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 获取节点二维码

接口地址: `/api/node/nodeQRCode`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 复制URL

接口地址: `/api/node/nodeURL`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 节点部分属性的默认值

接口地址: `/api/node/nodeDefault`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 节点类型

### 查询节点类型列表

接口地址: `/api/nodeType/selectNodeTypeList`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 系统设置

### 查询系统设置

接口地址: `/api/system/selectSystemByName`

请求方式: `GET`

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "id": 1,
    "registerEnable": 1,
    "registerQuota": 1024,
    "registerExpireDays": 1,
    "resetDownloadAndUploadMonth": 0,
    "trafficRankEnable": 1,
    "captchaEnable": 1,
    "expireWarnEnable": 0,
    "expireWarnDay": 0,
    "emailEnable": 0,
    "emailHost": "",
    "emailPort": 0,
    "emailUsername": "",
    "emailPassword": "",
    "systemName": "Trojan Panel",
    "clashRule": "rules:\n  - RULE-SET,applications,DIRECT\n  - DOMAIN,clash.razord.top,DIRECT\n  - DOMAIN,yacd.haishan.me,DIRECT\n  - RULE-SET,private,DIRECT\n  - RULE-SET,reject,REJECT\n  - RULE-SET,icloud,DIRECT\n  - RULE-SET,apple,DIRECT\n  - RULE-SET,google,DIRECT\n  - RULE-SET,proxy,PROXY\n  - RULE-SET,direct,DIRECT\n  - RULE-SET,lancidr,DIRECT\n  - RULE-SET,cncidr,DIRECT\n  - RULE-SET,telegramcidr,PROXY\n  - GEOIP,,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,PROXY\n\nrule-providers:\n  reject:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt\"\n    path: ./ruleset/reject.yaml\n    interval: 86400\n\n  icloud:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt\"\n    path: ./ruleset/icloud.yaml\n    interval: 86400\n\n  apple:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt\"\n    path: ./ruleset/apple.yaml\n    interval: 86400\n\n  google:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt\"\n    path: ./ruleset/google.yaml\n    interval: 86400\n\n  proxy:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt\"\n    path: ./ruleset/proxy.yaml\n    interval: 86400\n\n  direct:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt\"\n    path: ./ruleset/direct.yaml\n    interval: 86400\n\n  private:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt\"\n    path: ./ruleset/private.yaml\n    interval: 86400\n\n  gfw:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt\"\n    path: ./ruleset/gfw.yaml\n    interval: 86400\n\n  greatfire:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt\"\n    path: ./ruleset/greatfire.yaml\n    interval: 86400\n\n  tld-not-cn:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt\"\n    path: ./ruleset/tld-not-cn.yaml\n    interval: 86400\n\n  telegramcidr:\n    type: http\n    behavior: ipcidr\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt\"\n    path: ./ruleset/telegramcidr.yaml\n    interval: 86400\n\n  cncidr:\n    type: http\n    behavior: ipcidr\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt\"\n    path: ./ruleset/cncidr.yaml\n    interval: 86400\n\n  lancidr:\n    type: http\n    behavior: ipcidr\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt\"\n    path: ./ruleset/lancidr.yaml\n    interval: 86400\n\n  applications:\n    type: http\n    behavior: classical\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt\"\n    path: ./ruleset/applications.yaml\n    interval: 86400",
    "xrayTemplate": "{\n    \"log\": {\n        \"loglevel\": \"warning\"\n    },\n    \"api\": {\n        \"tag\": \"api\",\n        \"services\": [\n            \"HandlerService\",\n            \"LoggerService\",\n            \"StatsService\"\n        ]\n    },\n    \"dns\": null,\n    \"routing\": {\n        \"rules\": [\n            {\n                \"inboundTag\": [\n                    \"api\"\n                ],\n                \"outboundTag\": \"api\",\n                \"type\": \"field\"\n            }\n        ]\n    },\n    \"policy\": {\n        \"levels\": {\n            \"0\": {\n                \"statsUserUplink\": true,\n                \"statsUserDownlink\": true\n            }\n        },\n        \"system\": {\n            \"statsInboundUplink\": true,\n            \"statsInboundDownlink\": true\n        }\n    },\n    \"inbounds\": [],\n    \"outbounds\": [\n        {\n            \"protocol\": \"freedom\"\n        }\n    ],\n    \"transport\": null,\n    \"stats\": {},\n    \"reverse\": null,\n    \"fakeDns\": null\n}"
  }
}
```

参数说明:

| 参数                          | 必须  | 说明                |
|-----------------------------|-----|-------------------|
| id                          | 是   | 主键                |
| registerEnable              | 是   | 是否开放注册 0/否 1/是    |
| registerQuota               | 是   | 注册用户默认配额 单位/MB    |
| registerExpireDays          | 是   | 注册用户过期天数 单位/天     |
| resetDownloadAndUploadMonth | 是   | 是否每月重设下载和上传流量     |
| trafficRankEnable           | 是   | 是否开启流量排行 0/否 1/是  |
| captchaEnable               | 是   | 是否开启验证码登录 0/否 1/是 |
| expireWarnEnable            | 是   | 是否开启到期警告 0/否 1/是  |
| expireWarnDay               | 是   | 到期警告 单位/天         |
| emailEnable                 | 是   | 是否开启邮箱功能 0/否 1/是  |
| emailHost                   | 是   | 系统邮箱设置 host       |
| emailPort                   | 是   | 系统邮箱设置 port       |
| emailUsername               | 是   | 系统邮箱设置 username   |
| emailPassword               | 是   | 系统邮箱设置 password   |
| systemName                  | 是   | 系统名称              |
| clashRule                   | 是   | Clash模板           |
| xrayTemplate                | 是   | Xray模板            |

### 更新系统配置

接口地址: `/api/system/updateSystemById`

请求方式: `POST`

请求示例:

```json
{
  "id": 1,
  "registerEnable": 0,
  "registerQuota": 1024,
  "registerExpireDays": 1,
  "resetDownloadAndUploadMonth": 0,
  "trafficRankEnable": 1,
  "captchaEnable": 1,
  "expireWarnEnable": 0,
  "expireWarnDay": 0,
  "emailEnable": 0,
  "emailHost": "",
  "emailPort": 0,
  "emailUsername": "",
  "emailPassword": "",
  "systemName": "Trojan Panel",
  "clashRule": "rules:\n  - RULE-SET,applications,DIRECT\n  - DOMAIN,clash.razord.top,DIRECT\n  - DOMAIN,yacd.haishan.me,DIRECT\n  - RULE-SET,private,DIRECT\n  - RULE-SET,reject,REJECT\n  - RULE-SET,icloud,DIRECT\n  - RULE-SET,apple,DIRECT\n  - RULE-SET,google,DIRECT\n  - RULE-SET,proxy,PROXY\n  - RULE-SET,direct,DIRECT\n  - RULE-SET,lancidr,DIRECT\n  - RULE-SET,cncidr,DIRECT\n  - RULE-SET,telegramcidr,PROXY\n  - GEOIP,,DIRECT\n  - GEOIP,CN,DIRECT\n  - MATCH,PROXY\n\nrule-providers:\n  reject:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt\"\n    path: ./ruleset/reject.yaml\n    interval: 86400\n\n  icloud:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt\"\n    path: ./ruleset/icloud.yaml\n    interval: 86400\n\n  apple:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt\"\n    path: ./ruleset/apple.yaml\n    interval: 86400\n\n  google:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt\"\n    path: ./ruleset/google.yaml\n    interval: 86400\n\n  proxy:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt\"\n    path: ./ruleset/proxy.yaml\n    interval: 86400\n\n  direct:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt\"\n    path: ./ruleset/direct.yaml\n    interval: 86400\n\n  private:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt\"\n    path: ./ruleset/private.yaml\n    interval: 86400\n\n  gfw:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt\"\n    path: ./ruleset/gfw.yaml\n    interval: 86400\n\n  greatfire:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt\"\n    path: ./ruleset/greatfire.yaml\n    interval: 86400\n\n  tld-not-cn:\n    type: http\n    behavior: domain\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt\"\n    path: ./ruleset/tld-not-cn.yaml\n    interval: 86400\n\n  telegramcidr:\n    type: http\n    behavior: ipcidr\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt\"\n    path: ./ruleset/telegramcidr.yaml\n    interval: 86400\n\n  cncidr:\n    type: http\n    behavior: ipcidr\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt\"\n    path: ./ruleset/cncidr.yaml\n    interval: 86400\n\n  lancidr:\n    type: http\n    behavior: ipcidr\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt\"\n    path: ./ruleset/lancidr.yaml\n    interval: 86400\n\n  applications:\n    type: http\n    behavior: classical\n    url: \"https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt\"\n    path: ./ruleset/applications.yaml\n    interval: 86400",
  "xrayTemplate": "{\n    \"log\": {\n        \"loglevel\": \"warning\"\n    },\n    \"api\": {\n        \"tag\": \"api\",\n        \"services\": [\n            \"HandlerService\",\n            \"LoggerService\",\n            \"StatsService\"\n        ]\n    },\n    \"dns\": null,\n    \"routing\": {\n        \"rules\": [\n            {\n                \"inboundTag\": [\n                    \"api\"\n                ],\n                \"outboundTag\": \"api\",\n                \"type\": \"field\"\n            }\n        ]\n    },\n    \"policy\": {\n        \"levels\": {\n            \"0\": {\n                \"statsUserUplink\": true,\n                \"statsUserDownlink\": true\n            }\n        },\n        \"system\": {\n            \"statsInboundUplink\": true,\n            \"statsInboundDownlink\": true\n        }\n    },\n    \"inbounds\": [],\n    \"outbounds\": [\n        {\n            \"protocol\": \"freedom\"\n        }\n    ],\n    \"transport\": null,\n    \"stats\": {},\n    \"reverse\": null,\n    \"fakeDns\": null\n}"
}
```

参数说明:

| 参数                          | 必须  | 说明                |
|-----------------------------|-----|-------------------|
| id                          | 是   | 主键                |
| registerEnable              | 是   | 是否开放注册 0/否 1/是    |
| registerQuota               | 是   | 注册用户默认配额 单位/MB    |
| registerExpireDays          | 是   | 注册用户过期天数 单位/天     |
| resetDownloadAndUploadMonth | 是   | 是否每月重设下载和上传流量     |
| trafficRankEnable           | 是   | 是否开启流量排行 0/否 1/是  |
| captchaEnable               | 是   | 是否开启验证码登录 0/否 1/是 |
| expireWarnEnable            | 是   | 是否开启到期警告 0/否 1/是  |
| expireWarnDay               | 是   | 到期警告 单位/天         |
| emailEnable                 | 是   | 是否开启邮箱功能 0/否 1/是  |
| emailHost                   | 是   | 系统邮箱设置 host       |
| emailPort                   | 是   | 系统邮箱设置 port       |
| emailUsername               | 是   | 系统邮箱设置 username   |
| emailPassword               | 是   | 系统邮箱设置 password   |
| systemName                  | 是   | 系统名称              |
| clashRule                   | 是   | Clash模板           |
| xrayTemplate                | 是   | Xray模板            |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

### 上传静态网站文件

接口地址: `/api/system/uploadWebFile`

请求方式: `POST`

请求示例:

Form Data

```
file: (binary)
```

参数说明:

| 参数   | 必须  | 说明    |
|------|-----|-------|
| file | 是   | 文件二进制 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

### 上传logo

接口地址: `/api/system/uploadLogo`

请求方式: `POST`

请求示例:

Form Data

```
file: (binary)
```

参数说明:

| 参数   | 必须  | 说明    |
|------|-----|-------|
| file | 是   | 文件二进制 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

## 黑名单

### 分页查询黑名单

接口地址: `/api/blackList/selectBlackListPage`

请求方式: `GET`

请求示例:

```
/api/blackList/selectBlackListPage?pageNum=1&pageSize=20&ip=143.201.86.91
```

参数说明:

| 参数       | 必须  | 说明   |
|----------|-----|------|
| pageNum  | 是   | 页号   |
| pageSize | 是   | 页大小  |
| ip       | 否   | IP地址 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "pageNum": 1,
    "pageSize": 20,
    "total": 1,
    "blackLists": [
      {
        "id": 1,
        "ip": "143.201.86.91",
        "createTime": "2023-08-19T16:24:58+08:00"
      }
    ]
  }
}
```

参数说明:

| 参数         | 必须  | 说明   |
|------------|-----|------|
| pageNum    | 是   | 页号   |
| pageSize   | 是   | 页大小  |
| total      | 是   | 总数   |
| blackLists | 否   | 黑名单  |
| id         | 否   | 主键   |
| ip         | 否   | IP地址 |
| createTime | 否   | 创建时间 |

### 删除黑名单

接口地址: `/api/blackList/deleteBlackListByIp`

请求方式: `POST`

请求示例:

```json
{
  "ip": "143.201.86.91"
}
```

参数说明:

| 参数  | 必须  | 说明   |
|-----|-----|------|
| IP  | 是   | IP地址 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

### 创建黑名单

接口地址: `/api/blackList/createBlackList`

请求方式: `POST`

请求示例:

```json
{
  "ip": "143.201.86.91"
}
```

参数说明:

| 参数  | 必须  | 说明   |
|-----|-----|------|
| ip  | 是   | IP地址 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": null
}
```

## 邮件

### 查询邮件发送记录

接口地址: `/api/emailRecord/selectEmailRecordPage`

请求方式: `GET`

请求示例:

```
/api/emailRecord/selectEmailRecordPage?pageNum=1&pageSize=20&toEmail=123&state=1
```

参数说明:

| 参数       | 必须  | 说明  |
|----------|-----|-----|
| pageNum  | 是   | 页号  |
| pageSize | 是   | 页大小 |
| toEmail  | 否   | 收件人 |
| state    | 否   | 状态  |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "emailRecords": [],
    "pageNum": 1,
    "pageSize": 20,
    "total": 1
  }
}
```

参数说明:

| 参数           | 必须  | 说明                      |
|--------------|-----|-------------------------|
| pageNum      | 是   | 页号                      |
| pageSize     | 是   | 页大小                     |
| total        | 是   | 总数                      |
| emailRecords | 否   | 发送记录                    |
| id           | 否   | 主键                      |
| toEmail      | 否   | 收件人邮箱                   |
| subject      | 否   | 主题                      |
| content      | 否   | 内容'                     |
| state        | 否   | 状态 0/未发送 1/发送成功 -1/发送失败 |
| createTime   | 否   | 创建时间                    |

## 文件任务

### 分页查询文件任务

接口地址: `/api/fileTask/selectFileTaskPage`

请求方式: `GET`

请求示例:

```
/api/fileTask/selectFileTaskPage?pageNum=1&pageSize=20&accountUsername=sysadmin
```

参数说明:

| 参数              | 必须  | 说明  |
|-----------------|-----|-----|
| pageNum         | 是   | 页号  |
| pageSize        | 是   | 页大小 |
| accountUsername | 否   | 创建人 |

返回示例:

```json
{
  "code": 20000,
  "type": "success",
  "message": "",
  "data": {
    "fileTasks": [
      {
        "id": 1,
        "name": "batchCreateAccountExport-20230819161912.json",
        "type": 1,
        "status": 2,
        "errMsg": "",
        "accountUsername": "sysadmin",
        "createTime": "2023-08-19T16:19:12+08:00"
      }
    ],
    "pageNum": 1,
    "pageSize": 20,
    "total": 1
  }
}
```

参数说明:

| 参数              | 必须  | 说明                               |
|-----------------|-----|----------------------------------|
| pageNum         | 是   | 页号                               |
| pageSize        | 是   | 页大小                              |
| total           | 是   | 总数                               |
| fileTasks       | 否   | 文件任务                             |
| id              | 否   | 主键                               |
| name            | 否   | 文件名称                             |
| type            | 否   | 类型 1/用户导入 2/服务器导入 3/用户导出 4/服务器导出 |
| status          | 否   | 状态 -1/失败 0/等待 1/正在执行 2/成功        |
| errMsg          | 否   | 错误信息                             |
| accountUsername | 否   | 账户登录用户名                          |
| createTime      | 否   | 创建时间                             |

### 删除文件任务

接口地址: `/api/fileTask/deleteFileTaskById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 下载文件任务的文件

接口地址: `/api/fileTask/downloadFileTask`

请求方式: `POST`

请求示例:

```json
{
  "id": 1
}
```

参数说明:

| 参数  | 必须  | 说明  |
|-----|-----|-----|
| id  | 是   | 主键  |

返回示例:

Content-Type: application/octet-stream

```
[
    {
        "username": "83tBsbt6dJ0j",
        "pass": "83tBsbt6dJ0j"
    },
    {
        "username": "BxjLbz4rQyYd",
        "pass": "BxjLbz4rQyYd"
    },
    {
        "username": "XLtcPBGHMEJz",
        "pass": "XLtcPBGHMEJz"
    },
    {
        "username": "foxXLpN0KQkp",
        "pass": "foxXLpN0KQkp"
    },
    {
        "username": "bX3pahuM7Lma",
        "pass": "bX3pahuM7Lma"
    }
]
```

参数说明:

| 参数       | 必须  | 说明    |
|----------|-----|-------|
| username | 是   | 登录用户名 |
| pass     | 是   | 登录密码  |

### 获取文件模板

接口地址: `/api/fileTask/downloadTemplate`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:
