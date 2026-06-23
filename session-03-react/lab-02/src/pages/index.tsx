// import components
import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import { BrowserRouter, Routes } from "react-router-dom"

const Pages: React.FC = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <NavBar />
                <Routes>

                </Routes>
            </BrowserRouter>
            
            <Footer />
        </>
    )
}

export default Pages