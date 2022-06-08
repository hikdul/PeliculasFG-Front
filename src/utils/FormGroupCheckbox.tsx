import { Field } from "formik"


export default function FormGroupCheckbox(props: FormGroupCheckboxProps)
{

    return(
        <div className="form-group Form-check">
            <Field 
                className="form-group form-check"
                id={props.field}
                name={props.field}
                type="checkbox"/>
            <label htmlFor={props.label}>
                {props.label}
            </label>
        </div>
    )
}

interface FormGroupCheckboxProps
{
    field: string
    label: string
}