import { Form, Formik, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import Button from "../utils/Button"
import FormGroupCheckbox from "../utils/FormGroupCheckbox"
import FormGroupFecha from "../utils/FormGroupFecha"
import FormGroupImage from "../utils/FormGroupImage"
import FormGroupText from "../utils/FormGroupText"
import { PeliculaDTO_in } from "./Peliculas.model"

export default function FormPeliculas(props: FormPeliculasProps)
{
      
    const validatinSchema=()=> Yup.object({
        titulo: Yup.string()
            .required("Este campo es obligatorio")
            .FirtsLetterMay()
    })
    
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={validatinSchema}>
                {(formikProps) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <FormGroupText label="Titulo" field="titulo"/>
                            </div>
                            <div className="col-md-3">
                                <FormGroupCheckbox label="En Cines?" field="enCines" />    
                            </div>
                            <div className="col-md-3" >
                                <FormGroupFecha label="Fecha Lanzamiento" field="fechaLanzamiento" />
                            </div>
                            <div className="col-md-3">
                                <FormGroupText label="Trailer" field="trailer" />
                            </div>
                            <div className="col-md-9">
                                <FormGroupImage label="Poster" field="poster" imageURL={props.model.posterURL}/>
                            </div>
                            <div className="col-12">
                                <Button disabled={formikProps.isSubmitting} type='submit' >Guardar</Button>
                                <Link className="btn btn-secondary" to="/">Cancelar</Link>
                            </div>
                        </div>
                    </Form>
                )}
        </Formik>
    )
}

interface FormPeliculasProps
{
    model: PeliculaDTO_in
    onSubmit(values: PeliculaDTO_in, actions: FormikHelpers<PeliculaDTO_in>):void
}