import React from 'react'
import './items.css'

function Items(props) {
    const {item} = props 
    return (
        <div className="section-gallery__item">
            <img className="section-gallery__item__img" src={item.image} alt="Print"/>
            <div className="section-gallery__item__name">Name : {item.name}</div>
            <div className="section-gallery__item__price">Price: {item.price}</div>
            <button>Add To Cart</button>
        </div>
    )
}

export default Items
