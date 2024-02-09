import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.easy-log",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        if (selectedText) {
          const logStatement = `console.log("${selectedText} =>", ${selectedText});`;
          const newPosition = selection.end.with(selection.end.line + 1, 0);
          editor
            .edit((editBuilder) => {
              editBuilder.insert(newPosition, `${logStatement}\n`);
            })
            .then(() => {
              vscode.commands.executeCommand("editor.action.formatDocument");
              vscode.commands.executeCommand("workbench.action.files.save");
            });
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
