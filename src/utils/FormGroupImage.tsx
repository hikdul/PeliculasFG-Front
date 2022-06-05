import { useFormikContext } from "formik"
import { ChangeEvent, useState } from "react"

export default function FormGroupImage(props: FormGroupImageProps)
{
    const divStyle={marginTop:'10px'}
    const imgStyle={width:'450px'}

    const[imageB64,setImeagB64]=useState('')
    const[imagenDB,setImagenDB]=useState(props.imageURL)
    const {values}=useFormikContext<any>()

    // ==> Para manejar el uso de las imagenes en el proyecto
    const driverOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.files)
        {
            const file= e.currentTarget.files[0]
            ToBase64(file)
                .then((RepresentacionB64string:string)=> setImeagB64(RepresentacionB64string))
                .catch(err=> console.error(err))

            values[props.field] = file
            setImagenDB('')
        }
    }
    // Para comvertir la imagen a base 64
    const ToBase64=(file:File)=>{
        return new Promise<string>((res,rej)=>{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload=()=>res(reader.result as string)
            reader.onerror = error=>rej(error)
        })
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div >
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.gfif,.fif,.gif"
                    onChange={driverOnChange}/>
            </div>
            {imageB64?
                <div style={divStyle}>
                    <img style={imgStyle} src={imageB64} alt="Imagen Seleccionada" />
                </div>
            :null}
            {imagenDB?
                <div style={divStyle}>
                    <img style={imgStyle} src={imagenDB} alt="Imagen Seleccionada" />
                </div>
            :null}
        </div>
    )
}

interface FormGroupImageProps
{
    field: string
    label: string
    imageURL: string
}

FormGroupImage.defaultProps={
    imageURL:''
}