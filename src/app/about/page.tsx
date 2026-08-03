export default function AboutPage(){

return (

<main
className="
bg-slate-950
text-white
"
>


{/* HERO */}

<section
className="
min-h-[70vh]
flex
items-center
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
px-8
"
>

<div
className="
max-w-7xl
mx-auto
"
>


<p
className="
text-blue-400
tracking-[0.35em]
text-sm
mb-6
"
>

ABOUT QLXGEO

</p>



<h1
className="
text-5xl
md:text-7xl
font-bold
leading-tight
"
>

Building The Future

<br/>

Of Spatial Intelligence

</h1>



<p
className="
mt-8
max-w-4xl
text-xl
text-slate-300
leading-relaxed
"
>

QLXGEO develops advanced GIS platforms,
spatial AI technologies and geospatial
intelligence solutions helping organizations
understand the world through location data.

</p>


</div>

</section>






{/* COMPANY INTRODUCTION */}


<section
className="
py-24
bg-white
text-slate-900
px-8
"
>

<div
className="
max-w-7xl
mx-auto
"
>


<h2
className="
text-4xl
font-bold
"
>

Who We Are

</h2>



<p
className="
mt-6
text-lg
text-gray-600
max-w-4xl
leading-relaxed
"
>

QLXGEO is a geospatial intelligence
company focused on GIS, mapping,
remote sensing and artificial intelligence.

We combine geographic data,
advanced analytics and modern cloud
technologies to help enterprises make
smarter decisions.

</p>


</div>

</section>






{/* GLOBAL IMPACT */}


<section
className="
py-24
px-8
bg-slate-100
text-slate-900
"
>


<div
className="
max-w-7xl
mx-auto
"
>


<h2
className="
text-4xl
font-bold
"
>

Global Impact

</h2>



<div
className="
grid
md:grid-cols-3
gap-8
mt-12
"
>


<Stat
number="50+"
title="Countries Connected"
/>


<Stat
number="100+"
title="GIS Projects"
/>


<Stat
number="24/7"
title="Spatial Intelligence"
/>



</div>


</div>


</section>






{/* CAPABILITIES */}



<section
className="
py-24
px-8
bg-slate-950
"
>


<div
className="
max-w-7xl
mx-auto
"
>


<h2
className="
text-4xl
font-bold
"
>

Core Capabilities

</h2>



<div
className="
grid
md:grid-cols-4
gap-6
mt-12
"
>


<Capability
title="GIS Platform"
text="Enterprise mapping and spatial data management."
/>


<Capability
title="Spatial AI"
text="AI-powered geospatial analytics and intelligence."
/>


<Capability
title="Remote Sensing"
text="Satellite imagery and earth observation solutions."
/>


<Capability
title="Cloud GIS"
text="Scalable cloud-based geospatial infrastructure."
/>



</div>


</div>


</section>






{/* MISSION */}



<section
className="
py-24
px-8
bg-blue-950
"
>


<div
className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
"
>


<div>

<h2
className="
text-4xl
font-bold
"
>
Our Mission
</h2>


<p
className="
mt-6
text-blue-100
text-lg
"
>

Transform location data into
intelligent decisions.

</p>

</div>




<div>

<h2
className="
text-4xl
font-bold
"
>
Our Vision
</h2>


<p
className="
mt-6
text-blue-100
text-lg
"
>

Build a smarter world powered
by spatial intelligence.

</p>

</div>



</div>


</section>






{/* CTA */}


<section
className="
py-20
text-center
px-8
"
>


<h2
className="
text-4xl
font-bold
"
>

Partner With QLXGEO

</h2>


<p
className="
mt-5
text-slate-400
"
>

Explore the future of geospatial intelligence.

</p>



<a
href="/"
className="
inline-block
mt-8
bg-blue-600
px-10
py-4
rounded-xl
"
>

Back Home

</a>


</section>



</main>

)

}






function Stat(
{
number,
title
}
:
{
number:string;
title:string;
}
){


return (

<div
className="
bg-white
rounded-2xl
p-8
shadow-lg
"
>


<h3
className="
text-5xl
font-bold
text-blue-600
"
>

{number}

</h3>


<p
className="
mt-4
text-gray-600
"
>

{title}

</p>


</div>

)

}






function Capability(
{
title,
text
}
:
{
title:string;
text:string;
}
){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-2xl
p-8
hover:border-blue-500
transition
"

>


<h3
className="
text-xl
font-bold
"
>

{title}

</h3>



<p
className="
mt-4
text-slate-400
"
>

{text}

</p>



</div>


)

}