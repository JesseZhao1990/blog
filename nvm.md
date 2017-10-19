## nvm  
nvm(node version manager)，node版本管理工具
在windows上的实践

### 安装
[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

### 基本命令

```
  nvm install 版本号     # 安装某个版本的node
  nvm ls                # 列出所有已安装的node 版本
  nvm ls available      # 列出所有可供安装的版本
  
  nvm arch                     : 查看当前系统是32位的还是64位
  nvm install <version> [arch] : version可以是node的最新稳定版本，或者是指定的某一版本，arch可以指定是装32位的还是64位的，如果arch设置成all，那就是32和64位的都安装
                                 Add --insecure to the end of this command to bypass SSL validation of the remote down
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be instal
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use d
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/npm/archive/. Leave [url] blan
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.

```
