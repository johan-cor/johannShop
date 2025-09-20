import React, { useEffect, useState } from 'react'
import { getDocFiresBase, pedirItemPorId } from '../../helper/pedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const itemID = useParams().id;


    useEffect(() => {
        // pedirItemPorId(Number(itemID)).then(res => {
        //     setItem(res);
        // })


        getDocFiresBase(itemID)
            .then(resp => setItem({
                ...resp.data(),
                id: resp.id
            }))

    }, [])


    return (
        <div className=''>
            {
                item && <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer