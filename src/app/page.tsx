import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import GeoBackground from "./components/GeoBackground";
import SpatialNetwork from "./components/SpatialNetwork";

import Solutions from "./components/Solutions";
import Technology from "./components/Technology";
import GlobalNetwork from "./components/GlobalNetwork";
import Contact from "./components/Contact";



export default function Home(){

return (

<main
className="
relative
overflow-hidden
bg-slate-950
text-white
"
>


<Navbar />



{/* HERO */}

<section

className="
relative
min-h-screen
flex
items-center
pt-24
"

>


<GeoBackground />



<div

className="
relative
z-10
max-w-7xl
mx-auto
px-8
grid
md:grid-cols-2
gap-12
items-center
"

>



{/* LEFT */}


<div>


<p

className="
text-blue-400
tracking-[0.35em]
text-sm
mb-6
"

>

PROFESSIONAL SURVEYING EQUIPMENT

</p>




<h1

className="
text-5xl
md:text-7xl
font-bold
leading-tight
"

>

Surveying Equipment
Supplier For Global
Professionals

</h1>





<p

className="
mt-8
text-lg
text-slate-300
leading-relaxed
max-w-xl
"

>

QLXGEO provides professional surveying
equipment including GNSS RTK receivers,
total stations, laser scanners, LiDAR systems
and mapping solutions for customers worldwide.

</p>





<div

className="
flex
gap-5
mt-10
"

>


<a

href="/products"

className="
bg-blue-600
px-8
py-4
rounded-xl
hover:bg-blue-700
transition
"

>

View Products

</a>



<a

href="/contact"

className="
border
border-white/30
px-8
py-4
rounded-xl
hover:bg-white/10
transition
"

>

Request Quote

</a>



</div>



</div>






{/* RIGHT */}


<div

className="
relative
h-[520px]
"

>


<div

className="
absolute
inset-0
rounded-3xl
bg-slate-900
border
border-white/10
overflow-hidden
"

>


<img

src="/products/hero-equipment.jpg"

alt="Surveying Equipment"

className="
w-full
h-full
object-contain
"

/>


</div>



<div

className="
absolute
bottom-6
left-6
right-6
bg-slate-950/80
backdrop-blur-xl
rounded-2xl
p-6
border
border-white/10
"

>


<p

className="
text-blue-400
text-sm
tracking-widest
"

>

QLXGEO PRODUCT SYSTEM

</p>



<h3

className="
text-2xl
font-bold
mt-2
"

>

GNSS RTK · Total Station · LiDAR

</h3>


<p

className="
text-slate-300
mt-2
"

>

Professional surveying solutions
for global projects.

</p>


</div>



</div>



</div>


</section>









{/* FEATURED PRODUCTS */}



<section

className="
bg-white
text-slate-900
py-24
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
text-4xl
font-bold
"

>

Featured Surveying Equipment

</h2>



<p

className="
mt-4
text-slate-600
"

>

Professional instruments for surveying,
construction and mapping applications.

</p>





<div

className="
grid
md:grid-cols-4
gap-8
mt-12
"

>


<Product

image="/products/gnss-rtk.jpg"

title="GNSS RTK Receiver"

link="/products/gnss-rtk"

/>



<Product

image="/products/total-station.jpg"

title="Total Station"

link="/products/total-station"

/>



<Product

image="/products/laser-scanner.jpg"

title="3D Laser Scanner"

link="/products/laser-scanner"

/>



<Product

image="/products/lidar.jpg"

title="LiDAR System"

link="/products/lidar"

/>



</div>


</div>


</section>









{/* WHY CHOOSE */}



<section

className="
py-24
max-w-7xl
mx-auto
px-8
"

>


<h2

className="
text-4xl
font-bold
"

>

Why Choose QLXGEO

</h2>




<div

className="
grid
md:grid-cols-3
gap-8
mt-12
"

>


<Card

title="Global Supply"

text="Delivering surveying equipment solutions worldwide."

/>



<Card

title="OEM / ODM Support"

text="Customized solutions for different markets."

/>



<Card

title="Technical Support"

text="Professional service for survey professionals."

/>


</div>



</section>






<Applications />


<GlobalAdvantages />


<Solutions />


<Technology />


<GlobalNetwork />


<Contact />


<Footer />



</main>


)

}








function Product({

image,
title,
link

}:{

image:string
title:string
link:string

}){


return (

<a

href={link}

className="
rounded-3xl
bg-slate-100
overflow-hidden
hover:shadow-xl
transition
"

>


<div

className="
h-48
bg-white
flex
items-center
justify-center
"

>

<img

src={image}

alt={title}

className="
w-full
h-full
object-contain
"

/>

</div>



<div

className="
p-6
font-bold
"

>

{title}

</div>


</a>

)

}








function Card({

title,
text

}:{

title:string
text:string

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-2xl
p-8
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
text-slate-300
"

>

{text}

</p>


</div>

)

}
function Applications(){


const items=[

{
title:"Land Survey",
desc:"GNSS RTK and total station solutions for professional land surveying."
},


{
title:"Construction",
desc:"Precision measurement solutions for buildings and infrastructure projects."
},


{
title:"Mining",
desc:"Advanced surveying equipment for mining and large scale projects."
},


{
title:"Mapping",
desc:"LiDAR and UAV solutions for digital mapping and 3D data collection."
}


]


return (

<section

className="
py-24
bg-slate-900
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
text-blue-400
tracking-[0.3em]
text-sm
"

>

APPLICATIONS

</p>



<h2

className="
text-4xl
font-bold
mt-5
"

>

Surveying Solutions For Multiple Industries

</h2>



<p

className="
mt-5
text-slate-300
max-w-3xl
"

>

QLXGEO provides professional surveying
equipment solutions for construction,
mapping, mining and engineering projects.

</p>





<div

className="
grid
md:grid-cols-4
gap-6
mt-12
"

>


{items.map((item,index)=>(


<div

key={index}

className="
bg-slate-950
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

{item.title}

</h3>



<p

className="
mt-4
text-slate-400
text-sm
leading-relaxed
"

>

{item.desc}

</p>



</div>


))}


</div>


</div>


</section>


)

}
function GlobalAdvantages(){


const items=[

{
title:"Global Supply",
number:"50+",
text:"Countries served with professional surveying equipment."
},


{
title:"OEM / ODM",
number:"100%",
text:"Flexible customization for different market requirements."
},


{
title:"Fast Delivery",
number:"24/7",
text:"Professional support and efficient export service."
},


{
title:"Technical Support",
number:"10+",
text:"Experience in surveying technology solutions."
}


]


return (

<section

className="
py-24
bg-white
text-slate-900
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
text-sm
"

>

GLOBAL PARTNERS

</p>



<h2

className="
text-4xl
font-bold
mt-5
"

>

Why Choose QLXGEO

</h2>



<p

className="
mt-5
text-slate-600
max-w-3xl
"

>

Reliable surveying equipment supply,
professional technical support and
global export solutions.

</p>






<div

className="
grid
md:grid-cols-4
gap-8
mt-12
"

>


{items.map((item,index)=>(


<div

key={index}

className="
rounded-3xl
border
border-slate-200
p-8
hover:shadow-xl
transition
"

>


<h3

className="
text-4xl
font-bold
text-blue-600
"

>

{item.number}

</h3>



<h4

className="
text-xl
font-bold
mt-5
"

>

{item.title}

</h4>




<p

className="
mt-4
text-slate-600
leading-relaxed
"

>

{item.text}

</p>


</div>


))}


</div>


</div>


</section>


)

}