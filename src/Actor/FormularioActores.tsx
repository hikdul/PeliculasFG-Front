import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorDTO_in } from "./Actor.model";
import * as Yup from 'yup'

export default function FormularioActores(props: FormularioActoresProps )
{

    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={ Yup.object({
                nombre: Yup.string().required("El nombre es importante").FirtsLetterMay()
            })}>
            {(formikProps)=>(
                <Form>
                    <FormGroupText 
                        field="nombre"
                        label="Nombre"/>
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