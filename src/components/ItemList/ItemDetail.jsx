import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ item }) => {

  const {agregarCarrito } = useContext(CartContext);


  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    (cantidad < item.stock) && setCantidad(cantidad + 1);
  }

  const handleRestar = () => {
    (cantidad > 1) && setCantidad(cantidad - 1);
  }

  

  return (
    <div className='item_container'>
      <div className='item-container_card'>
        <img src={item.image} alt={item.title} />
        <div className='item-container_detail'>
          <h3 className='item_title'>{item.title}</h3>
          <p className='item_description'>{item.description}</p>
          <p className='item_category'>{item.category}</p>
          <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={()=>agregarCarrito(item,cantidad)} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail