"use client";

import Link from "next/link";


const productData:any={


"gnss-rtk":{


title:{
en:"Leica GNSS RTK",
es:"Leica GNSS RTK",
pt:"Leica GNSS RTK",
fr:"Leica GNSS RTK",
ar:"Leica GNSS RTK"
},


description:{

en:"Professional Leica GNSS RTK positioning solutions for surveying, construction and engineering projects worldwide.",

es:"Soluciones profesionales Leica GNSS RTK para topografía, construcción e ingeniería.",

pt:"Soluções profissionais Leica GNSS RTK para levantamento, construção e engenharia.",

fr:"Solutions professionnelles Leica GNSS RTK pour l'arpentage, la construction et l'ingénierie.",

ar:"حلول Leica GNSS RTK الاحترافية للمساحة والبناء والمشاريع الهندسية."

},


image:"/products/leica-gnss.jpg",


features:{


en:[
"Centimeter-level positioning accuracy",
"Real-time RTK correction technology",
"Professional surveying workflow",
"Support global engineering projects"
],


es:[
"Precisión de posicionamiento centimétrica",
"Tecnología RTK en tiempo real",
"Flujo profesional de topografía",
"Soporte para proyectos globales"
],


pt:[
"Precisão de posicionamento centimétrica",
"Tecnologia RTK em tempo real",
"Fluxo profissional de levantamento",
"Suporte para projetos globais"
],


fr:[
"Précision de positionnement centimétrique",
"Technologie RTK en temps réel",
"Flux professionnel d'arpentage",
"Support des projets mondiaux"
],


ar:[
"دقة تحديد المواقع على مستوى السنتيمتر",
"تقنية RTK في الوقت الحقيقي",
"حلول مساحية احترافية",
"دعم المشاريع العالمية"
]


}


},





"total-station":{


title:{
en:"Leica Total Station",
es:"Leica Estación Total",
pt:"Estação Total Leica",
fr:"Station Totale Leica",
ar:"محطة Leica الشاملة"
},


description:{

en:"High precision Leica total station solutions for construction, infrastructure and land surveying.",

es:"Soluciones Leica de estación total para construcción e ingeniería.",

pt:"Soluções Leica de estação total para construção e engenharia.",

fr:"Solutions Leica de station totale pour la construction et l'ingénierie.",

ar:"حلول Leica للمحطات الشاملة للمشاريع الهندسية."

},


image:"/products/leica-total-station.jpg",


features:{


en:[
"High precision angle measurement",
"Fast distance measurement",
"Reliable field performance",
"Professional engineering applications"
],

es:[
"Medición angular de alta precisión",
"Medición rápida de distancia",
"Rendimiento fiable en campo",
"Aplicaciones profesionales"
],

pt:[
"Medição angular de alta precisão",
"Medição rápida de distância",
"Desempenho confiável em campo",
"Aplicações profissionais"
],

fr:[
"Mesure angulaire haute précision",
"Mesure rapide des distances",
"Performance fiable sur le terrain",
"Applications professionnelles"
],

ar:[
"قياس زاوي عالي الدقة",
"قياس سريع للمسافة",
"أداء موثوق في الموقع",
"تطبيقات هندسية احترافية"
]


}


},





"lidar":{


title:{
en:"Leica BLK 3D Laser Scanner",
es:"Escáner Láser Leica BLK 3D",
pt:"Scanner Laser Leica BLK 3D",
fr:"Scanner Laser Leica BLK 3D",
ar:"ماسح الليزر Leica BLK 3D"
},


description:{

en:"Advanced 3D reality capture solutions for digital mapping and spatial data collection.",

es:"Soluciones avanzadas de captura 3D para cartografía digital.",

pt:"Soluções avançadas de captura 3D para mapeamento digital.",

fr:"Solutions avancées de capture 3D pour la cartographie numérique.",

ar:"حلول متقدمة للمسح ثلاثي الأبعاد والخرائط الرقمية."

},


image:"/products/leica-blk.png",


features:{


en:[
"High speed 3D scanning",
"Reality capture technology",
"Digital twin applications",
"Professional mapping workflow"
],


fr:[
"Numérisation 3D haute vitesse",
"Technologie Reality Capture",
"Applications jumeaux numériques",
"Flux professionnel de cartographie"
],


es:[
"Escaneo 3D de alta velocidad",
"Tecnología de captura digital",
"Aplicaciones de gemelos digitales",
"Flujo profesional de cartografía"
],


pt:[
"Digitalização 3D rápida",
"Tecnologia Reality Capture",
"Aplicações digitais",
"Fluxo profissional de mapeamento"
],


ar:[
"مسح ثلاثي الأبعاد عالي السرعة",
"تقنية التقاط الواقع",
"تطبيقات التوأم الرقمي",
"حلول الخرائط الاحترافية"
]


}


},





"uav":{


title:{
en:"Leica UAV Mapping",
es:"Mapeo UAV Leica",
pt:"Mapeamento UAV Leica",
fr:"Cartographie UAV Leica",
ar:"رسم الخرائط بالطائرات بدون طيار Leica"
},


description:{

en:"Professional UAV mapping solutions for large scale surveying and GIS projects.",

es:"Soluciones profesionales UAV para proyectos GIS y topografía.",

pt:"Soluções profissionais UAV para projetos GIS.",

fr:"Solutions professionnelles UAV pour les projets SIG.",

ar:"حلول UAV الاحترافية لمشاريع GIS والمساحة."

},


image:"/products/leica-uav.png",


features:{


en:[
"Aerial surveying workflow",
"Large area mapping",
"High resolution data capture",
"GIS integration support"
],


es:[
"Flujo de topografía aérea",
"Mapeo de grandes áreas",
"Captura de datos HD",
"Soporte GIS"
],


pt:[
"Fluxo de levantamento aéreo",
"Mapeamento de grandes áreas",
"Captura de dados alta resolução",
"Integração GIS"
],


fr:[
"Flux aérien professionnel",
"Cartographie grande surface",
"Collecte haute résolution",
"Support SIG"
],


ar:[
"مسح جوي احترافي",
"رسم خرائط للمناطق الكبيرة",
"جمع بيانات عالية الدقة",
"دعم تكامل GIS"
]


}


}


};





