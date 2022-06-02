import { useParams } from "react-router-dom"

export default function EditGenero()
{
    const {id} : any = useParams()

    return(
        <>
            <h3>Editar Genero</h3>
            <h5>el id es {id}</h5>
        </>
    )

}