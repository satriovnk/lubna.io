import React, { Component } from 'react'
import Exchange from './Exchange'


class Dashboard extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Exchange />
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Dashboard