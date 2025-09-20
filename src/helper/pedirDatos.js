import data from "../components/MOCK_DATA.json"
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500);
    })
}


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find(el => el.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            }
            )
        }
    })
}

export const getInfoFirebase = async (data) => {
    let documento;
    if (data) {
        documento = await getDocs(data);
    } else {
        const productosRef = collection(db, "productos")
        documento = await getDocs(productosRef);
    }

    return documento
}


export const getDocFiresBase = async (id) => {

    const docRef = doc(db, "productos", id);
    const getDocument = await getDoc(docRef);

    return getDocument
}

export const getQuery = (categoria) => {
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where("category", "==", categoria))

    return q
}