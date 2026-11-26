export default function ListaUsuarios({ listaUsuarios }) { //[]
    return (
        <section>
            <h1 className="titulo">Usuarios registrados</h1>
            <p className="subtitulo">Estos son los usuarios guardados en localStorage.</p>

            {
                //condicionando si la lista de usuarios esta vacia
                listaUsuarios.length === 0 ? (
                    <div className="vacio">
                        <span className="emoji">📭</span>
                        <p>Todavía no hay usuarios registrados.</p>

                        <a href="/" className="btn btn-primario link-boton">Registrar el primero</a>
                    </div>
                ) : (
                    <div className="grid-usuarios">
                        {
                            listaUsuarios.map((usuario) => (

                                <article className="tarjeta" key={usuario.inputCorreo}>
                                    <div className="tarjeta-encabezado">
                                        <span className="avatar">A</span>
                                        <h3>{usuario.inputNombre}</h3>
                                    </div>
                                    <p className="dato">📧 {usuario.inputCorreo}</p>
                                    <p className="dato">📱 {usuario.inputTelefono}</p>

                                    <button className="btn btn-eliminar">Eliminar</button>
                                </article>
                            ))
                        }

                    </div>
                )
            }

        </section>
    );
}