import { Field, useFormikContext } from "formik"
import ReactMarkdown from "react-markdown"
import './FGMarkdown.css'

export default function FormGroupMarkDown(props: FormGroupMarkDownProps)
{
    const {values} = useFormikContext<any>()

  return(
    <div className="form-grop form-markdown">
            <label>{props.label}</label>
        <div>
            <Field 
                name={props.field}     
                as="textarea"
                className="form-textarea"/>
        </div>
        <div>
            <label> {props.label} (Preview)</label>
            <div className="markdown-container">
                <ReactMarkdown>{values[props.field]}</ReactMarkdown>
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