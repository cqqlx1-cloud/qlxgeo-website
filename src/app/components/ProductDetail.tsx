"use client";

import Link from "next/link";


const productData:any = {


"gnss-rtk":{


title:"Leica GNSS RTK Solutions",

subtitle:
"High Precision GNSS Positioning Equipment",

image:
"/products/leica-gnss.jpg",


description:

"Professional Leica GNSS RTK solutions for surveying, construction, engineering and GIS projects worldwide.",



features:[

"Centimeter-level positioning accuracy",

"Multi-constellation GNSS support",

"Real-time RTK correction technology",

"Professional field surveying workflow"

],


applications:[

"Land Surveying",

"Construction",

"Road Engineering",

"Mining",

"GIS Mapping"

],


specs:[

["Positioning Accuracy","Centimeter Level"],

["GNSS Support","GPS / GLONASS / Galileo / BeiDou"],

["Correction","RTK Network / Base Station"],

["Application","Surveying & Engineering"]

],


faq:[

[
"Do you supply Leica GNSS RTK worldwide?",
"Yes. QLXGEO provides professional surveying equipment solutions for global customers."
],


[
"Can you support OEM and distributors?",
"Yes. We provide flexible cooperation solutions for global partners."
]


]



},



"total-station":{


title:"Leica Total Station",

subtitle:
"Professional High Precision Surveying Equipment",


image:
"/products/leica-total-station.jpg",



description:

"High precision Leica total station solutions for construction, infrastructure and land surveying.",



features:[

"High precision angle measurement",

"Fast EDM distance measurement",

"Reliable field operation",

"Professional engineering workflow"

],


applications:[

"Construction",

"Infrastructure",

"Building Survey",

"Industrial Measurement"

],


specs:[

["Measurement","High Precision EDM"],

["Accuracy","Professional Survey Grade"],

["Workflow","Engineering Survey"]

],


faq:[

[
"What projects use Leica Total Station?",
"Construction, infrastructure and professional surveying projects."
]

]


},




"lidar":{


title:"Leica 3D Laser Scanner",

subtitle:
"Advanced Reality Capture Solutions",


image:
"/products/leica-blk.png",


description:

"Professional 3D scanning solutions for digital mapping and spatial data capture.",


features:[

"Fast 3D scanning",

"Reality capture technology",

"Digital twin applications",

"High accuracy spatial data"

],


applications:[

"3D Mapping",

"Smart City",

"Architecture",

"Engineering"

],


specs:[

["Technology","3D Laser Scanning"],

["Application","Reality Capture"]

],


faq:[

[
"Can laser scanning data be used for GIS?",
"Yes. Data can be integrated into professional GIS workflows."
]

]


},





"uav":{


title:"Leica UAV Mapping Solutions",

subtitle:
"Aerial Surveying And Mapping Technology",


image:
"/products/leica-uav.png",


description:

"Professional UAV mapping solutions for large-scale surveying and GIS applications.",


features:[

"Aerial mapping workflow",

"Large area data capture",

"High resolution imagery",

"GIS integration support"

],


applications:[

"Topographic Mapping",

"Mining",

"Land Development",

"GIS Projects"

],


specs:[

["Workflow","Aerial Survey"],

["Output","GIS Mapping Data"]

],


faq:[

[
"What industries use UAV mapping?",
"Surveying, mining, construction and GIS industries."
]

]


}



};





export default function ProductDetail({

language="en",

product="gnss-rtk"


}:{

language?:string;

product:string;


}){



const data =
productData[product] || productData["gnss-rtk"];



return (



<main className="
bg-black
text-white
min-h-screen
pt-32
px-8
lg:px-20
pb-24
">


<div className="
max-w-7xl
mx-auto
">


{/* HERO */}


<section className="
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

{data.title}

</h1>



<h2 className="
text-2xl
text-gray-300
mt-5
">

{data.subtitle}

</h2>



<p className="
text-gray-400
text-lg
mt-8
leading-relaxed
">

{data.description}

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
font-semibold
"

>

Request Quote

</Link>



</div>





<div className="
bg-zinc-900
rounded-3xl
border
border-white/10
p-10
h-[450px]
flex
items-center
justify-center
">


<img

src={data.image}

alt={data.title}

className="
max-h-full
object-contain
"

/>


</div>



</section>





{/* FEATURES */}


<section className="mt-24">


<h2 className="
text-4xl
font-bold
">

Key Advantages

</h2>



<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
mt-10
">


{data.features.map((x:string)=>(

<div

key={x}

className="
bg-zinc-900
border
border-white/10
rounded-2xl
p-6
"

>

{x}

</div>


))}


</div>


</section>






{/* APPLICATION */}


<section className="mt-24">


<h2 className="
text-4xl
font-bold
">

Applications

</h2>


<div className="
flex
flex-wrap
gap-4
mt-8
">


{data.applications.map((x:string)=>(

<span

key={x}

className="
bg-blue-600/20
border
border-blue-500/30
px-6
py-3
rounded-xl
"

>

{x}

</span>


))}



</div>


</section>







{/* SPEC */}


<section className="mt-24">


<h2 className="
text-4xl
font-bold
">

Technical Specifications

</h2>


<div className="
mt-8
overflow-hidden
rounded-2xl
border
border-white/10
">


{data.specs.map((x:string[])=>(
<div

key={x[0]}

className="
grid
grid-cols-2
bg-zinc-900
border-b
border-white/10
p-5
"

>

<div>{x[0]}</div>

<div className="text-gray-400">
{x[1]}
</div>


</div>
))}



</div>


</section>







{/* FAQ */}


<section className="mt-24">


<h2 className="
text-4xl
font-bold
">

FAQ

</h2>



<div className="
space-y-6
mt-10
">


{data.faq.map((x:string[])=>(
<div

key={x[0]}

className="
bg-zinc-900
rounded-2xl
p-6
"

>

<h3 className="
text-xl
font-bold
">

{x[0]}

</h3>


<p className="
text-gray-400
mt-3
">

{x[1]}

</p>


</div>

))}


</div>


</section>





{/* CTA */}


<section className="
mt-24
bg-zinc-900
rounded-3xl
p-12
text-center
">


<h2 className="
text-4xl
font-bold
">

Need Professional Surveying Equipment?

</h2>



<p className="
text-gray-400
mt-5
">

Contact QLXGEO for Leica geospatial solutions.

</p>



<Link

href={`/${language}/contact`}

className="
inline-block
mt-8
bg-blue-600
px-10
py-4
rounded-xl
"

>

Request Quote

</Link>



</section>




</div>


</main>


);

}