import { type } from "os"
import { ReactElement } from "react"

export default function Button(props: ButtonProps)
{
    return(
        <button 
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
            className={props.className}>
                {props.children}
        </button>
    )
}

interface ButtonProps
{
    //Para que me permito meter texto de manera literal
    children: React.ReactNode,
    onClick?(): void,
    type: 'button' | "submit"
    disabled: boolean,
    className:string
}

Button.defaultProps={
    type:'button',
    disabled:false,
    className:'btn btn-primary'
}