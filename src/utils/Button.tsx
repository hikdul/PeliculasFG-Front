import { type } from "os"
import { ReactElement } from "react"

export default function Button(props: ButtonProps)
{
    return(
        <button type={props.type} onClick={props.onClick} className="btn btn-primary" >{props.children}</button>
    )
}

interface ButtonProps
{
    //Para que me permito meter texto de manera literal
    children: React.ReactNode,
    onClick?(): void,
    type: 'button' | "submit"
}

Button.defaultProps={
    type:'button'
}