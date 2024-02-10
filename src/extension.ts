import * as vscode from "vscode";
import { changeCursorPosition, saveAndFormat, getConfigValues } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.easy-log",
    () => {
      const { logSign, logType } = getConfigValues();
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);
        if (selectedText) {
          const logStatement = `console.${logType}("${selectedText}${logSign}", ${selectedText});`;
          const newPosition = selection.end.with(selection.end.line + 1, 0);
          editor
            .edit((editBuilder) => {
              editBuilder.insert(newPosition, `${logStatement}\n`);
            })
            .then(() => {
              changeCursorPosition(editor, newPosition, logStatement);
              saveAndFormat();
            });
        }
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
