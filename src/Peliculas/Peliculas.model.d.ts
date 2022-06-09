import { actorPeliculaDTO } from "../Actor/Actor.model"

export interface pelicula
{
    id:number
    title:string
    poster:string
}

export interface landinPage{
    enCartelera?: pelicula[]
    ProximosEstrenos?: pelicula[]

}

export interface PeliculaDTO_in
{
    titulo: string
    enCines: boolean
    trailer: string
    fechaLaszamiento?: Date
    poster?: File
    posterURL?: string
    generosIds?: number[]
    cinesIds?:number[]
    actores?:actorPeliculaDTO[]
}
