// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')
const fs = require('fs')

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "typora-dev" is now active!')
  const terminal = vscode.window.createTerminal({
    name: 'Typora',
    hideFromUser: true,
  })
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const typoraOpen = vscode.commands.registerCommand('typora.open', async file => {
    // The code you place here will be executed every time your command is executed
    let final
    if (file === undefined) {
      const fileList = await vscode.workspace.findFiles('**/*.md', '**/node_modules/**')
      const path = await vscode.window.showQuickPick(fileList.map(file => file.path.slice(1)))
      final = path
    } else {
      final = file.path.slice(1)
    }
    if (final === undefined) {
      return
    } else {
      if (final.includes(' ')) {
        final = `"${final}"`
      }
      try {
        terminal.sendText(`typora ${final}`)
      } catch (err) {
        vscode.window.showInformationMessage(`Failed to open file: ${final} in Typora!`)
      }
    }
  })

  context.subscriptions.push(typoraOpen)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
