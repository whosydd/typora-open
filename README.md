# Typora Open

**Open markdown file in Typora**

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/whosydd/typora-open)

## Usage

### command: Open in Typora

![](https://raw.githubusercontent.com/whosydd/images-in-one/main/20210704000707.gif)

### editor titlebar button

![](https://raw.githubusercontent.com/whosydd/images-in-one/main/20210704000718.gif)

### editor

![](https://raw.githubusercontent.com/whosydd/images-in-one/main/20210704000710.gif)

### explorer context menu

![](https://raw.githubusercontent.com/whosydd/images-in-one/main/20210704000711.gif)

## Config

```json
// 切换是否显示标题栏的图标
// Toggle whether to display the title bar icon
"typora-open.showIconInEditorTitleMenu": true // default
```

## Requirements

### [**Use Typora from Shell or Cmd**](https://support.typora.io/Use-Typora-From-Shell-or-cmd/)

### Windows

只需要将`typora安装目录`添加到**系统变量**，即可通过 `typora README.md` 打开 md 文件

### macOS

```bash
# 将如下命令添加到 .bash_profile(bash) 或 .zprofile(zsh) 文件中：
alias typora="open -a typora"
```

### Linux

**After [installing Typora on Linux](https://support.typora.io/Typora-on-Linux/), you can run `typora` directly in terminal**

<br>

<br>



> <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
