export default function SolutionsPage() {

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
SOLUTIONS
</p>



<h1
className="
mt-6
text-6xl
font-bold
leading-tight
"
>
Advanced Geospatial
<br/>
Intelligence Solutions
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
QLXGEO provides enterprise GIS platforms,
spatial AI technologies and geospatial
intelligence solutions for organizations
worldwide.
</p>


</section>





{/* SOLUTION CARDS */}


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
lg:grid-cols-4
gap-8
"
>



<SolutionCard

title="GIS Platform"

text="
Enterprise geographic information
system infrastructure.
"

/>




<SolutionCard

title="Spatial AI"

text="
Artificial intelligence powered
location analytics.
"

/>




<SolutionCard

title="Remote Sensing"

text="
Satellite imagery processing
and earth observation.
"

/>




<SolutionCard

title="Cloud GIS"

text="
Scalable cloud based mapping
services.
"

/>



</div>


</section>





{/* GLOBAL IMPACT */}



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

Global Spatial Intelligence

</h2>



<p

className="
mt-6
text-xl
text-blue-100
max-w-3xl
"

>

QLXGEO connects spatial data,
artificial intelligence and mapping
technologies across industries worldwide.

</p>





<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


<ImpactCard

number="128+"

title="Global Layers"

/>



<ImpactCard

number="10M+"

title="Data Records"

/>



<ImpactCard

number="99.99%"

title="System Availability"

/>



</div>


</div>


</section>







{/* CTA */}



<section

className="
py-24
bg-slate-950
text-center
"

>


<h2

className="
text-5xl
font-bold
"

>

Build Your Spatial Intelligence Platform

</h2>



<p

className="
mt-6
text-xl
text-slate-300
"

>

Partner with QLXGEO for next generation
geospatial solutions.

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
text-lg
"

>

Contact QLXGEO

</a>


</section>



</main>


)

}







function SolutionCard({

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
text-2xl
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







function ImpactCard({

number,

title

}:{

number:string;

title:string;

}){


return (

<div

className="
bg-white/10
rounded-3xl
p-8
border
border-white/10
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
text-blue-200
"

>

{title}

</p>


</div>


)


}