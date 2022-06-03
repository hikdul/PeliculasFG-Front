// eslint-disable-next-line @typescript/eslint/no-unused/vars
import {StringSchema} from 'yup'

// luego agrego el elemento a primera letra mayuscula
declare module 'yup'
{
    class StringSchema
    {
        FirtsLetterMay():this;
    }
}


///###=====> ### <======###
// aqui importamos el stringSchema
// luego agrogamos la funcion al Schema y listo
// la linea : >>>   // eslint-disable-next-line @typescript/eslint/no-unused/vars <<<
// esa linea es para que no me entrege ciertos problemas con el uso de typescrip... lo mejor es agregarla
