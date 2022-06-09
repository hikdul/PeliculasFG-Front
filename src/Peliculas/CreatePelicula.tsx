import { cineDTO } from "../Cines/Cines.model";
import { generoDTO } from "../Generos/Generos.model";
import FormPeliculas from "./FormPeliculas";
import { PeliculaDTO_in } from "./Peliculas.model";

 export default function CreatePelicula()
 {
    const generosLLeno: generoDTO[]=[
        {id:1, nombre:'Aventura'},
        {id:2, nombre:'Comedia'},
        {id:3, nombre:'Sci-Fi'},
        {id:4, nombre:'Fantasia'},
    ]    
    const generosVacion:generoDTO[]=[]

    const CinesA:cineDTO[]=[
        {id:1, nombre:'La Grita'},
        {id:2, nombre:'Sambil'},
        {id:3, nombre:'Agora'},
        {id:4, nombre:'lago Mall'},
    ]
    const Cinesb:cineDTO[]=[]

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
                onSubmit={e=>console.info(e)}
                GenerosSelect={generosLLeno}
                GeneroNoSelect={generosVacion} 
                CineSel={CinesA}
                CineNoSel={Cinesb}
                ActoresSeleccionados={[]}/>
         </>
     )
 }