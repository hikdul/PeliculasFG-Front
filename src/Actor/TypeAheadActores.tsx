import { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { actorPeliculaDTO } from "./Actor.model";
import IndexActor from './indexActor';


export default function TypeAheadActores(props: TypeAheadActoresProps )
{
    const actores: actorPeliculaDTO[]=[
           {id:1, nombre:'hector de leon', personaje:"", foto: 'https://pbs.twimg.com/profile_images/1523017006236291072/NihCEM3d_400x400.jpg'},
           {id:2, nombre:'hector Contreras', personaje:"", foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMSdBqMZWZXzTWDNlrmFmpHuZIXvkxCnL3l7umZWnc9zbkoP8MNCWc5AJ-C40Uitkke8&usqp=CAU'},
           {id:3, nombre:'luis cerrada', personaje:"", foto:'https://media-exp1.licdn.com/dms/image/C4E03AQG69B8EDWVgaA/profile-displayphoto-shrink_200_200/0/1536988170687?e=1659571200&v=beta&t=kDLxGBnc1m7iE3oRtqE83RIav1XD0cSkvE4_KE2DlT0'}
       ]

    const Select:actorPeliculaDTO[]=[]
    
    const [dragElement,setDragElement]= useState<actorPeliculaDTO | undefined>(undefined)

    function DriverDragStart(actor:actorPeliculaDTO)
    {
        setDragElement(actor)
    }

    function DriverDragOver(actor:actorPeliculaDTO)
    {
        if(!dragElement)
            return
        if(actor.id!== dragElement.id)
        {
            const indexDragElement= props.actores.findIndex(x=> x.id === dragElement.id)
            const actorIndex= props.actores.findIndex(x => x.id === actor.id)

            const actores = [...props.actores]
            actores[actorIndex] = dragElement
            actores[indexDragElement] = actor
            props.onAdd(actores) 
        }
    }

    return(
        <>
            <label>Actores</label>   
            <Typeahead
                id="type"
                options={actores}
                labelKey={actor=>actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba El Nombre del actor"
                minLength={2}
                flip={true}
                selected={Select}
                onChange={actor=>{
                    if(props.actores.findIndex(x=>x.id==actor[0].id))
                        props.onAdd([...props.actores,actor[0]])
                }}
                renderMenuItemChildren={actor=>(
                        <>
                            <img 
                                alt="foto actor" 
                                src={actor.foto}
                                style={{
                                    height:'64px',
                                    marginRight: '10px',
                                    width: '64px'
                                }} />
                            <span>{actor.nombre}</span>
                        </>
                    )}/>
                <ul className='list-group mt-3'>
                    {props.actores.map(actor=> <li
                        className='list-group-item list-group-item-action'
                        key={actor.id}
                        draggable={true}
                        onDragStart={()=>DriverDragStart(actor)}
                        onDragOver={()=>DriverDragOver(actor)}> 
                            {props.listadoUI(actor)}
                            <span 
                                className='badge badge-danger badge-pill pointer'
                                style={{ marginLeft: '0.5rem'}}
                                onClick={()=>props.onRemove(actor)}>
                                X
                            </span>
                    </li>)}
                </ul>
        </>
    )
}

interface TypeAheadActoresProps
{
    actores: actorPeliculaDTO[]
    onAdd(actores:actorPeliculaDTO[]):void
    listadoUI(actor: actorPeliculaDTO):ReactElement
    onRemove(actor:actorPeliculaDTO):void
}