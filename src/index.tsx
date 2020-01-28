import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
import { Footer } from "./components/Footer"
import { ResetPassword } from "./components/ResetPassord"
import "./styles/app.scss"

class App extends Component {
  render() {
    return (<div>
        <ResetPassword/>
        <Footer/>
    </div>)
  }
}

render(<App />, document.getElementById('root'))