import { Formik, Form, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import Button from "../utils/Button"
import FormGroupText from "../utils/FormGroupText"
import * as Yup from 'yup'
import { GeneraCreacionDTO } from "./Generos.model"

export default function FormGeneros(props: FormGenerosProps)
{

    return(
        <>
        <Formik 
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre:Yup
                    .string()
                    .max(50, 'La longitud maxima es de 50 Caracteres.')
                    .required("ingrese un nombre para Genero")
                    .FirtsLetterMay()
        })}>
            {(formikProps)=>
               <Form>
                   <FormGroupText label="Nombre" field="nombre" placeHolder="Ingrese Nombre"/>
                   <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                   <Link className="btn btn-secondary" to="/Generos">Cancelar</Link>
               </Form>
            }
        </Formik>
        </>
    )
}

interface FormGenerosProps
{
    modelo: GeneraCreacionDTO
    onSubmit(valores:GeneraCreacionDTO, action:FormikHelpers<GeneraCreacionDTO>):void
}