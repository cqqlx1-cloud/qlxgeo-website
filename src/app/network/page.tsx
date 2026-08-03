export default function NetworkPage(){

return (

<main

className="
min-h-screen
bg-slate-950
text-white
pt-32
"

>


{/* HERO */}

<section

className="
max-w-7xl
mx-auto
px-8
pb-24
"

>


<p

className="
text-blue-400
tracking-[0.3em]
text-sm
"

>

GLOBAL NETWORK

</p>



<h1

className="
mt-6
text-6xl
font-bold
leading-tight
"

>

Worldwide Spatial
<br/>
Intelligence Network

</h1>



<p

className="
mt-8
text-xl
text-slate-300
max-w-3xl
leading-relaxed
"

>

QLXGEO connects global GIS infrastructure,
spatial AI systems and real-time geospatial
data networks.

</p>


</section>






{/* NETWORK CARDS */}


<section

className="
bg-slate-900
py-24
"

>


<div

className="
max-w-7xl
mx-auto
px-8
grid
md:grid-cols-3
gap-8
"

>


<Card

title="Global Nodes"

text="Connected GIS locations worldwide."

/>



<Card

title="Real-Time Data"

text="Live spatial information processing."

/>



<Card

title="AI Intelligence"

text="Location intelligence powered by AI."

/>



</div>


</section>









{/* NETWORK MAP */}


<section

className="
py-24
bg-blue-950
"

>


<div

className="
max-w-7xl
mx-auto
px-8
"

>


<h2

className="
text-5xl
font-bold
"

>

Connected Spatial Intelligence

</h2>



<p

className="
mt-6
text-xl
text-blue-100
max-w-4xl
"

>

QLXGEO integrates GIS platforms,
AI systems and global data networks
into one intelligent ecosystem.

</p>





<div

className="
mt-16
bg-slate-900
rounded-3xl
p-12
border
border-white/10
"

>


<div

className="
grid
grid-cols-2
md:grid-cols-5
gap-8
"

>


<Node text="USA"/>

<Node text="EU"/>

<Node text="QLXGEO"/>

<Node text="ASIA"/>

<Node text="GLOBAL"/>


</div>


</div>



</div>


</section>









{/* IMPACT */}



<section

className="
py-24
"

>


<div

className="
max-w-7xl
mx-auto
px-8
grid
md:grid-cols-3
gap-8
"

>


<Impact

number="50+"

label="Global Regions"

/>


<Impact

number="24/7"

label="Data Monitoring"

/>


<Impact

number="99.99%"

label="Network Availability"

/>



</div>


</section>








{/* CTA */}



<section

className="
py-24
text-center
bg-slate-900
"

>


<h2

className="
text-5xl
font-bold
"

>

Connect With QLXGEO

</h2>



<p

className="
mt-6
text-xl
text-slate-300
"

>

Build your global spatial intelligence network.

</p>




<a

href="/contact"

className="
inline-block
mt-10
bg-blue-600
hover:bg-blue-700
px-10
py-4
rounded-xl
"

>

Contact Us

</a>



</section>




</main>


)

}








function Card({

title,

text

}:{

title:string;

text:string;

}){


return (

<div

className="
bg-slate-800
border
border-white/10
rounded-3xl
p-8
"

>


<h3

className="
text-3xl
font-bold
"

>

{title}

</h3>


<p

className="
mt-5
text-slate-300
text-lg
"

>

{text}

</p>


</div>


)

}








function Node({

text

}:{

text:string;

}){


return (

<div

className="
h-24
rounded-full
bg-blue-600
flex
items-center
justify-center
font-bold
text-lg
"

>

{text}

</div>


)

}








function Impact({

number,

label

}:{

number:string;

label:string;

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-3xl
p-8
"

>


<h3

className="
text-5xl
font-bold
"

>

{number}

</h3>



<p

className="
mt-4
text-blue-300
text-lg
"

>

{label}

</p>


</div>


)

}