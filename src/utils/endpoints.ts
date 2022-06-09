// las variables de ambiente se crearon en los archivas '.env' && '.env.dev...'
//y asi obtengo la variable de ambiente de react

// TODO : Verificar por que no me lo toma
// el modo legal es el que se muestra a continuacion, pero por alguna razon no me lo toma
//const APIURL = process.env.REACT_APP_API_URL
const APIURL = 'https://localhost:44384/API'

export const GENEROS= `${APIURL}/Generos`
export const GENEROSTODOS= `${APIURL}/Generos/Todos`

export const ACTORES = `${APIURL}/Actores`

export const CINES = `${APIURL}/Cines`

export const PELICULAS = `${APIURL}/Peliculas`
export const PELICULASFILTRAR = `${APIURL}/Peliculas/Filtrar`

