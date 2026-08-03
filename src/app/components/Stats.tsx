"use client";


const stats = [

{
number:"120+",
title:"Countries Supported",
text:"Global geospatial coverage"
},


{
number:"50M+",
title:"Spatial Records",
text:"Processed location datasets"
},


{
number:"99.99%",
title:"Platform Availability",
text:"Enterprise reliability"
},


{
number:"24/7",
title:"Real-time Monitoring",
text:"Continuous intelligence service"
}

];





export default function Stats(){


return (


<section

className="
py-24
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



<div

className="
text-center
mb-16
"

>


<p

className="
text-blue-400
tracking-[0.3em]
"

>

GLOBAL INTELLIGENCE

</p>




<h2

className="
mt-5
text-5xl
font-bold
"

>

Powered By Spatial Data

</h2>



<p

className="
mt-5
text-xl
text-slate-400
"

>

QLXGEO delivers scalable geospatial
intelligence across industries worldwide.

</p>



</div>







<div

className="
grid
md:grid-cols-4
gap-6
"

>


{

stats.map((item)=>(


<div

key={item.title}

className="
rounded-3xl
bg-white/5
border
border-white/10
p-8
text-center
hover:border-blue-500
hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]
transition
"

>


<div

className="
text-5xl
font-bold
text-blue-400
"

>

{item.number}

</div>




<h3

className="
mt-5
text-xl
font-bold
"

>

{item.title}

</h3>




<p

className="
mt-3
text-slate-400
"

>

{item.text}

</p>



</div>


))


}



</div>



</div>


</section>


);


}