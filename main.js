const {app, BrowserWindow, dialog} = require('electron');
const isDev = require('electron-is-dev');
const { autoUpdater } = require("electron-updater");
const DiscordRPC = require('discord-rpc');
const path = require('path');

let pluginName
switch (process.platform) {
  case 'win32':
    pluginName = 'flash/pepflashplayer.dll'
    break
  case 'darwin':
    pluginName = 'flash/PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'flash/libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.371');

autoUpdater.checkForUpdatesAndNotify();
let mainWindow;

function clearCache() {
  mainWindow.webContents.session.clearCache();
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    title: "Connecting...",
    icon: __dirname + '/favicon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      plugins: true
    }
  });
  mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();
  clearCache();
  mainWindow.loadURL('https://play.cpspace.net');
  
  const clientId = '1268040383208751215';
  DiscordRPC.register(clientId);
  const rpc = new DiscordRPC.Client({ transport: 'ipc' });
  const startTimestamp = new Date();
  
  rpc.on('ready', () => {
    rpc.setActivity({
      details: `Playing Club Penguin`, 
      state: `Waddle On!`, 
      startTimestamp, 
      largeImageKey: `large4`,
      buttons: [
        {
          label: "Play Now!",
          url: "https://play.cpspace.net"
        },
        {
          label: "Join Our Discord!",
          url: "https://discord.gg/space"
        }
      ]
    });
  });
  
  rpc.login({ clientId }).catch(console.error);

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

setInterval(clearCache, 1000*60*5);