
export default function MostrarErrorCampo(props: MostrarErrorCampoProps)
{
    return(
        <div className="badge badge-danger">
                {props.Message}
        </div>
    )
}

interface MostrarErrorCampoProps
{
    Message:string
}


