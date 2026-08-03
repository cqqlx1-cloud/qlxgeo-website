import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"Surveying Equipment Accessories Supplier | QLXGEO",


description:
"QLXGEO provides professional surveying accessories including GNSS accessories, tripods, prisms, controllers, batteries and total station accessories worldwide.",


keywords:[

"Survey Accessories Supplier",

"GNSS Accessories",

"Survey Tripod",

"Survey Prism",

"RTK Accessories",

"Total Station Accessories"

]

};



export default function Accessories(){


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

src="/products/accessories.jpg"

alt="Surveying Accessories"

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

SURVEYING ACCESSORIES

</p>




<h1

className="
text-5xl
font-bold
mt-5
leading-tight
"

>

Professional Surveying Accessories

</h1>





<p

className="
mt-6
text-xl
text-slate-300
leading-relaxed
"

>

Reliable accessories for GNSS RTK,
total stations and professional surveying
equipment.

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

text="Compatible with professional surveying instruments"

/>



<Feature

text="Durable design for field operation"

/>



<Feature

text="Professional quality components"

/>



<Feature

text="OEM customization available"

/>



</div>


</section>









{/* CATEGORIES */}



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

Product Categories

</h2>





<div

className="
grid
md:grid-cols-5
gap-6
mt-8
"

>


<Category name="GNSS Accessories"/>


<Category name="Tripods & Poles"/>


<Category name="Survey Prisms"/>


<Category name="Controllers"/>


<Category name="Batteries"/>



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


<Application name="Land Survey"/>


<Application name="Construction"/>


<Application name="Mapping"/>


<Application name="Engineering"/>



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

q="Are accessories compatible with different brands?"

a="QLXGEO supplies accessories compatible with various surveying instruments."

/>





<FAQ

q="Can you provide customized accessories?"

a="Yes, OEM and customized accessory solutions are available."

/>





<FAQ

q="Do you support bulk orders?"

a="Yes, we provide wholesale supply and global export service."

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









function Category({

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