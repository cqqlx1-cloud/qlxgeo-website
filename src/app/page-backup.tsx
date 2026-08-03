import Technology from "./components/Technology";
import MapLoader from "./components/MapLoader";
import Solutions from "./components/Solutions";
import GlobalNetwork from "./components/GlobalNetwork";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Home(){


return (

<main>

<Navbar />



{/* ================= HERO ================= */}


<section

className="
relative
min-h-screen
bg-gradient-to-br
from-slate-950
via-blue-950
to-slate-900
text-white
flex
items-center
"


>


<div

className="
max-w-7xl
mx-auto
px-8
w-full
"


>


<div

className="
grid
lg:grid-cols-2
gap-16
items-center
"


>



{/* ================= LEFT ================= */}



<div>



<p

className="
text-blue-400
text-lg
tracking-[0.3em]
mb-6
"

>

GEO SPATIAL INTELLIGENCE PLATFORM

</p>





<h1

className="
text-6xl
xl:text-7xl
font-bold
leading-tight
"

>

Geospatial Intelligence

<br/>

For A Smarter World


</h1>





<p

className="
mt-8
text-xl
text-slate-300
leading-relaxed
max-w-xl
"

>

QLXGEO provides advanced GIS,
mapping and spatial intelligence
solutions for organizations worldwide.


</p>







<div

className="
mt-10
flex
gap-5
"

>



<button

className="
bg-blue-600
hover:bg-blue-700
px-8
py-4
rounded-xl
text-lg
transition
"

>

Explore Solutions

</button>




<button

className="
border
border-white/40
hover:bg-white/10
px-8
py-4
rounded-xl
text-lg
transition
"

>

Contact Us

</button>



</div>



</div>









{/* ================= GIS DASHBOARD ================= */}




<div>


<div

className="
bg-slate-900/80
backdrop-blur-xl
border
border-white/20
rounded-3xl
shadow-2xl
p-6
"

>




<div

className="
flex
justify-between
items-center
mb-6
"

>



<div>


<p

className="
text-sm
text-blue-400
"

>

LIVE GIS PLATFORM

</p>




<h3

className="
text-xl
font-bold
"

>

Spatial Intelligence Dashboard

</h3>


</div>





<div

className="
h-3
w-3
rounded-full
bg-green-400
animate-pulse
"

/>



</div>







{/* MAP */}



<div

className="
h-[420px]
rounded-2xl
overflow-hidden
border
border-white/10
"

>


<MapLoader />


</div>









{/* DATA */}



<div

className="
grid
grid-cols-3
gap-4
mt-5
"

>




<StatCard

title="Layers"

value="128"

/>




<StatCard

title="Data"

value="10M+"

/>





<StatCard

title="Status"

value="Online"

/>




</div>




</div>



</div>





</div>



</div>



</section>









{/* ================= SOLUTIONS ================= */}

<section id="solutions">

<Solutions />

</section>



{/* ================= TECHNOLOGY ================= */}

<section id="technology">

<Technology />

</section>



{/* ================= GLOBAL NETWORK ================= */}

<section id="network">

<GlobalNetwork />

</section>



{/* ================= CONTACT ================= */}

<section id="contact">

<Contact />

</section>


{/* ================= ABOUT ================= */}


<section

id="about"

className="
py-28
bg-slate-100
"

>


<div

className="
max-w-7xl
mx-auto
px-8
"

>


<p

className="
text-blue-600
tracking-[0.3em]
"

>

ABOUT QLXGEO

</p>




<h2

className="
mt-5
text-5xl
font-bold
text-slate-900
"

>

Building The Future
Of Spatial Intelligence

</h2>





<p

className="
mt-8
text-xl
text-gray-700
max-w-4xl
leading-relaxed
"

>

QLXGEO develops advanced geospatial technologies,
digital mapping platforms and AI-powered spatial
analytics solutions helping organizations understand
the world through location intelligence.

</p>







{/* ABOUT DATA */}


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
bg-white
rounded-2xl
p-8
shadow-lg
"

>

<p
className="
text-blue-600
text-sm
tracking-widest
"
>

GLOBAL LAYERS

</p>


<h3
className="
text-5xl
font-bold
mt-4
text-slate-900
"
>

128+

</h3>


<p
className="
mt-3
text-gray-600
"
>

Spatial data layers

</p>


</div>







<div

className="
bg-white
rounded-2xl
p-8
shadow-lg
"

>

<p
className="
text-blue-600
text-sm
tracking-widest
"
>

DATA RECORDS

</p>


<h3
className="
text-5xl
font-bold
mt-4
text-slate-900
"
>

10M+

</h3>


<p
className="
mt-3
text-gray-600
"
>

Processed geospatial data

</p>


</div>







<div

className="
bg-white
rounded-2xl
p-8
shadow-lg
"

>

<p
className="
text-blue-600
text-sm
tracking-widest
"
>

SYSTEM STATUS

</p>


<h3
className="
text-5xl
font-bold
mt-4
text-green-500
"
>

99.99%

</h3>


<p
className="
mt-3
text-gray-600
"
>

Platform availability

</p>


</div>





</div>





</div>


</section>








{/* ================= FOOTER ================= */}

<Footer />


</main>


);

}








function StatCard(

{

title,

value

}

:

{

title:string;

value:string;

}

){


return (

<div

className="
bg-white/10
rounded-xl
p-4
border
border-white/10
text-center
"

>


<p

className="
text-blue-300
text-sm
"

>

{title}

</p>




<p

className="
text-2xl
font-bold
mt-2
"

>

{value}

</p>



</div>


);


}