import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./Components/App"
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.querySelector('#root'));