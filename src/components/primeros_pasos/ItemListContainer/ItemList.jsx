import React from 'react';

const ItemList = ({products = []}) => {


    return (
        <div>
            {
                products.length > 0 ?

                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <img src={product.image} alt={product.description} />
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>
                        )
                    })

                    : ""
            }
        </div>
    )
}

export default ItemList