import * as vscode from "vscode";

export const saveAndFormat = () => {
  vscode.commands.executeCommand("editor.action.formatDocument");
  vscode.commands.executeCommand("workbench.action.files.save");
};
