const { ipcMain, BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window



ipcMain.handle("resetstorage", async (event, arg) => {
  let printWindow = new BrowserWindow({ "auto-hide-menu-bar": true });
  printWindow.loadURL(arg);
  
  printWindow.webContents.on("did-finish-load", () => {
    console.log(printWindow.webContents)
    
  });
});
