import {app, BrowserWindow, dialog, globalShortcut, ipcMain, shell} from "electron"
import fs from "fs"
import path from "path"
import process from "process"
import {createCanvas} from "canvas"

process.setMaxListeners(0)
let window: Electron.BrowserWindow | null

const canvas = createCanvas(100, 100)

const singleLock = app.requestSingleInstanceLock()

if (!singleLock) {
  app.quit()
} else {
  app.on("second-instance", () => {
    if (window) {
      if (window.isMinimized()) window.restore()
      window.focus()
    }
  })

  app.on("ready", () => {
    window = new BrowserWindow({width: 800, height: 600, minWidth: 720, minHeight: 450, frame: true, backgroundColor: "#000000", center: true, webPreferences: {nodeIntegration: true, contextIsolation: false}})
    window.loadFile(path.join(__dirname, "index.html"))
    window.removeMenu()
    window.on("closed", () => {
      window = null
    })
    globalShortcut.register("Control+Shift+I", () => {
      window?.webContents.toggleDevTools()
    })
  })
}