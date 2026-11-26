import { useForm } from "react-hook-form"

// llamando las props compartidas
export default function Registro({ listaUsuarios, setListaUsuarios }) {
    const {
        register,  //captura cada dato de cada input (entrada de dato)
        handleSubmit, // evento que se va activar cuando la persona haga el envio (accion)
        formState: { errors },
        reset
    } = useForm()

    // funcion para agregar un nuevo usuario
    const crearUsuario = (data) => {
        //code...
        console.log(data) //datos del usuario

        const nuevaListaUsuarios = [...listaUsuarios, data];
        // registrar el usuario en la lista de usuarios (actualizar el estado)
        setListaUsuarios(nuevaListaUsuarios)

        // actualizando tambien el localstorage
        localStorage.setItem("listaUsuarios", JSON.stringify(nuevaListaUsuarios))

        //limpiamos el formulario
        reset()
    }

    console.log(listaUsuarios)
    return (
        <section>
            <h1 className="titulo">Registro de usuario</h1>
            <p className="subtitulo">Completa los datos para agregar un nuevo usuario.</p>

            {/** utilizamos el evento onSubmit para llamar el handle y la accion */}
            <form className="formulario" onSubmit={handleSubmit(crearUsuario)} noValidate>
                <div className="campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder="Ej. Ana López" {...register("inputNombre", {
                        required: "Este campo es requerido"
                    })} />
                    <p className="error">{errors.inputNombre?.message}</p>
                </div>

                <div className="campo">
                    <label htmlFor="correo">Correo</label>
                    <input id="correo" type="email" placeholder="ana@correo.com" {...register("inputCorreo")} />
                </div>

                <div className="campo">
                    <label htmlFor="telefono">Teléfono</label>
                    <input id="telefono" type="tel" placeholder="7777-7777" {...register("inputTelefono")} />
                </div>

                <button type="submit" className="btn btn-primario">Registrar usuario</button>
            </form>
        </section>
    );
}