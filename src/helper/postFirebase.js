import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config"

export const pedidosRef = async(pedido) => {
    try {
        let respuesta;
        const pedidoref = collection(db, "pedido");
        respuesta = await addDoc(pedidoref, pedido);
        
        // console.log(respuesta.id);

        return {
            status: 200,
            id:respuesta.id,
            message: "respuesta exitosa"
        }
        


    } catch (error) {
        throw {
            error
        };
    }


}