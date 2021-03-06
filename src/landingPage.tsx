import { useEffect, useState } from "react";
import ListadoPeliculas from "./Peliculas/ListadoPeliculas";
import { landinPage } from "./Peliculas/Peliculas.model";

export default function LandingPage() {
  // y ahora vamos a una un useState para el cambio de estado
  const [peliculas, setPeliculas] = useState<landinPage>({});

  // esto es para simular el retraso de 1 segundo a la hora de cargar el timer
  useEffect(() => {
    const timerid = setTimeout(() => {
      setPeliculas({
        enCartelera: [
          {
            id: 233,
            title: "La Carrera Del Caballo Cojo",
            poster:
              "https://st3.depositphotos.com/8536802/35861/v/600/depositphotos_358619810-stock-video-riding-a-horse-young-woman.jpg",
          },
          {
            id: 233,
            title: "La Carrera Del Caballo Cojo",
            poster:
              "https://st3.depositphotos.com/8536802/35861/v/600/depositphotos_358619810-stock-video-riding-a-horse-young-woman.jpg",
          },
        ],
        ProximosEstrenos: [
          {
            id: 233,
            title: "La Carrera Del Caballo Cojo",
            poster:
              "https://st3.depositphotos.com/8536802/35861/v/600/depositphotos_358619810-stock-video-riding-a-horse-young-woman.jpg",
          },
          {
            id: 233,
            title: "La Carrera Del Caballo Cojo",
            poster:
              "https://st3.depositphotos.com/8536802/35861/v/600/depositphotos_358619810-stock-video-riding-a-horse-young-woman.jpg",
          },
        ],
      });
    }, 1000);
    return () => clearTimeout(timerid);
  });

  return (
    <>
      <h3>En Cartelera</h3>
      <ListadoPeliculas peliculas={peliculas.enCartelera} />

      <h3>Proximos Estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.ProximosEstrenos} />
    </>
  );
}
