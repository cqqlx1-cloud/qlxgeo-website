import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"Total Station Supplier | QLXGEO Surveying Equipment",


description:
"QLXGEO provides professional total stations for construction surveying, engineering measurement and land survey projects worldwide.",


keywords:[

"Total Station Supplier",

"Electronic Total Station",

"Surveying Equipment Supplier",

"Construction Survey Equipment",

"Engineering Survey Instrument"

]

};



export default function TotalStation(){


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

src="/products/total-station.jpg"

alt="Total Station Survey Equipment"

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

Professional Total Station

</h1>





<p

className="
mt-6
text-xl
text-slate-300
leading-relaxed
"

>

High precision electronic total station
for construction surveying, engineering
measurement and professional applications.

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

text="High accuracy angle measurement"

/>


<Feature

text="Reflector and reflectorless EDM"

/>


<Feature

text="Long range distance measurement"

/>


<Feature

text="Professional data controller support"

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

name="Angle Accuracy"

value="2'' / 5'' / 1'' Options"

/>




<Spec

name="Distance Measurement"

value="Up to 1000m Reflectorless"

/>




<Spec

name="EDM Technology"

value="High Precision Electronic Distance Measurement"

/>




<Spec

name="Display"

value="Color Touch Screen"

/>




<Spec

name="Communication"

value="Bluetooth USB"

/>




<Spec

name="Protection"

value="IP54 / IP65"

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

name="Construction"

/>



<Application

name="Land Survey"

/>



<Application

name="Road Engineering"

/>



<Application

name="Mining"

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

q="What is a total station used for?"

a="Total stations are widely used for construction, engineering surveying and land measurement."

/>




<FAQ

q="What accuracy can total stations achieve?"

a="Professional total stations provide high precision angle and distance measurement."

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