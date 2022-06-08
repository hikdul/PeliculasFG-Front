import FormPeliculas from "./FormPeliculas";
import { PeliculaDTO_in } from "./Peliculas.model";

 export default function EditPelicula()
 {
    const initialValues: PeliculaDTO_in={
        titulo: 'Uncharter: Fuera del mapa',
        enCines: true,
        trailer: 'https://www.youtube.com/watch?v=3oV6ZSqhzKI&ab_channel=TrailersInSpanish',
        posterURL:'https://static.wikia.nocookie.net/doblaje/images/e/ee/Uncharted-pelicula.jpg/revision/latest?cb=20220114184921&path-prefix=es',
        fechaLaszamiento: new Date('2022-02-18T00:00:00')
    }

    return(
        <>
            <h3>Editar Pelicula</h3>
            <FormPeliculas
                model={initialValues} 
                onSubmit={e=>console.info(e)}/>
        </>
    )
 }