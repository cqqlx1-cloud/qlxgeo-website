export default function Industries(){


const industries=[

{
title:"Infrastructure",
desc:"Surveying solutions for roads, bridges and large infrastructure projects."
},

{
title:"Construction",
desc:"Precision measurement solutions for modern construction workflows."
},

{
title:"Mining",
desc:"Reliable geospatial technology for mining operations."
},

{
title:"Energy",
desc:"Professional surveying solutions for energy projects."
},


{
title:"Smart City",
desc:"Digital mapping and spatial data solutions."
},


{
title:"Digital Twin",
desc:"Reality capture solutions for digital transformation."
}


];


return (

<main className="bg-black text-white px-8 lg:px-20 py-32">


<h1
className="
text-5xl
font-bold
text-center
"
>

Industries

</h1>



<p
className="
text-center
text-gray-400
mt-5
"
>

Professional Leica solutions
for global projects.

</p>




<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>


{
industries.map((item)=>(


<div

key={item.title}

className="
bg-zinc-900
p-8
rounded-2xl
border
border-zinc-800
"

>


<h2
className="
text-2xl
font-bold
"
>

{item.title}

</h2>



<p
className="
text-gray-400
mt-4
"
>

{item.desc}

</p>



</div>


))
}


</div>



</main>

);


}