


export const Usuario = (props) => {

    let { nombre, edad, nacionalidad } = props;


    return (
        <div>
            <h1>{nombre}</h1>
            <p>edad: {edad}</p>
            <p> Nacionalidad: {nacionalidad}</p>
            <hr />
        </div>
    )
}