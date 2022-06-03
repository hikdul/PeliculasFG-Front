import { Field, Form, Formik } from "formik"
import { generoDTO } from "../Generos/Generos.model"
import Button from "../utils/Button"

 export default function FiltroPeliculas()
 {
     const initialValues: FiltroPeliculasForm={
        titulo:'',
        generoId: 0,
        proximoExtreno: false,
        enCines: false
     }

     const generos:generoDTO[]=[{id:1,nombre:'Aventura'},{id:2,nombre:'Sci-Fi'},{id:3,nombre:'Comedia'}     ]
         

     return(
     <>
         <h3 className="card-title text-center">Filtro Peliculas</h3>

         <Formik 
         initialValues={initialValues}
         onSubmit={e=>console.info(e)}>
             {(formikProps)=>(
                 <Form>
                     
                     <div className="form-inline">
                         <div className="form-group mb-2">
                            <label htmlFor="titulo" className="sr-only">Title</label>
                            <input 
                                type="text" 
                                className="form-control rounded"
                                id="title"
                                placeholder="Ingrese Titulo"
                                {...formikProps.getFieldProps('titulo')} />
                         </div>
                    
                        <div className="form-group mx-sm-3 mb-2">
                            <select 
                                className="form-control rounded"
                                {...formikProps.getFieldProps('generoId')}>
                                    <option value="0">=== Seleccione Un Genero ===</option>
                                    {generos.map(genero=><option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                            </select>
                        </div>

                        <div className="form-group mx-sm-3 mb-2">
                            <Field 
                                className="form-check-input" 
                                id="enCines"
                                name="enCines"
                                type="checkbox"/>
                            <label
                                className="form-check-label"
                                htmlFor="enCines">
                                    En Cines?
                            </label>
                        </div>

                        <div className="form-group mx-sm-3 mb-2">
                            <Field 
                                className="form-check-input" 
                                name="proximoExtreno"
                                id="proximoExtreno"
                                type="checkbox"/>
                            <label
                                className="form-check-label"
                                htmlFor="proximoExtreno">
                                    Proximo Extreno?
                            </label>
                        </div>

                        <Button
                            className="btn btn-dark mb-2 mx-sm-3"
                            onClick={()=>formikProps.submitForm()}>
                            Filter
                        </Button>
                        <Button
                            className="btn btn-secondary mb-2 mx-sm-3"
                            onClick={()=> formikProps.setValues(initialValues)}>
                            Clean
                        </Button>
                     </div>

                 </Form>       
                )}
         </Formik>
     </>
     )
 }


 interface FiltroPeliculasForm
 {
     titulo: string
     generoId: number
     proximoExtreno: boolean
     enCines: boolean
 }