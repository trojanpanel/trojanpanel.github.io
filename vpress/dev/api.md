# API文档

## 开放接口

### 登录

接口地址: `/api/auth/login`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 注册

接口地址: `/api/auth/register`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 系统默认设置

接口地址: `/api/auth/setting`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 订阅

接口地址: `/api/subscribe/:token`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 验证码

接口地址: `/api/generateCaptcha`

请求方式: `POST`

请求示例:

```json

```

参数说明:

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

### 获取当前用户信息

接口地址: `/api/account/getAccountInfo`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 分页查询账户

接口地址: `/api/account/selectAccountPage`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

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

### 导出用户

接口地址: `/api/account/exportAccount`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 导入用户

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

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

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

```

参数说明:

返回示例:

参数说明:

### 分页查询服务器

接口地址: `/api/nodeServer/selectNodeServerPage`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

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

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 更新系统配置

接口地址: `/api/system/updateSystemById`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 上传静态网站文件

接口地址: `/api/system/uploadWebFile`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 上传logo

接口地址: `/api/system/uploadLogo`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 黑名单

### 分页查询黑名单

接口地址: `/api/blackList/selectBlackListPage`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 删除黑名单

接口地址: `/api/blackList/deleteBlackListByIp`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

### 创建黑名单

接口地址: `/api/blackList/createBlackList`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 邮件

### 查询邮件发送记录

接口地址: `/api/emailRecord/selectEmailRecordPage`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

## 文件任务

### 分页查询文件任务

接口地址: `/api/fileTask/selectFileTaskPage`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:

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

```

参数说明:

返回示例:

参数说明:

### 获取文件模板

接口地址: `/api/fileTask/downloadTemplate`

请求方式: `POST`

请求示例:

```json

```

参数说明:

返回示例:

参数说明:
