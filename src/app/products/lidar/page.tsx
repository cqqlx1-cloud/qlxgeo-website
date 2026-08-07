import Image from "next/image";
import Link from "next/link";


export default function LiDAR(){


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

src="/products/lidar.png"

alt="Leica 3D Laser Scanner"

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

Leica 3D Laser
Scanning Solutions

</h1>





<p

className="
mt-8
text-gray-400
text-xl
leading-relaxed
"

>

Advanced reality capture solutions
for BIM, digital twins,
industrial measurement and
3D documentation projects.

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

QLXGEO provides Leica reality capture
solutions for professionals requiring
accurate 3D data acquisition,
point cloud processing and digital
project documentation.

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

Scanning Technology

</h3>


<p className="mt-3 text-gray-400">

High accuracy 3D laser scanning

</p>


</div>





<div className="bg-zinc-900 p-8 rounded-2xl">


<h3 className="text-xl font-bold">

Data Output

</h3>


<p className="mt-3 text-gray-400">

Point cloud and 3D spatial data

</p>


</div>






<div className="bg-zinc-900 p-8 rounded-2xl">


<h3 className="text-xl font-bold">

Workflow

</h3>


<p className="mt-3 text-gray-400">

Reality capture and digital processing

</p>


</div>






<div className="bg-zinc-900 p-8 rounded-2xl">


<h3 className="text-xl font-bold">

Integration

</h3>


<p className="mt-3 text-gray-400">

BIM and digital twin applications

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

BIM Projects

</div>




<div className="bg-zinc-900 p-8 rounded-2xl">

Digital Twin

</div>




<div className="bg-zinc-900 p-8 rounded-2xl">

Industrial Measurement

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

Need Leica 3D Scanning Solution?

</h2>




<p

className="
mt-5
text-gray-400
"

>

Contact QLXGEO professional team
for Leica reality capture solutions.

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





</main>

);


}