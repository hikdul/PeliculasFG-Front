import { useParams } from "react-router-dom"
import FormGeneros from "./FormGeneros"

export default function EditGenero()
{
    const {id} : any = useParams()
    const initialValues= { nombre: "Aventura" }

    return(
        <>
            <h3>Editar Genero id:{id}</h3>
            <FormGeneros modelo={initialValues} onSubmit={e=>console.info(e)}/>
        </>
    )

}