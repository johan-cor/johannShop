import React from 'react';
import { Item } from './Item.';
import { useParams } from 'react-router-dom';


const ItemList = ({ productos }) => {
    const categoria = useParams().categoria;

    return (
        <div className='itemList'>
            <h2 className="itemList_title">
                {
                    categoria ? `Categoría: ${categoria}` : "Productos"
                }
            </h2>
            <div className='itemListProducts'>
                {
                    productos.map(producto => <Item producto={producto} key={producto.id} />
                    )
                }
            </div>
        </div>
    )
}

export default ItemList