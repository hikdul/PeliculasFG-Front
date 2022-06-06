import { Marker } from "react-leaflet";
import { CoordenadaDTO } from "./Coordenada";

export default function PrintMarker(props: CoordenadaDTO)
{
    return(
        <Marker position={[props.lat,props.lng]}/>
    )
}