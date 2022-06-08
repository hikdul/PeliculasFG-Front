import { Form, Formik, FormikHelpers } from "formik"
import { useState } from "react"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import { actorPeliculaDTO } from "../Actor/Actor.model"
import TypeAheadActores from "../Actor/TypeAheadActores"
import { cineDTO } from "../Cines/Cines.model"
import { generoDTO } from "../Generos/Generos.model"
import Button from "../utils/Button"
import FormGroupCheckbox from "../utils/FormGroupCheckbox"
import FormGroupFecha from "../utils/FormGroupFecha"
import FormGroupImage from "../utils/FormGroupImage"
import FormGroupText from "../utils/FormGroupText"
import SelectorMultiple, { MultiSelectModel } from "../utils/SelectorMultiple"
import { PeliculaDTO_in } from "./Peliculas.model"

export default function FormPeliculas(props: FormPeliculasProps)
{

    const actores: actorPeliculaDTO[]=[
        {id:1, nombre:'hector de leon', personaje:"el loco de los perros", foto: 'https://pbs.twimg.com/profile_images/1523017006236291072/NihCEM3d_400x400.jpg'},
        {id:2, nombre:'hector Contreras', personaje:"el loco de los perros", foto: 'https://pbs.twimg.com/profile_images/1523017006236291072/NihCEM3d_400x400.jpg'},
        {id:3, nombre:'luis cerrada', personaje:"El jefe loquito", foto:'https://media-exp1.licdn.com/dms/image/C4E03AQG69B8EDWVgaA/profile-displayphoto-shrink_200_200/0/1536988170687?e=1659571200&v=beta&t=kDLxGBnc1m7iE3oRtqE83RIav1XD0cSkvE4_KE2DlT0'}
    ]

    const [GenSel,setGenSel]=useState(mapear(props.GenerosSelect))
    const [NoGenSel,setNoGenSel]=useState(mapear(props.GeneroNoSelect))
    const [CineSel,setCineSel]= useState(mapear(props.CineSel))
    const [CineSelNo,setCineSelNo]= useState(mapear(props.CineNoSel))

    function mapear(array:{id:number, nombre:string}[]): MultiSelectModel[]
    {
        return array.map(value=> {
            return {key:value.id, value:value.nombre}
        })
    }

    const validatinSchema=()=> Yup.object({
        titulo: Yup.string()
            .required("Este campo es obligatorio")
            .FirtsLetterMay()
    })
    
    return(
        <Formik
            initialValues={props.model}
            onSubmit={ (values,actions)=>{
                values.generosIds=GenSel.map(v=>v.key)
                values.cinesIds=CineSel.map(v=>v.key)
                props.onSubmit(values,actions)
            }}
            validationSchema={validatinSchema}>
                {(formikProps) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <FormGroupText label="Titulo" field="titulo"/>
                            </div>
                            <div className="col-md-3">
                                <FormGroupCheckbox label="En Cines?" field="enCines" />    
                            </div>
                            <div className="col-md-3" >
                                <FormGroupFecha label="Fecha Lanzamiento" field="fechaLanzamiento" />
                            </div>
                            <div className="col-md-3">
                                <FormGroupText label="Trailer" field="trailer" />
                            </div>
                            <div className="col-md-9">
                                <FormGroupImage label="Poster" field="poster" imageURL={props.model.posterURL}/>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Generos</label>
                                    <SelectorMultiple 
                                        seletcs={GenSel} 
                                        noSeletcs={NoGenSel} 
                                        onChange={ (seleccionados,noSeleccionados)=>{
                                            setGenSel(seleccionados)
                                            setNoGenSel(noSeleccionados)
                                        }}/>
                                        
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Cines</label>
                                    <SelectorMultiple 
                                        seletcs={CineSel} 
                                        noSeletcs={CineSelNo} 
                                        onChange={ (seleccionados,noSeleccionados)=>{
                                            setCineSel(seleccionados)
                                            setCineSelNo(noSeleccionados)
                                        }}/>
                                        
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <TypeAheadActores actores={actores}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <Button disabled={formikProps.isSubmitting} type='submit' >Guardar</Button>
                                <Link className="btn btn-secondary" to="/">Cancelar</Link>
                            </div>
                        </div>
                    </Form>
                )}
        </Formik>
    )
}

interface FormPeliculasProps
{
    model: PeliculaDTO_in
    onSubmit(values: PeliculaDTO_in, actions: FormikHelpers<PeliculaDTO_in>):void
    GenerosSelect: generoDTO[]
    GeneroNoSelect: generoDTO[]
    CineSel:cineDTO[]
    CineNoSel:cineDTO[]
}