import { cineDTO } from "../Cines/Cines.model";
import { generoDTO } from "../Generos/Generos.model";
import FormPeliculas from "./FormPeliculas";
import { PeliculaDTO_in } from "./Peliculas.model";

 export default function EditPelicula()
 {

    const CinesA:cineDTO[]=[
        {id:3, nombre:'Agora'},
        {id:4, nombre:'lago Mall'},
    ]
    const Cinesb:cineDTO[]=[
        {id:1, nombre:'LVa Grita'},
        {id:2, nombre:'Sambil'},
    ]
    const generosLLeno: generoDTO[]=[
        {id:2, nombre:'Comedia'},
        {id:3, nombre:'Sci-Fi'},
    ]    
    const generosVacion:generoDTO[]=[
        {id:1, nombre:'Aventura'},
        {id:4, nombre:'Fantasia'},
    ]
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
                onSubmit={e=>console.info(e)}
                GenerosSelect={generosLLeno}
                CineSel={CinesA}
                CineNoSel={Cinesb}
                GeneroNoSelect={generosVacion} />
        </>
    )
 }