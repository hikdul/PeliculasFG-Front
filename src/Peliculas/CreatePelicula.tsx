import FormPeliculas from "./FormPeliculas";
import { PeliculaDTO_in } from "./Peliculas.model";

 export default function CreatePelicula()
 {
    const initialValues: PeliculaDTO_in={
        titulo: '',
        enCines: false,
        trailer: '',
    }

     return(
         <>
            <h2>Crear Pelicula</h2>
            <FormPeliculas
               model={initialValues} 
                onSubmit={e=>console.info(e)}/>
         </>
     )
 }