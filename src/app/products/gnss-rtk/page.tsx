import InquiryForm from "../../components/InquiryForm";
import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"GNSS RTK Receiver Supplier | QLXGEO Surveying Equipment",


description:
"QLXGEO provides high precision GNSS RTK receivers for land surveying, construction, mapping and engineering projects worldwide.",


keywords:[

"GNSS RTK Receiver Supplier",

"RTK GPS Receiver",

"Surveying Equipment Supplier",

"High Precision GNSS",

"RTK Survey Equipment"

]

};



export default function GNSSRtk(){


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

src="/products/gnss-rtk.jpg"

alt="GNSS RTK Receiver"

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

Professional GNSS RTK Receiver

</h1>





<p

className="
mt-6
text-xl
text-slate-300
leading-relaxed
"

>

High precision GNSS RTK positioning system
for professional surveying, mapping and
construction applications worldwide.

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
text="Multi constellation GNSS support"
/>


<Feature
text="Centimeter-level RTK accuracy"
/>


<Feature
text="4G LTE Bluetooth WiFi communication"
/>


<Feature
text="Professional field controller support"
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

name="Positioning Accuracy"

value="RTK ±8mm + 1ppm"

/>


<Spec

name="Channels"

value="1408 Channels"

/>


<Spec

name="Satellite Systems"

value="GPS GLONASS Galileo BeiDou"

/>


<Spec

name="Communication"

value="4G LTE Bluetooth WiFi"

/>


<Spec

name="Operating Time"

value="12+ Hours"

/>


<Spec

name="Protection"

value="IP67 Waterproof"

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


<Application name="Land Survey"/>


<Application name="Construction"/>


<Application name="GIS Mapping"/>


<Application name="Infrastructure"/>



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

q="What accuracy can GNSS RTK achieve?"

a="Professional GNSS RTK receivers can achieve centimeter-level positioning accuracy."

/>




<FAQ

q="Which satellite systems are supported?"

a="GPS, GLONASS, Galileo and BeiDou satellite systems are supported."

/>




<FAQ

q="Can QLXGEO provide OEM solutions?"

a="Yes, QLXGEO supports OEM and customized surveying equipment solutions."

/>




</div>


</section>


<InquiryForm />


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