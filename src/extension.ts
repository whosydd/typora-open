import * as vscode from 'vscode'

export const activate = (context: vscode.ExtensionContext) => {
  const terminal = vscode.window.createTerminal({
    name: 'Typora',
    hideFromUser: true,
  })

  const openInTypora = () => {
    try {
      terminal.sendText(`. ${vscode.window.activeTextEditor?.document.fileName}`)
    } catch (err) {
      vscode.window.showInformationMessage(
        `Failed to open file: ${vscode.window.activeTextEditor?.document.fileName} in Typora!`
      )
    }
  }
  const disposable = vscode.commands.registerCommand('typora.open', openInTypora)

  context.subscriptions.push(disposable)
}
