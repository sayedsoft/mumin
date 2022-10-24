// Electron
const { app, Menu } = require("electron");




// This method will be called when Electron has finished initialization and is ready to create browser windows
app.allowRendererProcessReuse = true;
app.on("ready", async () => {
  // Main window
  const { sleep,hasSetup } = require('./src/localstorage')
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

    const loadView = (link) => {
      const view = new BrowserView();
      mainWindow.setBrowserView(view);
      view.setBounds({ x: 0, y: 0, width: 1024, height: 768 });
      view.webContents.loadURL(link);
  };

  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadURL(`file://${__dirname}/index.html`);




  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)
  const menu = require("./src/menu");
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);

  // Print function (if enabled)
  require("./src/print");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
