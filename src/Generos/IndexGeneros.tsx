import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { GENEROS } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import Paginacion from "../utils/paginacion";
import { generoDTO } from "./Generos.model";



export default function IndexGeneros()
{
    const [generos,setGeneros]= useState<generoDTO[]>()
    const [totalPag, setTotalPag]=useState(0)
    const [recordsPorPagina, SetRecordsPorPagina]=useState(10)
    const [pagina, setPagina]=useState(1)

    //asi se usa axios    
    useEffect(()=>{
        console.log('Peticion a => ' + GENEROS)
        axios.get(GENEROS, {
            params:{pagina, recordsPorPagina}
            
        }).then((resp:AxiosResponse<generoDTO[]>) => {
                const totalDeRegistro = 
                    parseInt(resp.headers['cantidadtotalregistros'],10)
                setTotalPag(Math.ceil(totalDeRegistro/recordsPorPagina))
                console.info(resp.data)
                setGeneros(resp.data)
            })
    },[pagina,recordsPorPagina])
    //el objeto vacio es para que el axio no se conecte si no una sola ves
    return(
        <>
            <Link className="btn btn-dark" to="Generos/Create">Nuevo</Link>
            <h3> Generos</h3>

            <div className="form-group mt-3" style={{width: '150px'}}>
                <label className="label-form">Registros Por Pagina</label>
                <select 
                    defaultValue={10}
                    onChange={e =>{
                        setPagina(1)
                        SetRecordsPorPagina(parseInt(e.currentTarget.value,10))
                    }}
                    className="form-control">
                        <option value={2}>2</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                </select>
            </div>
            <Paginacion
                cantidadTotalDePaginas={totalPag}
                paginaActual={pagina}
                onChange={nuevaPagina=>setPagina(nuevaPagina)}/>
                
            <ListadoGenerico listado={generos}>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generos?.map(genero=>
                                <tr>
                                    <td className="btn-group">
                                        <Link className="btn btn-success" to={`/Generos/${genero.id}`}>
                                            Edit
                                        </Link>
                                        
                                        <Button className="btn btn-danger">
                                            Detele
                                        </Button>
                                    </td>    
                                    <td>
                                        {genero.nombre}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </ListadoGenerico>
        </>
    ) 
}
