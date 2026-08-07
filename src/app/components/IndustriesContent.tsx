"use client";


import Link from "next/link";



const industries=[


{

id:"construction",


image:"/industries/construction.jpg",


title:{

en:"Construction Companies",
es:"Empresas de Construcción",
pt:"Empresas de Construção",
fr:"Entreprises de Construction",
ar:"شركات البناء"

},


desc:{

en:"Precision surveying solutions for construction projects and contractors.",

es:"Soluciones de medición de precisión para proyectos de construcción.",

pt:"Soluções de levantamento de precisão para projetos de construção.",

fr:"Solutions de mesure de précision pour les projets de construction.",

ar:"حلول مساحية دقيقة لمشاريع البناء."

}

},




{

id:"surveying",


image:"/industries/surveying.jpg",


title:{

en:"Surveying Companies",

es:"Empresas Topográficas",

pt:"Empresas de Topografia",

fr:"Sociétés d'Arpentage",

ar:"شركات المساحة"

},


desc:{

en:"Professional GNSS RTK and total station solutions for surveyors.",

es:"Equipos GNSS RTK y estaciones totales para topógrafos.",

pt:"Equipamentos GNSS RTK e estações totais.",

fr:"Solutions GNSS RTK et stations totales professionnelles.",

ar:"حلول GNSS RTK والمحطات الشاملة للمساحين."

}

},




{

id:"government",


image:"/industries/government.jpg",


title:{

en:"Government Projects",

es:"Proyectos Gubernamentales",

pt:"Projetos Governamentais",

fr:"Projets Gouvernementaux",

ar:"المشاريع الحكومية"

},


desc:{

en:"Geospatial solutions for public infrastructure and mapping.",

es:"Soluciones geoespaciales para infraestructura pública.",

pt:"Soluções geoespaciais para infraestrutura pública.",

fr:"Solutions géospatiales pour les infrastructures publiques.",

ar:"حلول جغرافية للبنية التحتية العامة."

}

},




{

id:"mining",


image:"/industries/mining.jpg",


title:{

en:"Mining Industry",

es:"Industria Minera",

pt:"Indústria de Mineração",

fr:"Industrie Minière",

ar:"صناعة التعدين"

},


desc:{

en:"Reliable surveying technology for mining operations.",

es:"Tecnología de medición para operaciones mineras.",

pt:"Tecnologia de levantamento para mineração.",

fr:"Technologie d'arpentage pour l'exploitation minière.",

ar:"تقنيات المسح لعمليات التعدين."

}

},




{

id:"agriculture",


image:"/industries/agriculture.jpg",


title:{

en:"Precision Agriculture",

es:"Agricultura de Precisión",

pt:"Agricultura de Precisão",

fr:"Agriculture de Précision",

ar:"الزراعة الدقيقة"

},


desc:{

en:"UAV mapping and GNSS solutions for modern agriculture.",

es:"Soluciones UAV y GNSS para agricultura moderna.",

pt:"Soluções UAV e GNSS para agricultura moderna.",

fr:"Solutions UAV et GNSS pour l'agriculture moderne.",

ar:"حلول UAV و GNSS للزراعة الحديثة."

}

},




{

id:"gis",


image:"/industries/gis.jpg",


title:{

en:"GIS & Mapping",

es:"GIS y Cartografía",

pt:"GIS e Mapeamento",

fr:"SIG et Cartographie",

ar:"GIS والخرائط"

},


desc:{

en:"Spatial data collection and GIS integration solutions.",

es:"Soluciones de datos espaciales e integración GIS.",

pt:"Soluções de dados espaciais e GIS.",

fr:"Solutions de données spatiales et SIG.",

ar:"حلول البيانات المكانية ونظم المعلومات الجغرافية."

}

}


];





export default function IndustriesContent({

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


<div className="max-w-7xl mx-auto">


<p className="
text-blue-400
tracking-[0.3em]
">

QLXGEO INDUSTRIES

</p>



<h1 className="
text-5xl
font-bold
mt-6
">


{

language==="fr"
?
"Industries"

:
language==="es"
?
"Industrias"
:
language==="pt"
?
"Indústrias"
:
language==="ar"
?
"القطاعات"
:
"Industries"


}


</h1>



<p className="
text-gray-400
mt-6
text-lg
">


Professional Leica geospatial solutions for global industries.


</p>




<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
">


{

industries.map((item)=>(


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


<div className="
h-56
bg-black
">


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


<h2 className="
text-2xl
font-bold
">


{item.title[language]}


</h2>



<p className="
text-gray-400
mt-4
">


{item.desc[language]}


</p>



<Link

href={`/${language}/contact`}

className="
text-blue-400
inline-block
mt-6
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