import { actorDTO_in } from "./Actor.model";
import FormularioActores from "./FormularioActores";

 export default function EditActor()
 {
    const initialValues:actorDTO_in=
    {
        nombre:'Hector Luis Contreras Di Girolamo',
        fechaNacimiento:new Date('1990-22-03T07:53:00'),
        biografia:'Nada agregado por el momento',
        fotoUrl:'https://garajedelrock.com/wp-content/uploads/2021/09/machine-gun-kelly-critica-a-corey-taylor-1024x555.jpg'
    }

     return(<>
        <h3>Edit Actor</h3>
        <FormularioActores
                modelo={initialValues}
                onSubmit={e=>console.log(e)}/>
     </>)

 }