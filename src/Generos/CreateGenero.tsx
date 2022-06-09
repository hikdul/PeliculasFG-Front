import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { GENEROS } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import FormGeneros from "./FormGeneros";
import { GeneraCreacionDTO } from "./Generos.model";

export default function CreateGenero()
{
    const history=useHistory();
    const [err, setErr]= useState<string[]>([])

    async function CrearGenero(genero:GeneraCreacionDTO) 
    {
        try 
        {
            await axios.post(GENEROS,genero)
            history.push('/Generos')
        } catch (error) {
            console.error(error)
            setErr(error.response.data)
        }
        
    }      

    const initialValues = { nombre:'' }
     
    return <>
        <h3>Crear Genero</h3>
        <MostrarErrores errores={err}/>
        <FormGeneros 
            modelo={initialValues} 
            onSubmit={ async values =>{
                await CrearGenero(values)
            }} />
        </>
}