import * as vscode from "vscode";

export const getConfigValues = () => {
  const config = vscode.workspace.getConfiguration();
  const logSign = config.get("extension.easyLogSign", " =>");
  const logType = config.get("extension.easyLogType", "log");
  return { logSign, logType };
};
