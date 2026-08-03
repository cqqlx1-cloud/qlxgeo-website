import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"LiDAR System Supplier | QLXGEO Survey Equipment",


description:
"QLXGEO provides professional LiDAR systems for surveying, UAV mapping, 3D data acquisition and large-scale mapping projects worldwide.",


keywords:[

"LiDAR System Supplier",

"UAV LiDAR Mapping",

"LiDAR Survey Equipment",

"3D Mapping Solution",

"Laser Mapping System"

]

};




export default function LiDAR(){


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

src="/products/lidar.jpg"

alt="LiDAR System"

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

Professional LiDAR System

</h1>





<p

className="
mt-6
text-xl
text-slate-300
leading-relaxed
"

>

Advanced LiDAR mapping solution
for surveying, UAV mapping,
3D data acquisition and engineering projects.

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

text="High density point cloud acquisition"

/>




<Feature

text="Large area mapping capability"

/>




<Feature

text="UAV and mobile platform integration"

/>




<Feature

text="Professional 3D data processing workflow"

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

name="Laser Type"

value="Professional LiDAR Sensor"

/>




<Spec

name="Scanning Range"

value="Up to Hundreds of Meters"

/>




<Spec

name="Point Density"

value="High Density Point Cloud"

/>




<Spec

name="Accuracy"

value="Centimeter Level Accuracy"

/>




<Spec

name="Data Output"

value="Point Cloud / 3D Model"

/>




<Spec

name="Platform"

value="UAV / Mobile / Ground"

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

name="UAV Mapping"

/>



<Application

name="Topographic Survey"

/>



<Application

name="Mining"

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

q="What is LiDAR used for?"

a="LiDAR is widely used for mapping, surveying, 3D modeling and engineering projects."

/>





<FAQ

q="How accurate is LiDAR mapping?"

a="Professional LiDAR systems provide high precision 3D measurement and point cloud data."

/>





<FAQ

q="Can QLXGEO provide customized solutions?"

a="Yes, QLXGEO supports OEM and customized LiDAR surveying solutions."

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