const { Menu, ipcMain } = require('electron');


 const template =  [
    {
      label: "Düzenle",
      submenu: [
        { role: "undo" , label:"Geri Al"},
     
        { type: "separator" },
        { role: "cut" , label: "Kes"},
        { role: "copy" , label: "Kopyala"},
        { role: "paste" , label: "Yapıştır"},
        { role: "delete" , label: "Sil"},
    
      ],
    },
    {
        label: 'Görünüm',
        submenu: [
          {
            role: 'resetzoom' , label: "Yenile"
          },
          { role: "forcereload" , label: "Yenilemeye Zorla"},
            
          {
            type: 'separator'
          },
          {
            role: 'resetzoom' , label: "Sıfırla"
          },
          {
            role: 'zoomin', label: "Yakınlaştır"
          },
          {
            role: 'zoomout', label: "Uzaklaştır"
          },
          {
            type: 'separator'
          },
          {
            role: 'togglefullscreen', label: "Tam Ekran"
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