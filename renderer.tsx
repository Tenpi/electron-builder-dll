import {ipcRenderer} from "electron"
import React, {useEffect, useState} from "react"
import ReactDom from "react-dom"

const App = () => {
  return (
    <main className="app">
    </main>
  )
}

ReactDom.render(<App/>, document.getElementById("root"))