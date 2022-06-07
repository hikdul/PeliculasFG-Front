import { cineCreacionDTO } from "./Cines.model"
import FormCines from "./FormCines"

 export default function EditCine()
 {

     const model: cineCreacionDTO={
         nombre:'Cine La Grita',
        latitud: 8.137421275889883,
        longitud: -71.98655891437284
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