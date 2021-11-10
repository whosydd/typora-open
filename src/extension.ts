import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  // 创建终端
  const terminal = vscode.window.createTerminal({
    name: 'Typora',
    hideFromUser: true,
  })
  const typoraOpen = vscode.commands.registerCommand('typora.open', async file => {
    let final
    if (file === undefined) {
      const fileList = await vscode.workspace.findFiles('**/*.md', '**/node_modules/**')
      const path = await vscode.window.showQuickPick(fileList.map(file => file.fsPath))
      final = path
    } else {
      final = file.fsPath
    }
    if (final === undefined) {
      return
    } else {
      // if (final.includes(' ')) {
      //   final = `"${final}"`
      // }
      try {
        terminal.sendText(`typora "${final}"`)
      } catch (err) {
        vscode.window.showInformationMessage(`Failed to open file: ${final} in Typora!`)
      }
    }
  })

  context.subscriptions.push(typoraOpen)
}

// this method is called when your extension is deactivated
export function deactivate() {}
