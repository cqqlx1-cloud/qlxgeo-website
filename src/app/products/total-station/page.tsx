import Image from "next/image";
import Link from "next/link";
import RelatedProducts from "../../components/RelatedProducts";

export default function TotalStation(){


return (

<main className="bg-black text-white">


{/* HERO */}

<section

className="
pt-32
px-8
lg:px-20
py-24
grid
lg:grid-cols-2
gap-16
items-center
"

>



<div

className="
relative
h-[600px]
bg-zinc-900
rounded-3xl
overflow-hidden
border
border-zinc-800
"

>


<Image

src="/products/total-station.jpg"

alt="Leica Total Station"

fill

priority

sizes="50vw"

className="
object-contain
p-10
"

/>


</div>







<div>


<p

className="
text-blue-500
text-lg
mb-5
"

>

LEICA GEOSPATIAL SOLUTIONS

</p>




<h1

className="
text-5xl
lg:text-6xl
font-bold
leading-tight
"

>

Leica Total Station
Solutions

</h1>





<p

className="
mt-8
text-gray-400
text-xl
leading-relaxed
"

>

Advanced robotic total station
solutions for construction,
infrastructure and professional
engineering surveying.

</p>





<Link

href="/contact"

className="
inline-block
mt-10
bg-blue-600
px-10
py-4
rounded-lg
font-semibold
hover:bg-blue-700
"

>

Request Leica Solution

</Link>



</div>



</section>









{/* OVERVIEW */}



<section

className="
px-8
lg:px-20
py-24
bg-zinc-950
"

>


<h2

className="
text-4xl
font-bold
"

>

01 Overview

</h2>




<p

className="
mt-6
max-w-4xl
text-gray-400
text-lg
leading-relaxed
"

>

QLXGEO supplies Leica total station
solutions for engineering,
construction and infrastructure
projects requiring high precision
measurement and reliable workflow.

</p>


</section>









{/* SPECIFICATIONS */}



<section

className="
px-8
lg:px-20
py-24
"

>


<h2

className="
text-4xl
font-bold
"

>

02 Key Specifications

</h2>





<div

className="
grid
md:grid-cols-2
gap-6
mt-10
"

>



<div className="bg-zinc-900 p-8 rounded-2xl">

<h3 className="text-xl font-bold">

Measurement Technology

</h3>


<p className="mt-3 text-gray-400">

High precision electronic distance measurement

</p>

</div>






<div className="bg-zinc-900 p-8 rounded-2xl">

<h3 className="text-xl font-bold">

Robotic Operation

</h3>


<p className="mt-3 text-gray-400">

Automatic target recognition and remote control

</p>

</div>







<div className="bg-zinc-900 p-8 rounded-2xl">

<h3 className="text-xl font-bold">

Accuracy

</h3>


<p className="mt-3 text-gray-400">

Professional engineering measurement accuracy

</p>

</div>







<div className="bg-zinc-900 p-8 rounded-2xl">

<h3 className="text-xl font-bold">

Workflow

</h3>


<p className="mt-3 text-gray-400">

Integrated field data collection

</p>

</div>




</div>


</section>









{/* APPLICATIONS */}



<section

className="
px-8
lg:px-20
py-24
bg-zinc-950
"

>


<h2

className="
text-4xl
font-bold
"

>

03 Applications

</h2>




<div

className="
grid
md:grid-cols-3
gap-6
mt-10
"

>


<div className="bg-zinc-900 p-8 rounded-2xl">

Construction Survey

</div>




<div className="bg-zinc-900 p-8 rounded-2xl">

Infrastructure

</div>




<div className="bg-zinc-900 p-8 rounded-2xl">

Engineering Projects

</div>



</div>


</section>









{/* CTA */}



<section

className="
px-8
lg:px-20
py-24
text-center
bg-zinc-900
"

>



<h2

className="
text-5xl
font-bold
"

>

Need Leica Total Station?

</h2>




<p

className="
mt-5
text-gray-400
"

>

Contact QLXGEO for professional
surveying solutions.

</p>





<Link

href="/contact"

className="
inline-block
mt-10
bg-blue-600
px-10
py-4
rounded-lg
font-semibold
"

>

Contact Us

</Link>




</section>


<RelatedProducts />


</main>

);


}