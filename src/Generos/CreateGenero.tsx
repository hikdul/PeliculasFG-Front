import { useHistory } from "react-router-dom";
import FormGeneros from "./FormGeneros";

export default function CreateGenero()
{
    const history=useHistory();

    const initialValues = { nombre:'' }
     
    return <>
        <h3>Crear Genero</h3>
        <FormGeneros modelo={initialValues} onSubmit={ e=>console.log(e)} />
        </>
}