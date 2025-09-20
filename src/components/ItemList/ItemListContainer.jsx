import React, { useEffect, useState } from 'react'
import { getDocFiresBase, getInfoFirebase, getQuery, pedirDatos } from '../../helper/pedirDatos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria;


    useEffect(() => {
        // pedirDatos()
        // .then(res => {
        //     if (categoria) {
        //         setProductos(res.filter(prop => prop.category === categoria))
        //     } else {
        //         setProductos(res)
        //     }
        //     // console.slog(res);
        // })



        const getData = (q) => {

            getInfoFirebase(q)
                .then(resp => {
                    setProductos(
                        resp.docs.map(doc => {
                            return {
                                ...doc.data(),
                                id: doc.id
                            }
                        }));
                })

        }

        if (categoria) {
            const query = getQuery(categoria);
            getData(query);
        } else {
            getData();
        }





    }, [categoria])


    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer