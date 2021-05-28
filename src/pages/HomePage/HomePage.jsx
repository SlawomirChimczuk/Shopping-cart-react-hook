import React from 'react'
import ItemsList from './components/ItemsList/ItemsList'
import ItemsData from '../../data/ItemsData'

function HomePage() {
    const items = ItemsData;

    return (
        <>
            <ItemsList items={ items }></ItemsList>
        </> 
    )
}

export default HomePage
