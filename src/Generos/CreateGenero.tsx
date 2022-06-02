import { Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom"
import Button from "../utils/Button";

export default function CreateGenero()
{
    const history=useHistory();

    const initialValues = {
        nombre:''
    }
     

    return <>
        <h3>Crear Genero</h3>
        <Formik 
        initialValues={initialValues}
        onSubmit={values => {console.info(values)}}
        >
            <Form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <Field name="nombre" className="form-control"/>
                </div>
                <Button type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/Generos">Cancelar</Link>
            </Form>

        </Formik>
    </>
}