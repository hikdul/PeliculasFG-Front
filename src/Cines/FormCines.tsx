import { Form, Formik, FormikHelpers } from "formik"
import { cineCreacionDTO } from "./Cines.model"
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText"
import Button from "../utils/Button"
import { Link } from "react-router-dom"
import Mapa from "../utils/mapa"

export default function FormCines(props: FormCinesProps)
{
    // esto lo hago para separar esta logica...
    // opino que seria bueno tener una carpeta o un espacion solo poro exportar las validaciones
    const validationSchema = ()=> Yup.object({
        nombre: Yup.string()
            .required("El Nombre Del Cine Es Obligatorio")
            .FirtsLetterMay()
    })
    
    return(
        <Formik
         initialValues={props.model}
         onSubmit={props.onSubmit}
         validationSchema={validationSchema} >
             {(formikProps)=>(
                 <Form>
                     <FormGroupText field="nombre" label="Ingrese Nombre Del Cine"/>
                    <div style={{marginBottom: '1rem'}}>
                        <Mapa />
                    </div>
                    <Button
                        disabled={formikProps.isSubmitting}
                        type="submit">
                        Guardar
                    </Button>
                    <Link
                        className="btn btn-secondary"
                        to={"/Actores"}>
                        Cancelar
                    </Link>
                 </Form>
             )}

        </Formik>
    )
}



interface FormCinesProps
{
    model: cineCreacionDTO
    onSubmit(values: cineCreacionDTO, actions: FormikHelpers<cineCreacionDTO>): void
}