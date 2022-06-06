import { MapContainer, TileLayer } from "react-leaflet"
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import ClickMapa from "./ClickMapa"
import { useState } from "react"
import { CoordenadaDTO } from "./Coordenada"
import PrintMarker from "./PrintMarker"

  
let DefaultIcon= L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16,37]
})
L.Marker.prototype.options.icon=DefaultIcon

export default function Mapa(props: mapaProps)
{
    const [coordenadas,setCoordenadas]=useState<CoordenadaDTO[]>([])

    return(
        <MapContainer
            center={[8.129885, -71.977994]}
            zoom={14}
            style={{height: props.height}}>
            <TileLayer 
                attribution="Probando React Leaflef"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
            <ClickMapa setPunto={coordenadas=>{
                setCoordenadas([coordenadas])
            }} />    
            {coordenadas.map(coo=>  
                <PrintMarker key={coo.lat + coo.lng}
                {...coo}/>)}           
        </MapContainer>
    )
}

interface mapaProps
{
    height:string
}

Mapa.defaultProps={
    height:'500px'
}
