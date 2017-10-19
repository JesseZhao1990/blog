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
### 避坑指南

由于安装的时候没有把官方文档看一遍，发现装完之后，node 和npm 都没法使用了。最后才发现是卸载node的时候没卸载干净，一定要仔细阅读下面这段。

It comes with an installer (and uninstaller), because getting it should be easy. Please note, you need to uninstall any existing versions of node.js before installing NVM for Windows. Also delete any existing nodejs installation directories (e.g., "C:\Program Files\nodejs") that might remain. NVM's generated symlink will not overwrite an existing (even empty) installation directory.

You should also delete the existing npm install location (e.g. "C:\Users<user>\AppData\Roaming\npm") so that the nvm install location will be correctly used instead. After install, reinstalling global utilities (e.g. gulp) will have to be done for each installed version of node:

```
nvm use 4.4.0 npm install gulp-cli -g nvm use 0.10.33 npm install gulp-cli -g
```

#### 总结一下
就是在卸载node之后，安装nvm之前，一定要把下面这两个文件夹清空

* 1.C:\Program Files\nodejs
* 2.C:\Users<user>\AppData\Roaming\npm
