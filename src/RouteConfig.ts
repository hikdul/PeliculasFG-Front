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
import NotFoundPage from "./utils/NotFoundPage"

const rutas =
[

    {path:'/Peliculas/Create', component: CreateGenero},
    {path:'/Peliculas/Edit/:id(\\d+)', component: EditGenero},
    {path:'/Peliculas/Filtrar', component: FiltroPeliculas},
    
    {path:'/Generos/Create', component: CreateGenero},
    {path:'/Generos/Edit/:id(\\d+)', component: EditGenero},
    {path:'/Generos', component: indexGeneros,exact:true},
    
    {path:'/Actores/Create', component: CreateActor},
    {path:'/Actores/Edit/:id(\\d+)', component: EditActor},
    {path:'/Actores', component: IndexActor,exact:true},

    {path:'/Cines/Create', component: CreateCine},
    {path:'/Cines/Edit/:id(\\d+)',   component: EditCine},
    {path:'/Cines',        component: IndexCines,exact:true},
    
    // Pagina inicial
    {path:'/' , component:LandingPage, exact:true},
    {path:'*' , component:NotFoundPage}
    
]


export default rutas