export default function ProductDetail({

language="en",

product

}:{

language:string;

product:string;

}){


const data =
productData[product] || productData["gnss-rtk"];


const lang =
language as keyof typeof data.title;



return (


<main className="
bg-black
text-white
min-h-screen
px-8
lg:px-20
pt-32
pb-24
">


<div className="max-w-7xl mx-auto">


<div className="
grid
lg:grid-cols-2
gap-16
items-center
">


<div>


<p className="
text-blue-400
tracking-[0.3em]
">

QLXGEO PRODUCT

</p>



<h1 className="
text-5xl
font-bold
mt-6
">

{data.title[lang]}

</h1>



<p className="
text-gray-400
text-lg
mt-8
">

{data.description[lang]}

</p>



<Link

href={`/${language}/contact`}

className="
inline-block
mt-10
bg-blue-600
px-8
py-4
rounded-xl
"

>

Request Quote

</Link>


</div>




<div className="
bg-zinc-900
border
border-white/10
rounded-3xl
p-10
h-[450px]
flex
items-center
justify-center
">


<img

src={data.image}

alt={data.title[lang]}

className="
max-h-full
object-contain
"

/>


</div>


</div>





<section className="mt-24">


<h2 className="
text-4xl
font-bold
">

Key Features

</h2>


<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
mt-10
">


{
data.features[lang]?.map((item:string)=>(


<div

key={item}

className="
bg-zinc-900
border
border-white/10
rounded-2xl
p-6
"

>

{item}

</div>


))
}



</div>


</section>



</div>


</main>


);


}