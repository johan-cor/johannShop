import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CardProvider = ({children}) => {

    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

    const [carrito, setCarrito] = useState(carritoInicial);

    useEffect(() => {
      localStorage.setItem("carrito",JSON.stringify(carrito))
    }, [carrito])
    


    const agregarCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        // console.log(itemAgregado);

        const nuevoCarrito = [...carrito];

        const estaEnElCarrito = nuevoCarrito.find(prod => prod.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
            setCarrito(nuevoCarrito);

        } else {
            nuevoCarrito.push(itemAgregado)

        }
        setCarrito(nuevoCarrito);
        // console.log(carrito);
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0).toFixed(3)
    }

    const vaciarCarrito = () => {
        console.log("vaciar carrito");
        setCarrito([])
    }

    const value = {
        carrito,
        agregarCarrito,
        cantidadCarrito,
        precioTotal,
        vaciarCarrito
    }

    return (

        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
        
    )
    }