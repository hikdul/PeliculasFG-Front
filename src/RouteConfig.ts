import CreateActor from "./Actor/CreateActor"
import EditActor from "./Actor/EditActor"
import IndexActor from "./Actor/indexActor"
import CreateCine from "./Cines/CreateCine"
import EditCine from "./Cines/EditCine"
import IndexCines from "./Cines/indexCines"
import CreateGenero from "./Generos/CreateGenero"
import EditGenero from "./Generos/EditGenero"
import indexGeneros from "./Generos/IndexGeneros"
import LandingPage from "./landingPage"
import FiltroPeliculas from "./Peliculas/FiltroPeliculas"

const rutas =
[

    {path:'/Peliculas/Create', component: CreateGenero},
    {path:'/Peliculas/Edit', component: EditGenero},
    {path:'/Peliculas/Filtrar', component: FiltroPeliculas},
    
    {path:'/Generos/Create', component: CreateGenero},
    {path:'/Generos/Edit', component: EditGenero},
    {path:'/Generos', component: indexGeneros,exact:true},
    
    {path:'/Actores/Create', component: CreateActor},
    {path:'/Actores/Edit', component: EditActor},
    {path:'/Actores', component: IndexActor,exact:true},

    {path:'/Cines/Create', component: CreateCine},
    {path:'/Cines/Edit',   component: EditCine},
    {path:'/Cines',        component: IndexCines,exact:true},
    
    // Pagina inicial
    {path:'/' , component:LandingPage, exact:true}
    
]


export default rutas