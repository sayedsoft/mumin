// Electron
const { app, Menu , session } = require("electron");

let mainWindow;


// This method will be called when Electron has finished initialization and is ready to create browser windows
app.allowRendererProcessReuse = true;
app.on("ready", async () => {


  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);


  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadURL(`file://${__dirname}/index.html`);


  /*
    let userAgentValue = null
  mainWindow.webContents
  .executeJavaScript('({...localStorage});', true)
  .then(localStorage => {
      let checker = new UserAgentChecker()
      checker.setLocal(localStorage)
      let _getUserAgnet = checker.getUserAgnet()
      if (_getUserAgnet != null) {
        userAgentValue = _getUserAgnet
      }

  });

  */

  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    
      details.requestHeaders['User-Agent'] = 'joker';
      callback({ cancel: false, requestHeaders: details.requestHeaders });
  
  })


 
  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)


  // Print function (if enabled)
  require("./src/print");
  require("./src/resetstorage");
  
  const template = require("./src/menu");
  const builtMenu = Menu.buildFromTemplate(template.template);
  Menu.setApplicationMenu(builtMenu);

  

});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
