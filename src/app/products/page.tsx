import Image from "next/image";
import Link from "next/link";


const products = [


{
title:"Leica GNSS Solutions",
model:"GS18 / GS16 Series",
image:"/products/leica-gnss.jpg",

desc:
"High precision GNSS positioning solutions for professional surveying, construction and mapping applications.",

link:"/products/gnss-rtk"

},



{
title:"Leica Total Station Solutions",
model:"TS16 / TS13 Series",
image:"/products/leica-total-station.jpg",

desc:
"Advanced robotic total station solutions for engineering, infrastructure and professional measurement projects.",

link:"/products/total-station"

},




{
title:"Leica 3D Laser Scanning",
model:"BLK / RTC Series",
image:"/products/leica-blk.png",

desc:
"Reality capture technology for BIM, digital twin and 3D spatial documentation.",

link:"/products/lidar"

},




{
title:"Leica UAV Mapping Solutions",
model:"Aerial Mapping Systems",
image:"/products/leica-uav.png",

desc:
"Professional aerial mapping solutions for large-scale surveying and geospatial projects.",

link:"/products/uav"

}



];




export default function Products(){


return (

<main className="bg-black text-white">





{/* HERO */}


<section

className="
px-8
lg:px-20
py-32
text-center
"

>


<h1

className="
text-5xl
lg:text-6xl
font-bold
"

>

Leica Geospatial Equipment

</h1>



<p

className="
mt-6
text-gray-400
text-lg
max-w-3xl
mx-auto
"

>

Professional Leica surveying solutions
for engineering companies,
surveying professionals and global projects.

</p>



</section>








{/* PRODUCTS */}



<section

className="
px-8
lg:px-20
pb-28
"

>



<div

className="
grid
lg:grid-cols-2
gap-10
"

>


{


products.map((item)=>(


<div

key={item.title}

className="
bg-zinc-900
rounded-3xl
overflow-hidden
border
border-zinc-800
hover:border-blue-500
transition
"

>





{/* IMAGE */}



<div

className="
relative
h-[350px]
bg-white
"

>


<Image

src={item.image}

alt={item.title}

fill

sizes="50vw"

className="
object-contain
"

/>



</div>







{/* CONTENT */}



<div

className="
p-8
"

>


<h2

className="
text-3xl
font-bold
"

>

{item.title}

</h2>
<p
className="
mt-2
text-blue-400
font-semibold
"
>

{item.model}

</p>


<p

className="
mt-5
text-gray-400
leading-relaxed
"

>

{item.desc}

</p>




<Link

href={item.link}

className="
inline-block
mt-8
bg-blue-600
px-7
py-3
rounded-lg
font-semibold
hover:bg-blue-700
"

>

Explore Solution →

</Link>



</div>




</div>



))


}



</div>



</section>







{/* WHY */}



<section

className="
bg-zinc-950
px-8
lg:px-20
py-24
"

>



<h2

className="
text-4xl
font-bold
text-center
"

>

Professional Leica Solutions

</h2>




<div

className="
grid
md:grid-cols-3
gap-8
mt-12
"

>



<div

className="
bg-zinc-900
p-8
rounded-2xl
"

>


<h3 className="text-xl font-bold">

Precision Technology

</h3>


<p className="mt-4 text-gray-400">

High accuracy measurement solutions
for professional applications.

</p>


</div>





<div

className="
bg-zinc-900
p-8
rounded-2xl
"

>


<h3 className="text-xl font-bold">

Project Support

</h3>


<p className="mt-4 text-gray-400">

Technical consulting and solution
recommendations.

</p>


</div>





<div

className="
bg-zinc-900
p-8
rounded-2xl
"

>


<h3 className="text-xl font-bold">

Global Supply

</h3>


<p className="mt-4 text-gray-400">

Supporting customers across Asia,
Middle East and Africa.

</p>


</div>



</div>


</section>






</main>

);


}