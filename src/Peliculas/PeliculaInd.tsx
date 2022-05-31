import React from "react";
import { pelicula } from "./Peliculas.model";
import css from './PeliculaInd.module.css'

export default function PeliculaInd(props: PeliculaIndProps )
{
    const construirLink=()=>`/Pelicula/${props.pelicula.id}`
        return ( 
                <div className={css.div}>
                    <a href={construirLink()}>
                        <img src={props.pelicula.poster} alt="poster"/>
                    </a>
                    <p>
                        <a href={construirLink()}>{props.pelicula.title}</a>
                    </p>
                </div>
            )
}

interface PeliculaIndProps
{
    pelicula: pelicula
}