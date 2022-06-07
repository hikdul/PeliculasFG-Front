import { useFormikContext } from "formik"
import { CoordenadaDTO } from "./Coordenada"
import Mapa from "./mapa"


export default function MapaFormulario(props: MapaFormularioProps)
{
    const{values}=useFormikContext<any>();

    function updateFields(coordenadas:CoordenadaDTO)
    {
        values[props.campoLat]=coordenadas.lat
        values[props.campoLon]=coordenadas.lng
    }

    return (
        <Mapa 
            coordenadas={props.coordenadas}
            dirverMapClick={updateFields}
        />
    )
}

interface MapaFormularioProps
{
    coordenadas: CoordenadaDTO[]
    campoLat: string
    campoLon: string   
}

MapaFormulario.defaultProps = {
    coordenadas: []
}