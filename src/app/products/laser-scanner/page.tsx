import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"3D Laser Scanner Supplier | QLXGEO Survey Equipment",


description:
"QLXGEO provides professional 3D laser scanners for surveying, BIM, construction, mapping and reality capture projects worldwide.",


keywords:[

"3D Laser Scanner Supplier",

"Terrestrial Laser Scanner",

"3D Survey Equipment",

"Point Cloud Scanner",

"Reality Capture Solution"

]

};




export default function LaserScanner(){


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

src="/products/laser-scanner.jpg"

alt="3D Laser Scanner"

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

Professional 3D Laser Scanner

</h1>





<p

className="
mt-6
text-xl
text-slate-300
leading-relaxed
"

>

High accuracy reality capture solution
for surveying, BIM, construction and
3D mapping applications.

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

text="High speed laser scanning"

/>



<Feature

text="Point cloud data generation"

/>



<Feature

text="3D reality capture technology"

/>



<Feature

text="BIM and mapping workflow support"

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

name="Scanning Range"

value="Up to 100m - 300m"

/>




<Spec

name="Accuracy"

value="Millimeter Level Accuracy"

/>




<Spec

name="Scan Speed"

value="High Speed Point Cloud Capture"

/>




<Spec

name="Data Output"

value="Point Cloud / 3D Model"

/>




<Spec

name="Communication"

value="WiFi / USB"

/>




<Spec

name="Application"

value="Survey BIM Mapping"

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

name="BIM Construction"

/>



<Application

name="Survey Mapping"

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

q="What is a 3D laser scanner used for?"

a="3D laser scanners capture accurate point cloud data for surveying, BIM and digital mapping."

/>





<FAQ

q="How accurate is laser scanning?"

a="Professional laser scanners provide millimeter-level measurement accuracy."

/>





<FAQ

q="Can QLXGEO provide customized solutions?"

a="Yes, QLXGEO supports OEM and customized surveying equipment solutions."

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