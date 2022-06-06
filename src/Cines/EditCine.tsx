import { cineCreacionDTO } from "./Cines.model"
import FormCines from "./FormCines"

 export default function EditCine()
 {

     const model: cineCreacionDTO={
         nombre:'Sambil'
     }

     return(
        <>
            <h3>Edit Cine</h3>
            <FormCines 
                model={model}
                onSubmit={values=>console.info(values)}/>
        </>
     )
 }