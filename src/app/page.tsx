import Image from "next/image";


const products = [
  {
    name:"GNSS RTK",
    image:"/products/gnss-rtk.png",
    desc:"High precision GNSS receiver with multi-frequency positioning and IMU tilt survey."
  },
  {
    name:"Total Station",
    image:"/products/total-station.jpg",
    desc:"Professional total station for construction, mapping and engineering projects."
  },
  {
    name:"LiDAR Scanner",
    image:"/products/lidar.png",
    desc:"Advanced LiDAR solution for 3D scanning and spatial data collection."
  },
  {
    name:"UAV Mapping",
    image:"/products/uav.jpg",
    desc:"Professional drone mapping solutions for surveying and GIS applications."
  }
];



export default function Home(){


return (

<main className="bg-black text-white">


{/* HERO */}

<section className="
min-h-screen
flex
items-center
px-8
lg:px-20
py-20
">


<div className="
grid
lg:grid-cols-2
gap-12
items-center
w-full
">


{/* LEFT */}

<div>


<h1 className="
text-5xl
lg:text-7xl
font-bold
leading-tight
">

Professional Surveying
<br/>

Equipment

<br/>

<span className="text-blue-500">
For A Smarter World
</span>


</h1>


<p className="
mt-8
text-gray-300
text-lg
max-w-xl
">

QLXGEO supplies high precision GNSS RTK,
Total Station, LiDAR and surveying equipment
for customers worldwide.

</p>



<div className="
mt-10
flex
gap-5
">


<a
href="/products"
className="
bg-blue-600
px-8
py-4
rounded-lg
font-semibold
hover:bg-blue-700
"
>

View Products

</a>



<a
href="/contact"
className="
border
border-gray-500
px-8
py-4
rounded-lg
font-semibold
"
>

Contact Us

</a>


</div>


</div>





{/* RIGHT PRODUCT SHOWCASE */}


<div
className="
bg-zinc-900
rounded-3xl
p-8
border
border-zinc-800
"
>


<div className="
text-center
mb-6
text-gray-300
">

QLXGEO Professional Solutions

</div>



<div className="
grid
grid-cols-2
gap-5
">


{products.map((item)=>(


<div
key={item.name}
className="
bg-zinc-800
rounded-xl
p-4
hover:scale-105
transition
"
>


<div
className="
relative
h-32
"
>


<Image

src={item.image}

alt={item.name}

fill

className="
object-contain
"

/>


</div>



<h3 className="
mt-3
font-semibold
text-lg
">

{item.name}

</h3>


</div>


))}


</div>


</div>



</div>


</section>






{/* PRODUCTS */}



<section
className="
px-8
lg:px-20
py-20
bg-zinc-950
"
>


<h2
className="
text-4xl
font-bold
text-center
"
>

Featured Products

</h2>



<p
className="
text-gray-400
text-center
mt-4
"
>

Professional geospatial equipment solutions

</p>




<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
mt-12
"
>


{products.map((item)=>(


<div

key={item.name}

className="
bg-zinc-900
rounded-2xl
overflow-hidden
border
border-zinc-800
"

>


<div
className="
relative
h-56
bg-white
"
>


<Image

src={item.image}

alt={item.name}

fill

className="
object-contain
"

/>


</div>



<div className="p-6">


<h3
className="
text-xl
font-bold
"
>

{item.name}

</h3>


<p
className="
text-gray-400
mt-3
text-sm
"
>

{item.desc}

</p>



<a

href="/contact"

className="
inline-block
mt-5
text-blue-400
"

>

Inquiry →

</a>


</div>



</div>


))}


</div>



</section>





</main>


);


}