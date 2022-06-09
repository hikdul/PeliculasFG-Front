

export default function MostrarErrores(props: MostrarErroresProps)
{
    const style = {color:'red'}
    return(
        <>
            {props.errores ? <ul style={style}>
                            {props.errores.map((error,index)=> 
                                <li key={index}>{error}</li>
                            )}
                            </ul>
                        : null}
        </>
    )
}

interface MostrarErroresProps
{
    errores?: string[]
}