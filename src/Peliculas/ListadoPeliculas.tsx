import PeliculaInd from "./PeliculaInd";
import { pelicula } from "./Peliculas.model";
import css from './ListadoPeliculas.module.css'
import Cargando from "../utils/Cargandon";

export default function ListadoPeliculas(props: ListadoPeliculasProps){

    if(!props.peliculas){
        return<Cargando/>
    }
    else if(props.peliculas.length==0)
    {
        return<>No Hay Elementos Para mostrar</>
    }
    else
    {
        return(
                <div className={css.div}>
                    {props.peliculas.map(p=>
                        <PeliculaInd pelicula={p}
                        key={p.id}
                        />)
                    }
                </div>
            )
    }
}

interface ListadoPeliculasProps
{
    peliculas?:pelicula[]
}