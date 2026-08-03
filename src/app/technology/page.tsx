export default function TechnologyPage(){

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
"

>
TECHNOLOGY
</p>



<h1

className="
mt-6
text-6xl
font-bold
"

>

Next Generation
<br/>
Geospatial Technology

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

QLXGEO combines artificial intelligence,
cloud computing and advanced GIS
technologies to build intelligent
spatial platforms.

</p>


</section>





{/* TECHNOLOGY CARDS */}


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
md:grid-cols-2
gap-8
"

>



<TechCard

title="AI Engine"

text="
Advanced artificial intelligence models
for spatial understanding and prediction.
"

/>



<TechCard

title="Spatial AI"

text="
Machine learning driven location
intelligence and geographic analysis.
"

/>




<TechCard

title="Mapping System"

text="
High performance digital mapping
and visualization infrastructure.
"

/>




<TechCard

title="Data Infrastructure"

text="
Real-time geospatial data pipelines
and cloud processing systems.
"

/>



</div>


</section>







{/* ARCHITECTURE */}



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

Technology Architecture

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
AI engines, cloud infrastructure and
real-time spatial data networks into
one intelligent ecosystem.

</p>





<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


<div
className="
bg-white/10
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
GIS Core
</h3>

<p
className="
mt-4
text-blue-100
"
>
Spatial database and mapping engine.
</p>

</div>





<div
className="
bg-white/10
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
AI Layer
</h3>

<p
className="
mt-4
text-blue-100
"
>
Intelligent analysis and prediction.
</p>

</div>






<div
className="
bg-white/10
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
Cloud Network
</h3>

<p
className="
mt-4
text-blue-100
"
>
Global scalable infrastructure.
</p>

</div>


</div>



</div>


</section>







{/* CTA */}



<section

className="
py-24
text-center
"

>


<h2

className="
text-5xl
font-bold
"

>

Explore QLXGEO Technology

</h2>



<a

href="/contact"

className="
inline-block
mt-10
bg-blue-600
px-10
py-4
rounded-xl
text-lg
"

>

Contact Us

</a>



</section>




</main>


)

}







function TechCard({

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
hover:border-blue-500
transition
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
leading-relaxed
"

>

{text}

</p>



</div>


)


}