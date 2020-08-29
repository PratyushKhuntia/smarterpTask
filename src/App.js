import React, { Component } from 'react'
import NoteTake from './Component/NoteTake';
import './Component/AddPost.css'

class App extends Component{
  render() {
    return (
      <div className="note">
      <NoteTake/>
      </div>
    )
  }
}
export default App;