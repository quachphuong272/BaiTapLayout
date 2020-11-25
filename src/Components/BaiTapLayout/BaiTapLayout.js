import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
