import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GENEROS } from "../utils/endpoints";
import { generoDTO } from "./Generos.model";



export default function IndexGeneros()
{
    //asi se usa axios    
    useEffect(()=>{
        console.log('Peticion a => ' + GENEROS)
        axios.get(GENEROS)
            .then((resp:AxiosResponse<generoDTO[]>)=>{
                console.info(resp.data)
            })
    },[])
    //el objeto vacio es para que el axio no se conecte si no una sola ves
    return(
        <>
            <Link className="btn btn-dark" to="Generos/Create">Nuevo</Link>
            <h3> Generos</h3>

        </>
    ) 
}
