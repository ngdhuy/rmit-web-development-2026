import type React from "react";
import { Routes, Route } from "react-router-dom";

import './style.css'
import ListOfProduct from "./ListOfProduct";
import DetailOfProduct from "./DetailOfProduct";

const Products : React.FC = () => {
    return(
        <div className='product'>
            <h2>Product management</h2>
            <Routes>
                <Route index element={ <ListOfProduct /> } />
                <Route path=":id" element={ <DetailOfProduct /> } />
            </Routes>
        </div>
    )
}

export default Products