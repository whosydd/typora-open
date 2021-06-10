# Typora Open

**Open markdown file in Typora**

## Usage

- `command: Open in Typora`

  ![command](https://i.loli.net/2021/06/11/eAX8wNsHR7Pb52y.gif)

- `editor titlebar button`

  ![title](https://i.loli.net/2021/06/11/PQnsBZ4e9jTSkDC.gif)

- `context menu`

  ![explorer](https://i.loli.net/2021/06/11/8kI91lqW7uHcNTE.gif)

## Config

```json
// 切换是否显示标题栏的图标
// Toggle whether to display the title bar icon
"typora-open.showIconInEditorTitleMenu": true // default
```

## Requirements

### [**Use Typora from Shell or Cmd**](https://support.typora.io/Use-Typora-From-Shell-or-cmd/)

### Windows

只需要将`typora安装目录`添加到**系统变量**，即可通过 `typora README.md` 打开md文件

### macOS

```bash
# 将如下命令添加到 .bash_profile(bash) 或 .zprofile(zsh) 文件中：
alias typora="open -a typora"
```

### Linux

**After [installing Typora on Linux](https://support.typora.io/Typora-on-Linux/), you can run `typora` directly in terminal**

<br>

<br>

currently not support macOS or Linux

> <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

