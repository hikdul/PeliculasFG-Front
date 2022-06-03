import { actorDTO_in } from "./Actor.model";
import FormularioActores from "./FormularioActores";

 export default function CreateActor()
 {
     
    const initialValues:actorDTO_in=
    {
        nombre:"",
        fechaNacimiento:undefined
    }

     return(
        <>
            <h2>Create Actor</h2>
            <FormularioActores 
                modelo={initialValues}
                onSubmit={e=>console.log(e)}/>
        </>
     )
 }