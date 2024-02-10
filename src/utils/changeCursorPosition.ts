import * as vscode from "vscode";

export const changeCursorPosition = (
  editor: vscode.TextEditor,
  newPosition: vscode.Position,
  logStatement: string
) => {
  const logStatementIndex = editor.document
    .lineAt(newPosition.line)
    .text.indexOf(logStatement);
  const lastParenthesisIndex = logStatement.lastIndexOf(")");
  const cursorPosition = new vscode.Position(
    newPosition.line,
    logStatementIndex + lastParenthesisIndex
  );
  editor.selection = new vscode.Selection(cursorPosition, cursorPosition);
};
