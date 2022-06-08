import { Typeahead } from 'react-bootstrap-typeahead'
import { actorPeliculaDTO } from "./Actor.model";


export default function TypeAheadActores(props: TypeAheadActoresProps )
{


    return(
        <>
            <label>Actores</label>   
            <Typeahead
                id="type"
                options={props.actores}
                labelKey={actor=>actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba El Nombre del actor"
                minLength={2}
                flip={true}
                onChange={actor=>{
                    console.info(actor)
                }} />
        
        </>
    )
}

interface TypeAheadActoresProps
{
    actores: actorPeliculaDTO[]
}