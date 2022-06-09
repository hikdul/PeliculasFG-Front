import { prependOnceListener } from "process"
import { useEffect, useState } from "react"


export default function Paginacion(props: paginacionProps)
{

    const [listLinks, setListLinks]= useState<modeloLink[]>([])

    useEffect(()=>{
        const paginaAnteriorHabilitada= props.paginaActual!==1
        const PaginaAnterior = props.paginaActual - 1
        
        const links: modeloLink[]=[]

        links.push({
            texto:'Prev',
            habilitado: paginaAnteriorHabilitada,
            pagina : PaginaAnterior,
            activo : false
        })
        
        for (let i = 1; i <= props.cantidadTotalDePaginas; i++) {
            if( i>= props.paginaActual - props.radio && i < props.paginaActual + props.radio)
                links.push({
                    texto:  i.toString(),
                    activo: props.paginaActual===i,
                    habilitado: true,
                    pagina: i
                })
        }

        const paginaSiguienteHabilitada = props.paginaActual !== props.cantidadTotalDePaginas && props.cantidadTotalDePaginas>0
        const paginaSiguiente = props.paginaActual + 1
        links.push({
            texto: 'Next',
            pagina: paginaSiguiente,
            habilitado: paginaSiguienteHabilitada,
            activo: false
        })
        setListLinks(links)
    },[props.paginaActual, props.cantidadTotalDePaginas,props.radio])
// este array anterior le indica al uso effect que cada ves que cambie el valor de uno de estos elementos, 
// se dispare de nuevo el use Effect

    function getClass(link:modeloLink)
    {
        if(link.activo)
            return 'active pointer'
        if(!link.habilitado)
            return 'disabled'
        return 'pointer'
    }

    function seleccionaPagina(link:modeloLink)
    {
        if(link.pagina===props.paginaActual)
            return
        if(!link.habilitado)
            return
        props.onChange(link.pagina)
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {listLinks.map(link => 
                    <li 
                        key={link.texto}
                        onClick={()=>{seleccionaPagina(link)}}
                        className={`page-item cursor ${getClass(link)}`}>
                            <span className="page-link">{link.texto}</span>
                    </li>
                    )}
            </ul>
        </nav>
    )


}

interface modeloLink
{
    pagina:number
    habilitado: boolean
    texto: string
    activo: boolean
}

interface paginacionProps
{
    paginaActual: number
    cantidadTotalDePaginas: number
    radio: number
    onChange(pagina:number): void
}

Paginacion.defaultProps={
    radio: 3
}