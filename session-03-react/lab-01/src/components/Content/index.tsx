/**
 * * define component to render content area of page
 */

import React from "react"

import './style.css'
import Products from "./Products"

const Content : React.FC = () => {
    return(
        <div className='content'>
            <h2>Content of page</h2>
            <Products />
        </div>
    )
}

export default Content