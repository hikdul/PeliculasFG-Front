import React,{ ReactElement } from "react"
import Cargando from "./Cargandon"

export default function ListadoGenerico(props: ListadoGenericoProps)
{
    if(!props.listado)
    {
        if(props.cargandoUI)
            return props.cargandoUI
        return <Cargando />
    }
    else if(props.listado.length===0)
    {
        if(props.listadoVacioUI)
            return props.listadoVacioUI
        return (<>No Hay Elementos Para Mostrar</>)
    }
    else    
       return props.children
}

interface ListadoGenericoProps
{
    listado: any 
    children: ReactElement
    cargandoUI?: ReactElement
    listadoVacioUI?: ReactElement
}

