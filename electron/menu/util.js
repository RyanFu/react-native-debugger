import { app, dialog, BrowserWindow } from 'electron';
import multiline from 'multiline-template';

const appName = app.getName();
const detail = multiline`
  | Created by Jhen-Jie Hong
  | (https://github.com/jhen0409)

  | This software is included following project:

  | https://github.com/facebook/react-devtools
  | https://github.com/zalmoxisus/remotedev-app
`;

export const showAboutDialog = iconPath =>
  dialog.showMessageBox({
    title: 'About',
    message: `${appName} ${app.getVersion()}`,
    detail,
    icon: iconPath,
    buttons: [],
  });

export const toggleDevTools = (win, type) => {
  if (!win || !type) return;
  if (type === 'chrome') {
    win.toggleDevTools();
    return;
  }
  win.webContents.send('toggle-devtools', type);
};

export const toggleFullscreen = win => win && win.setFullScreen(!win.isFullScreen());
export const setAlwaysOnTop = (win, checked) => win && win.setAlwaysOnTop(checked);
export const reload = win => win && win.webContents.reload();
export const close = win => win && win.close();
export const haveOpenedWindow = () => !!BrowserWindow.getAllWindows().length;

export const menu = (label, submenu) => ({ label, submenu });
export const item = (label, accelerator, click, rest) => ({
  label,
  accelerator,
  click,
  ...rest,
});
export const separator = { type: 'separator' };
export const n = undefined;
