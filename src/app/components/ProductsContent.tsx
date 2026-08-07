"use client";


import Link from "next/link";



const products:any=[


{

id:"gnss-rtk",

image:"/products/leica-gnss.jpg",

title:{

en:"Leica GNSS RTK",

es:"Leica GNSS RTK",

pt:"Leica GNSS RTK",

fr:"Leica GNSS RTK",

ar:"Leica GNSS RTK"

},


desc:{


en:"High precision GNSS RTK positioning solutions for surveying and engineering projects.",

es:"Soluciones GNSS RTK de alta precisión para topografía e ingeniería.",

pt:"Soluções GNSS RTK de alta precisão para levantamento e engenharia.",

fr:"Solutions GNSS RTK haute précision pour l'arpentage et l'ingénierie.",

ar:"حلول GNSS RTK عالية الدقة للمساحة والهندسة."


}


},



{

id:"total-station",

image:"/products/leica-total-station.jpg",

title:{


en:"Leica Total Station",

es:"Estación Total Leica",

pt:"Estação Total Leica",

fr:"Station Totale Leica",

ar:"محطة Leica الشاملة"


},


desc:{


en:"Professional total station solutions for construction and infrastructure.",

es:"Soluciones profesionales para construcción e infraestructura.",

pt:"Soluções profissionais para construção e infraestrutura.",

fr:"Solutions professionnelles pour la construction et les infrastructures.",

ar:"حلول احترافية للبناء والبنية التحتية."


}


},



{

id:"lidar",

image:"/products/leica-blk.png",

title:{


en:"Leica BLK 3D Laser Scanner",

es:"Escáner Láser Leica BLK",

pt:"Scanner Laser Leica BLK",

fr:"Scanner Laser Leica BLK",

ar:"ماسح الليزر Leica BLK"


},


desc:{


en:"Advanced 3D reality capture and digital mapping solutions.",

es:"Soluciones avanzadas de captura 3D y cartografía digital.",

pt:"Soluções avançadas de captura 3D e mapeamento digital.",

fr:"Solutions avancées de capture 3D et cartographie numérique.",

ar:"حلول متقدمة للمسح ثلاثي الأبعاد والخرائط الرقمية."


}


},



{

id:"uav",

image:"/products/leica-uav.png",

title:{


en:"Leica UAV Mapping",

es:"Mapeo UAV Leica",

pt:"Mapeamento UAV Leica",

fr:"Cartographie UAV Leica",

ar:"رسم الخرائط UAV Leica"


},


desc:{


en:"Professional aerial mapping solutions for large scale GIS projects.",

es:"Soluciones profesionales UAV para proyectos GIS.",

pt:"Soluções UAV profissionais para projetos GIS.",

fr:"Solutions UAV professionnelles pour les projets SIG.",

ar:"حلول UAV احترافية لمشاريع GIS."


}


}


];





export default function ProductsContent({

language="en"

}:{

language:string

}){



const lang =
language as keyof typeof products[0]["title"];



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

QLXGEO PRODUCTS

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
?
"Solutions d'équipements Leica"
:
language==="es"
?
"Soluciones de equipos Leica"
:
language==="pt"
?
"Soluções de equipamentos Leica"
:
language==="ar"
?
"حلول معدات Leica"
:
"Leica Surveying Equipment Solutions"

}


</h1>




<p

className="
text-gray-400
mt-6
text-lg
"

>

GNSS RTK | Total Station | 3D Laser Scanner | UAV Mapping

</p>






<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
mt-16
"

>


{

products.map((item:any)=>(


<div

key={item.id}

className="
bg-zinc-900
border
border-white/10
rounded-3xl
p-6
"

>



<div

className="
h-52
bg-black
rounded-xl
flex
items-center
justify-center
"

>


<img

src={item.image}

alt={item.title[lang]}

className="
max-h-full
object-contain
"

/>


</div>




<h2

className="
text-xl
font-bold
mt-6
"

>

{item.title[lang]}

</h2>




<p

className="
text-gray-400
mt-4
text-sm
"

>

{item.desc[lang]}

</p>





<div className="
mt-6
flex
justify-between
">


<Link

href={`/${language}/products/${item.id}`}

className="
text-blue-400
"

>

View Product →

</Link>



<Link

href={`/${language}/contact`}

className="
text-green-400
"

>

Quote

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