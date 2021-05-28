import React from 'react'
import Items from '../Items/Items';
import './items-list.css'

function ItemsList(props) {
    const { items } = props;
    
    return (
        <section className="section-gallery">
            {
                items.map(item => <Items key={item.id} item={ item }/>)
            }
        </section>
    )
}

export default ItemsList 
