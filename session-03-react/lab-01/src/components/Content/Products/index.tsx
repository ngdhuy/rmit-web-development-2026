/**
 * * define Product component for render list of products
 */

import React from "react"
import ProductItem from "./ProductItem"

// import data to component
import products from '../../../data/date.json'


const Products : React.FC = () => {
    return (
        <div>
            <h3>List of Products</h3>
            {
                products.map((item, index) => 
                    <ProductItem id={item.id} name={item.name} price={item.price} key={index} />
                )
            }
        </div>
    )
}

export default Products