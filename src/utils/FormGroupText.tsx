import { Field, ErrorMessage } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText(props: FormGroupTextProp)
{
    return(
                <div className="form-group">
                    {props.label ? <label htmlFor={props.field}>{props.label}</label> : null}
                    <Field placeHolder={props.placeHolder} name={props.field} className="form-control"/>
                    <ErrorMessage name={props.field} >{Message=><MostrarErrorCampo Message={Message}/> }</ErrorMessage>
                </div>
    )
}

interface FormGroupTextProp
{ 
    field:string
    label?:string
    placeHolder?:string

}