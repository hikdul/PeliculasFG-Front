import { useFormikContext } from "formik"
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupFecha(props: FormGroupFechaProp)
{

    const{values, validateForm,touched,errors}=useFormikContext<any>();

    return (
        <div  className="form-group">
            <label htmlFor={props.field}>{props.label}</label>
            <input 
                type='date'
                className="form-control"
                name={props.field}
                id={props.field}
                defaultValue={values[props.field]?.toLocaleDateString('en-CA')}
                onChange={e=>{
                    const date = new Date(e.currentTarget.value+'T00:00:00')
                    values[props.field]=date
                    validateForm()
                }}/>
                {touched[props.field] && errors[props.field]    ?
                    <MostrarErrorCampo Message={errors[props.label]?.toString()!} />
                : null}
        </div>
    )
}
// =========== ###
//Nota:
// al usar '!' luego del tostring en el mensaje de error se ve como un casteo a string... 
// ojo en caso de no usarlo se tendria que generar un error y tendria que generor un default prop para el componete de mostrar error
// =========== ###
interface FormGroupFechaProp
{
    field:string
    label:string
}


