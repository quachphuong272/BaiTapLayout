import React, { Component } from 'react'
import Content2Item from './Content2Item'

export default class Content2 extends Component {
    render() {
        return (
            <div className="row text-context">
                <div className = "col-3">
                <Content2Item/>
                </div>
                <div className = "col-3">
                <Content2Item/>
                </div>
                <div className = "col-3">
                <Content2Item/>
                </div>
                <div className = "col-3">
                <Content2Item/>
                </div>
            </div>
        )
    }
}
