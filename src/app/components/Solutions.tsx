"use client";


const solutions = [

{
icon:"🌐",
title:"GIS Platform",
subtitle:"Enterprise Mapping",
text:
"Advanced geographic information systems for organizations, governments and enterprises."
},


{
icon:"🤖",
title:"Spatial AI",
subtitle:"Machine Intelligence",
text:
"AI-powered spatial analytics transforming location data into intelligent decisions."
},


{
icon:"🛰️",
title:"Remote Sensing",
subtitle:"Satellite Analytics",
text:
"Satellite imagery processing and earth observation intelligence solutions."
},


{
icon:"☁️",
title:"Cloud GIS",
subtitle:"Global Infrastructure",
text:
"Scalable cloud-native geospatial platforms supporting worldwide operations."
}


];




export default function Solutions(){


return (

<section

className="
py-28
bg-slate-950
text-white
"

>


<div

className="
max-w-7xl
mx-auto
px-8
"

>


<p

className="
text-blue-400
tracking-[0.3em]
"

>

OUR SOLUTIONS

</p>




<h2

className="
mt-5
text-5xl
font-bold
"

>

Geospatial Technology
For A Connected World

</h2>





<p

className="
mt-6
text-xl
text-slate-400
max-w-3xl
"

>

QLXGEO builds next-generation GIS,
mapping and spatial intelligence platforms.

</p>





<div

className="
grid
md:grid-cols-2
gap-8
mt-14
"

>


{

solutions.map((item)=>(


<div

key={item.title}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
hover:border-blue-500
transition
"

>


<div

className="
text-5xl
"

>

{item.icon}

</div>




<h3

className="
mt-6
text-3xl
font-bold
"

>

{item.title}

</h3>




<p

className="
mt-2
text-blue-400
"

>

{item.subtitle}

</p>




<p

className="
mt-5
text-slate-400
leading-relaxed
"

>

{item.text}

</p>




<div

className="
mt-8
text-green-400
text-sm
"

>

● ACTIVE SYSTEM

</div>



</div>


))


}


</div>



</div>


</section>


);


}