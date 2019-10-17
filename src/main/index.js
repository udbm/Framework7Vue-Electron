import {app , BrowserWindow,Menu} from 'electron'
import path from 'path'
import { format as formatUrl } from 'url'
import {menu_template} from './main_menu.js'
const notifier = require('node-notifier')
const isDevelopment = process.env.NODE_ENV !== 'production' // debug/prod

const menu = Menu.buildFromTemplate(menu_template)
Menu.setApplicationMenu(menu)

app.on('ready', () => {
  let window = new BrowserWindow({
    width: 1024, // any width // as rquired
    webPreferences: {
            nodeIntegration: true // for electron app to allow node integration
    }
  })
  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)  // if we are running in dev ,Open Browser URL// port always changes
      

  } else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    })) // index.html(Don't Change index.html code as it may cause issue while building platform specific installable file.) is created manually bcs there is problem related to source-maps
  }
  window.on("closed", () => {
    window = null;
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})
