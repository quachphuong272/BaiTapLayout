import React, { Component } from 'react'
import Content1 from './Content1'
import Content2 from './Content2'

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="container my-4">
                    <div className = "content ">
                    <Content1/>
                    <Content2/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
