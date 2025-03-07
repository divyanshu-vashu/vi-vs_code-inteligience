import * as vscode from "vscode";
import { ExtensionService } from './services/ExtensionService';

export function activate(context: vscode.ExtensionContext) {
    const extensionService = new ExtensionService();

    // Register all extension functionalities
    extensionService.registerCommands(context);
    extensionService.registerWebviewProvider(context);
    extensionService.registerFileListCommand(context);
    extensionService.registerCodeApplyCommand(context);
}

export function deactivate() {
    console.log("Chat Cursor extension is deactivated.");
}