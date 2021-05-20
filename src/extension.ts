import * as vscode from 'vscode'
import './typora.png'
import './typora.svg'

export const activate = (context: vscode.ExtensionContext) => {
  const terminal = vscode.window.createTerminal({
    name: 'Typora',
    hideFromUser: true,
  })

  const openInTypora = () => {
    // if (!vscode.window.activeTextEditor || !vscode.window.activeTextEditor.document.fileName) {
    //   vscode.window.showInformationMessage('No active editor or URI available')
    //   return
    // }
    // if (vscode.window.activeTextEditor.document.languageId !== 'markdown') {
    //   vscode.window.showInformationMessage(
    //     `The file you are trying to open is not in Markdown format!`
    //   )
    //   return
    // } else {
    //   try {
    //     terminal.sendText(`. ${vscode.window.activeTextEditor?.document.fileName}`)
    //   } catch (err) {
    //     vscode.window.showInformationMessage(
    //       `Failed to open file: ${vscode.window.activeTextEditor?.document.fileName} in Typora!`
    //     )
    //   }
    // }
    if (vscode.workspace.workspaceFolders !== undefined) {
      let f = vscode.workspace.workspaceFolders[0].uri.fsPath
      let ff = vscode.workspace.workspaceFolders.find(e => e.name === '*.md\\')

      const message = `${f},${ff}`

      vscode.window.showInformationMessage(message)
    } else {
      const message = 'YOUR-EXTENSION: Working folder not found, open a folder an try again'

      vscode.window.showErrorMessage(message)
    }
  }
  const disposable = vscode.commands.registerCommand('typora.open', openInTypora)

  context.subscriptions.push(disposable)
}
