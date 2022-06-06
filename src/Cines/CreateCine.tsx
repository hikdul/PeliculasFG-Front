import { cineCreacionDTO } from "./Cines.model";
import FormCines from "./FormCines";

 export default function CreateCine()
 {
     const model:cineCreacionDTO={
         nombre:''
     }
     
     return(
        <>
            <h3>Create Cine</h3>
            <FormCines 
                model={model}
                onSubmit={value=>console.info(value)}/>
        </>
     )
 }