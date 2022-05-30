
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