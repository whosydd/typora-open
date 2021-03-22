import * as vscode from "vscode";
import "./typora.png";
import "./typora.svg";

export const activate = (context: vscode.ExtensionContext) => {
  const terminal = vscode.window.createTerminal({
    name: "Typora",
    hideFromUser: true,
  });

  const openInTypora = () => {
    if (
      !vscode.window.activeTextEditor ||
      !vscode.window.activeTextEditor.document.fileName
    ) {
      vscode.window.showInformationMessage("No active editor or URI available");
      return;
    }

    if (vscode.window.activeTextEditor.document.languageId !== "markdown") {
      vscode.window.showInformationMessage(
        `The file you are trying to open is not in Markdown format!`
      );
      return;
    } else {
      try {
        terminal.sendText(
          `. ${vscode.window.activeTextEditor?.document.fileName}`
        );
      } catch (err) {
        vscode.window.showInformationMessage(
          `Failed to open file: ${vscode.window.activeTextEditor?.document.fileName} in Typora!`
        );
      }
    }
  };
  const disposable = vscode.commands.registerCommand(
    "typora.open",
    openInTypora
  );

  context.subscriptions.push(disposable);
};
