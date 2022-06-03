import * as Yup from 'yup'

export default function ConfigurateValidations()
{

    ///###=====> ### <======###
    ///###=====> Asi se genera un metodo personalizado. <======###
    /// en este caso una que valida que la primera letra de string sea MAY
    ///###=====> ### <======###

    Yup.addMethod(Yup.string, 'FirtsLetterMay',function(){
        return this.test('firts-letter-may','La Primera Letra debe ser mayuscula',
        function (valor){
            if(valor && valor.length>0)
            {
                const firtLetter= valor.substring(0,1);
                return firtLetter===firtLetter.toUpperCase()
            }
            return true;
        })
    })
}



    ///###=====> ### <======###
    // luego de generar esto se tiene que correr la funcion una ves.
    // esto se hace desde la clase app.tsx ya que alli es donde nos inicia la aplicacion
    
    ///###=====> ### <======###
    // luego hay que introducir esta funcion dentro del schema de Yup.
    // eso se realiza en el archivo global.d.ts