const { Menu, ipcMain } = require('electron');


 const template =  [
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "pasteandmatchstyle" },
        { role: "delete" },
        { role: "selectall" }
      ],
    },
    {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click (item, focusedWindow) {
              console.log('Developer')
              if (focusedWindow) focusedWindow.reload()
            }
          },
            
          {
            type: 'separator'
          },
          {
            role: 'resetzoom'
          },
          {
            role: 'zoomin'
          },
          {
            role: 'zoomout'
          },
          {
            type: 'separator'
          },
          {
            role: 'togglefullscreen'
          }
        ]
      },
    {
      role: "window",
      submenu: [{ role: "minimize" }, { role: "close" }],
    }

  ];

  if (process.platform === "darwin") {
    template.unshift({
      label: 'Vartag',
      submenu: [
        { role: "hide" },
        { role: "hideothers" },
        { role: "unhide" },
        { role: "quit" },
      ],
    });


    // Window menu
    template[3].submenu = [
      { role: "close" },
      { role: "minimize" },
      { role: "zoom" },
      { role: "front" },
    ];
  }

exports.template = template;