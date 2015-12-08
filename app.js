import electron from 'electron';
import Whoop from './src/module.js';

const { app, BrowserWindow } = electron;

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // whoop module.
  const whoop = new Whoop();

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});
