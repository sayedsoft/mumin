// Electron
const { app, Menu } = require("electron");

let mainWindow;

// This method will be called when Electron has finished initialization and is ready to create browser windows
app.allowRendererProcessReuse = true;
app.on("ready", async () => {



  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);


  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadURL(`file://${__dirname}/index.html`);



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
