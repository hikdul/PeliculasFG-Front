import { useMapEvent } from "react-leaflet"
import { CoordenadaDTO } from "./Coordenada"


export default function ClickMapa(props: ClickMapProps)
{
    useMapEvent('click', e =>{
        props.setPunto({
            lat:e.latlng.lat,
            lng:e.latlng.lng
         })
    })
    return null
}

interface ClickMapProps
{
    setPunto(coordenadas: CoordenadaDTO):void

}