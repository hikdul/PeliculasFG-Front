import { ReactElement } from "react"

export default function Button(props: ButtonProps)
{
    return(
        <button type="button" className="btn btn-primary" >{props.children}</button>
    )
}

interface ButtonProps
{
    //Para que me permito meter texto de manera literal
    children: React.ReactNode
}