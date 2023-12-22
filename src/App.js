import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="general" country="in" category={"general"} />} />
            <Route path='/business' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="business" country="in" category={"business"} />} />
            <Route path='/entertainment' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="entertainment" country="in" category={"entertainment"} />} />
            <Route path='/general' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="general" country="in" category={"general"} />} />
            <Route path='/health' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="health" country="in" category={"health"} />} />
            <Route path='/science' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="science" country="in" category={"science"} />} />
            <Route path='/sports' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="sports" country="in" category={"sports"} />} />
            <Route path='/technology' element={<News pageSize={this.pageSize} apiKey={this.apiKey} key="technology" country="in" category={"technology"} />} />
          </Routes>
        </Router>

      </div>
    )
  }
}
