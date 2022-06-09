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

    const [GenSel,setGenSel]=useState(mapear(props.GenerosSelect))
    const [NoGenSel,setNoGenSel]=useState(mapear(props.GeneroNoSelect))
    const [CineSel,setCineSel]= useState(mapear(props.CineSel))
    const [CineSelNo,setCineSelNo]= useState(mapear(props.CineNoSel))
    const [ActoresSel, setActoresSel]= useState<actorPeliculaDTO[]>(props.ActoresSeleccionados);

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
                values.actores = ActoresSel
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
                                    <TypeAheadActores 
                                        onAdd={actores=>{
                                            setActoresSel(actores)
                                        }}
                                        onRemove={actor=>{
                                            const axu= ActoresSel.filter(x=>x!==actor)
                                            setActoresSel(axu)
                                        }}
                                        listadoUI={
                                            (actor:actorPeliculaDTO)=><>
                                            <div className="m-1">
                                            <img 
                                                alt="foto actor" 
                                                src={actor.foto}
                                                style={{
                                                    height:'64px',
                                                    marginRight: '10px',
                                                    width: '64px'
                                                }} />
                                                {actor.nombre} / 
                                                <input 
                                                    placeholder="Personaje"
                                                    type="text"
                                                    value={actor.personaje}
                                                    onChange={e=>{
                                                        const index= ActoresSel.findIndex(x=>x.id===actor.id)
                                                        const actores = [...ActoresSel]
                                                        actores[index].personaje = e.currentTarget.value
                                                        setActoresSel(actores)
                                                    }}/>
                                            </div>
                                            </>
                                        }
                                        actores={ActoresSel}   />
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
    ActoresSeleccionados: actorPeliculaDTO[]
}