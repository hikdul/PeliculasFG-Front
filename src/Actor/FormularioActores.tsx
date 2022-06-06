import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorDTO_in } from "./Actor.model";
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImage from "../utils/FormGroupImage";
import FormGroupMarkDown from "../utils/FormGroupMarkDown";

export default function FormularioActores(props: FormularioActoresProps )
{
    
    const validationSchema = () =>  Yup.object({
                nombre: Yup.string()
                    .required("El nombre es importante")
                    .FirtsLetterMay(),
                fechaNacimiento: Yup.date()
                    .nullable()
                    .required("La Fecha De Nacimiento es Obligatoria")})

    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={ Yup.object({
                nombre: Yup.string()
                    .required("El nombre es importante")
                    .FirtsLetterMay(),
                fechaNacimiento: Yup.date()
                    .nullable()
                    .required("Este Campo es requerido")
            })}>
            {(formikProps)=>(
                <Form>
                    <div className="row">

                        <div className="col-md-6">
                            <FormGroupText 
                                field="nombre"
                                label="Nombre"/>
                        </div>

                        <div className="col-md-6">
                            <FormGroupFecha 
                                field="fechaNacimiento"
                               label="Ingrese Fecha De Nacimiento"/>
                        </div>
                        <div className="col-12">
                        <FormGroupImage 
                            field="foto"
                            label="Foto Actor"
                            imageURL={props.modelo.fotoUrl}/>
                        </div>
                        <FormGroupMarkDown 
                            field="biografia"
                            label="Biografia"/>

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

interface FormularioActoresProps
{
    modelo:actorDTO_in
    onSubmit(values: actorDTO_in, acciones: FormikHelpers<actorDTO_in>):void
}