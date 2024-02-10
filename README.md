# easyLog

An easy to use Vscode extension, which provides a faster way to create logs.

Just select a variable and use the keyboard shortcut to quickly create a log of it.

## Demo

![demo](demo.gif)

## How to use (Installation)

You can customize the keyboard shortcut for using this extension according to your preferences. Here's how:

1. Install the extension (if you haven't done it already).
2. Open Visual Studio Code.
3. Go to `File` > `Preferences` > `Keyboard Shortcuts`, or press `Ctrl + K Ctrl + S`.
4. Search for "extension.easy-log" in the search bar.
5. Hover over the rightmost side of the row, where it says "unassigned", and click on the "+" icon that appears.
6. This will open a new input box. Press your desired key combination for the shortcut.
7. After pressing the key combination, VSCode will ask you to enter a snippet name. Enter `logVar` (or whatever prefix you've used for your snippet).
8. Press `Enter` to confirm.

That's it! You've customized the keyboard shortcut for using this extension.
Now all you need to do is select a text and use the new keyboard shortcut to create logs

## Configuration Options

You can customize the sign used in the log message by modifying the extension settings:

1. Open Visual Studio Code.
2. Go to `File` > `Preferences` > `Settings`, or press `Ctrl + ,`.
3. Search for "Easy Log Sign" in the search bar.
4. Choose your desired sign from the dropdown menu:
   - Arrow (=>)
   - Colon (:)
   - None (No sign)

Additionally, you can specify the log type (log, warn, error) by selecting the appropriate option from the "Easy Log Type" dropdown menu.
