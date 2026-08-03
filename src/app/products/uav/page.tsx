import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"UAV Mapping System Supplier | QLXGEO Survey Equipment",


description:
"QLXGEO provides professional UAV mapping systems for aerial surveying, photogrammetry, 3D mapping and large area data collection worldwide.",


keywords:[

"UAV Mapping System",

"Survey Drone",

"Drone Photogrammetry",

"Aerial Survey Equipment",

"UAV LiDAR Mapping"

]

};



export default function UAV(){


return (

<main

className="
min-h-screen
bg-slate-950
text-white
pt-32
px-8
"

>


{/* HERO */}


<section

className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
"

>


{/* IMAGE */}


<div

className="
h-[520px]
rounded-3xl
bg-slate-900
border
border-white/10
overflow-hidden
"

>


<img

src="/products/uav.jpg"

alt="UAV Mapping System"

className="
w-full
h-full
object-contain
"

/>


</div>







{/* INFO */}


<div>


<p

className="
text-blue-400
tracking-[0.3em]
text-sm
"

>

SURVEYING EQUIPMENT

</p>





<h1

className="
text-5xl
font-bold
mt-5
leading-tight
"

>

Professional UAV Mapping System

</h1>





<p

className="
mt-6
text-xl
text-slate-300
leading-relaxed
"

>

Drone surveying solution for aerial mapping,
photogrammetry, 3D terrain modeling and
large-scale data collection.

</p>






<div

className="
mt-8
flex
gap-4
"

>


<a

href="/contact"

className="
bg-blue-600
px-8
py-4
rounded-xl
hover:bg-blue-700
transition
"

>

Request Quote

</a>





<a

href="https://wa.me/8618983894451"

className="
border
border-green-500
text-green-400
px-8
py-4
rounded-xl
"

>

WhatsApp

</a>



</div>


</div>


</section>









{/* FEATURES */}



<section

className="
max-w-7xl
mx-auto
mt-24
"

>


<h2

className="
text-3xl
font-bold
"

>

Key Features

</h2>





<div

className="
grid
md:grid-cols-2
gap-6
mt-8
"

>


<Feature

text="High resolution aerial mapping"

/>



<Feature

text="Professional photogrammetry workflow"

/>



<Feature

text="Large area survey capability"

/>



<Feature

text="3D terrain modeling support"

/>



</div>


</section>









{/* SPECIFICATIONS */}



<section

className="
max-w-7xl
mx-auto
mt-24
"

>


<h2

className="
text-3xl
font-bold
"

>

Technical Specifications

</h2>





<div

className="
grid
md:grid-cols-2
gap-6
mt-8
"

>



<Spec

name="Flight Time"

value="30-60 Minutes"

/>



<Spec

name="Camera"

value="High Resolution Mapping Camera"

/>



<Spec

name="Accuracy"

value="Centimeter Level Mapping"

/>



<Spec

name="Mapping Area"

value="Large Scale Survey Coverage"

/>



<Spec

name="Data Output"

value="Orthophoto / 3D Model / Point Cloud"

/>



<Spec

name="Platform"

value="Professional Survey UAV"

/>



</div>


</section>









{/* APPLICATIONS */}



<section

className="
max-w-7xl
mx-auto
mt-24
"

>


<h2

className="
text-3xl
font-bold
"

>

Applications

</h2>





<div

className="
grid
md:grid-cols-4
gap-6
mt-8
"

>


<Application

name="Topographic Survey"

/>



<Application

name="Mining"

/>



<Application

name="Agriculture"

/>



<Application

name="Infrastructure"

/>



</div>


</section>









{/* FAQ */}



<section

className="
max-w-7xl
mx-auto
mt-24
pb-20
"

>


<h2

className="
text-3xl
font-bold
"

>

Frequently Asked Questions

</h2>





<div

className="
mt-8
space-y-5
"

>


<FAQ

q="What is UAV mapping used for?"

a="UAV mapping is used for aerial surveying, photogrammetry, terrain modeling and large area data collection."

/>





<FAQ

q="How accurate is drone surveying?"

a="Professional survey drones can achieve high precision mapping with RTK positioning technology."

/>





<FAQ

q="Can QLXGEO provide customized UAV solutions?"

a="Yes, QLXGEO supports customized surveying solutions for different applications."

/>



</div>


</section>



</main>

)

}









function Feature({

text

}:{

text:string

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-xl
p-6
"

>

✓ {text}

</div>


)

}









function Spec({

name,
value

}:{

name:string
value:string

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-xl
p-6
"

>


<p

className="
text-blue-400
"

>

{name}

</p>



<p

className="
mt-3
text-lg
"

>

{value}

</p>


</div>


)

}









function Application({

name

}:{

name:string

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-xl
p-6
text-center
"

>

{name}

</div>


)

}









function FAQ({

q,
a

}:{

q:string
a:string

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-xl
p-6
"

>


<h3

className="
font-bold
"

>

{q}

</h3>



<p

className="
mt-3
text-slate-300
"

>

{a}

</p>



</div>


)

}