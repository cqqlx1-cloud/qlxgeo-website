"use client";


import Link from "next/link";



const solutions=[


{

id:"construction",


title:{

en:"Construction Survey",

es:"Topografía de Construcción",

pt:"Levantamento de Construção",

fr:"Topographie de Construction",

ar:"مسح البناء"

},


desc:{

en:"High precision Leica surveying solutions for construction projects.",

es:"Soluciones Leica de alta precisión para proyectos de construcción.",

pt:"Soluções Leica de alta precisão para projetos de construção.",

fr:"Solutions Leica haute précision pour les projets de construction.",

ar:"حلول Leica عالية الدقة لمشاريع البناء."

},


image:"/solutions/construction.jpg"


},




{

id:"infrastructure",


title:{

en:"Infrastructure",

es:"Infraestructura",

pt:"Infraestrutura",

fr:"Infrastructure",

ar:"البنية التحتية"

},


desc:{

en:"Professional surveying equipment for roads, bridges and engineering projects.",

es:"Equipos profesionales para carreteras, puentes y proyectos de ingeniería.",

pt:"Equipamentos profissionais para estradas, pontes e engenharia.",

fr:"Équipements professionnels pour routes, ponts et ingénierie.",

ar:"معدات احترافية للطرق والجسور والمشاريع الهندسية."

},


image:"/solutions/infrastructure.jpg"


},





{

id:"mining",


title:{

en:"Mining Survey",

es:"Topografía Minera",

pt:"Topografia de Mineração",

fr:"Topographie Minière",

ar:"المسح التعدين"

},


desc:{

en:"Reliable GNSS and mapping solutions for mining operations.",

es:"Soluciones GNSS y cartográficas para minería.",

pt:"Soluções GNSS e mapeamento para mineração.",

fr:"Solutions GNSS et cartographiques pour l'exploitation minière.",

ar:"حلول GNSS والخرائط لعمليات التعدين."

},


image:"/solutions/mining.jpg"


},





{

id:"gis",


title:{

en:"GIS Mapping",

es:"Cartografía GIS",

pt:"Mapeamento GIS",

fr:"Cartographie SIG",

ar:"خرائط GIS"

},


desc:{

en:"Advanced spatial data collection and GIS integration solutions.",

es:"Soluciones avanzadas de datos espaciales e integración GIS.",

pt:"Soluções avançadas de dados espaciais e GIS.",

fr:"Solutions avancées de données spatiales et SIG.",

ar:"حلول البيانات المكانية وتكامل GIS."

},


image:"/solutions/gis.jpg"


},





{

id:"smart-city",


title:{

en:"Smart City",

es:"Ciudad Inteligente",

pt:"Cidade Inteligente",

fr:"Ville Intelligente",

ar:"المدينة الذكية"

},


desc:{

en:"Geospatial intelligence solutions for modern smart cities.",

es:"Soluciones geoespaciales para ciudades inteligentes.",

pt:"Soluções geoespaciais para cidades inteligentes.",

fr:"Solutions géospatiales pour les villes intelligentes.",

ar:"حلول المعلومات الجغرافية للمدن الذكية."

},


image:"/solutions/smart-city.jpg"


}



];





export default function SolutionsContent({

language="en"

}:{

language:string

}){



return (


<main

dir={language==="ar"?"rtl":"ltr"}

className="
bg-black
text-white
min-h-screen
pt-32
px-8
lg:px-20
pb-24
"

>


<div className="
max-w-7xl
mx-auto
">


<p

className="
text-blue-400
tracking-[0.3em]
"

>

QLXGEO SOLUTIONS

</p>




<h1

className="
text-5xl
font-bold
mt-6
"

>


{

language==="fr"

?"Solutions Géospatiales"

:

language==="es"

?"Soluciones Geoespaciales"

:

language==="pt"

?"Soluções Geoespaciais"

:

language==="ar"

?"الحلول الجيومكانية"

:

"Geospatial Solutions"

}


</h1>




<p

className="
text-gray-400
text-lg
mt-6
"

>

Professional Leica surveying solutions for global industries.

</p>





<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
"

>



{

solutions.map((item)=>(


<div

key={item.id}

className="
bg-zinc-900
border
border-white/10
rounded-3xl
overflow-hidden
"

>


<div

className="
h-52
bg-black
"

>

<img

src={item.image}

alt={item.title[language]}

className="
w-full
h-full
object-cover
"

/>

</div>




<div className="p-6">


<h2

className="
text-2xl
font-bold
"

>

{item.title[language]}

</h2>



<p

className="
text-gray-400
mt-4
"

>

{item.desc[language]}

</p>



<Link

href={`/${language}/contact`}

className="
inline-block
mt-6
text-blue-400
"

>

Request Solution →

</Link>



</div>


</div>



))


}


</div>



</div>


</main>


);


}