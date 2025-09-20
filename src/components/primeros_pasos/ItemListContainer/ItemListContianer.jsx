import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { pedirProductor } from './PedirProductos';


const ItemListContianer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        pedirProductor().then(res => {
            setProducts(res);
        })


    }, [])


    return (
        <div>
            <h1>Productos</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContianer