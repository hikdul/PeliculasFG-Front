

export interface actorDTO_in
{
    nombre: string
    fechaNacimiento?: Date
    foto?:File
    fotoUrl?:string
    biografia:string
}

export interface actorPeliculaDTO
{
    id: number
    nombre: string
    personaje: string
    foto: string
}
