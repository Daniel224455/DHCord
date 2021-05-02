// Modules to control application life and create native browser window
const { app, BrowserWindow, session } = require('electron')
const path = require('path')
require("v8-compile-cache");
require("./utils/updater");
let mainWindow
require("./menu.js")
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      enableRemoteModule: true,
      nodeIntegration: false,
    },
  });
  mainWindow.webContents.userAgent =
    "Mozilla/5.0 (X12; TempleOS MIPS) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"; //to set
  mainWindow.loadFile("index.html");
  mainWindow.webContents.on("new-window", function (e, url) {
    e.preventDefault();
    require("electron").shell.openExternal(url);
  });
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  session.defaultSession.loadExtension(`${require('electron').app.getAppPath()}/goosemod/`)
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

