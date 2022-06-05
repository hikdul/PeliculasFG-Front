import { actorDTO_in } from "./Actor.model";
import FormularioActores from "./FormularioActores";

 export default function CreateActor()
 {
     
    const initialValues:actorDTO_in = {
        nombre:"",
        fechaNacimiento: undefined, //new Date('1990-03-22T06:54:03'),
        biografia:""
    }

     return(
        <>
            <h2>Nuevo Actor</h2>
                <FormularioActores
                modelo={initialValues}
                onSubmit={e=>console.log(e)}/>
        </>
     )
 }