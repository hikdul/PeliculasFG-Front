import PeliculaInd from "./PeliculaInd";
import React from 'react';
import { pelicula } from "./Peliculas.model";
import css from './ListadoPeliculas.module.css'
import Cargando from "../utils/Cargandon";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props: ListadoPeliculasProps){
// El error so para al obetener como opcional el prop de pelicula, pero a su ves tambien me entrega error si no la hago...
// Por algunar razon al usar el famoso listado generico la aplicacion muere en automatico
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
                <ListadoGenerico listado={props.peliculas}>
                <div className={css.div}>
                    {props.peliculas.map(p=>
                        <PeliculaInd pelicula={p}
                        key={p.id}
                        />)
                    }
                </div>
            </ListadoGenerico>
            )
    }
}

interface ListadoPeliculasProps
{
    peliculas?:pelicula[]
}