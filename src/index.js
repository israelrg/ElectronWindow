const {app, BrowserWindow, Menu} = require ('electron');
const url  = require('url'); //Pasar archivo interno
const path = require('path');


//Hacer el reload solo en sistema de produccion
//Mostrar cambios guardando
if (process.env.NODE_ENV !== 'production'){
require('electron-reload')(__dirname, {
})}

let mainwindow
app.on('ready', () => {
    mainwindow = new BrowserWindow({})
    
    //Ahora cargamos el html que se vera en Browserwindows
    mainwindow.loadURL(url.format({
        pathname: path.join(__dirname, 'view/index.html'),
        protocol: 'file',
        slashes: true
    }))
    
    mainwindow.setMenuBarVisibility(false);
    //Modificacion del menu de la ventana
    //const mainmenu = Menu.buildFromTemplate(templateMenu);
    //Menu.setApplicationMenu(mainmenu);

    
});

/*
const templateMenu = [
    {
        label: 'File', 
        submenu: [
            {
                label: 'New product',
                accelerator: 'Ctrl+N',
                click(){
                    alert('New product')
                }
            }
        ]
    }
]
*/