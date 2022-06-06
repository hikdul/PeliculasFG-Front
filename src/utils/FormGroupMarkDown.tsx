import { Field, useFormikContext } from "formik"
import ReactMarkdown from "react-markdown"
import './FGMarkdown.css'

export default function FormGroupMarkDown(props: FormGroupMarkDownProps)
{
    const {values} = useFormikContext<any>()

  return(
    <div className="row">
    <div className="form-grop form-markdown">
        <div className="col-md-6">

            <label>{props.label}</label>

            <Field 
                name={props.field}     
                as="textarea"
                className="form-textarea"/>
        </div>
        <div className="col-md-6">
            <label> {props.label} (Preview)</label>
            <div className="markdown-container">
                <ReactMarkdown>{values[props.field]}</ReactMarkdown>
            </div>
        </div>
    </div>
    </div>
  )
}

interface   FormGroupMarkDownProps
{
    field: string
    label: string
}