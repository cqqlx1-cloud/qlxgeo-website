import Image from "next/image";
import Navbar from "./components/Navbar";

const products = [
  {
    name: "GNSS RTK",
    image: "/products/gnss-rtk.jpg",
    desc:
      "High precision GNSS receiver with multi-frequency positioning and IMU tilt survey."
  },
  {
    name: "Total Station",
    image: "/products/total-station.jpg",
    desc:
      "Professional total station for construction, mapping and engineering projects."
  },
  {
    name: "LiDAR Scanner",
    image: "/products/lidar.png",
    desc:
      "Advanced LiDAR solution for 3D scanning and spatial data collection."
  },
  {
    name: "UAV Mapping",
    image: "/products/uav.png",
    desc:
      "Professional drone mapping solutions for surveying and GIS applications."
  }
];



const solutions = [
  {
    title:"Land Survey",
    desc:"High accuracy surveying solutions for land development and engineering."
  },
  {
    title:"Construction",
    desc:"Digital measurement solutions for modern construction projects."
  },
  {
    title:"Mapping",
    desc:"Advanced mapping technology with GNSS, UAV and LiDAR."
  },
  {
    title:"GIS Solutions",
    desc:"Spatial intelligence solutions for organizations worldwide."
  }
];



export default function Home(){


return (

<>

<Navbar />

<main className="bg-black text-white">


{/* HERO */}


<section
className="
min-h-screen
flex
items-center
px-8
lg:px-20
py-20
"
>


<div
className="
grid
lg:grid-cols-2
gap-16
items-center
w-full
"
>


{/* LEFT */}


<div>


<h1
className="
text-5xl
lg:text-7xl
font-bold
leading-tight
"
>

Professional Surveying

<br/>

Equipment


<br/>


<span className="text-blue-500">

For A Smarter World

</span>


</h1>



<p
className="
mt-8
text-gray-300
text-lg
max-w-xl
"
>

QLXGEO provides high precision GNSS RTK,
Total Station, LiDAR and UAV surveying solutions
for customers worldwide.

</p>



<div
className="
mt-10
flex
gap-5
"
>


<a
href="/products"
className="
bg-blue-600
px-8
py-4
rounded-lg
font-semibold
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


<div
className="
text-center
mb-8
text-gray-300
text-xl
"
>

QLXGEO Professional Solutions

</div>



<div
className="
grid
grid-cols-2
gap-5
"
>


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
h-36
bg-white
rounded-lg
overflow-hidden
"
>


<Image

src={item.image}

alt={item.name}

fill

sizes="(max-width:768px) 100vw, 300px"

className="
object-contain
"

/>


</div>



<h3
className="
mt-4
text-lg
font-semibold
"
>

{item.name}

</h3>



<p
className="
text-sm
text-gray-400
mt-2
"
>

Professional Survey Equipment

</p>



</div>


))}



</div>



<a

href="/products"

className="
block
mt-8
text-center
bg-blue-600
py-3
rounded-lg
hover:bg-blue-700
"
>

Explore All Products →

</a>



</div>


</div>


</section>


{/* FEATURED PRODUCTS */}


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
text-center
"
>

Featured Products

</h2>



<p
className="
text-center
text-gray-400
mt-4
"
>

Professional Geospatial Equipment Solutions

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


{
products.map((item)=>(


<div
key={item.name}
className="
bg-zinc-900
rounded-2xl
overflow-hidden
border
border-zinc-800
hover:border-blue-500
transition
"
>


<div
className="
relative
h-60
bg-white
"
>


<Image

src={item.image}

alt={item.name}

fill

sizes="(max-width:768px) 100vw,25vw"

className="
object-contain
"

/>


</div>




<div
className="
p-6
"
>


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


))
}


</div>



</section>







{/* SOLUTIONS */}



<section
className="
px-8
lg:px-20
py-24
bg-black
"
>


<h2
className="
text-4xl
font-bold
text-center
"
>

Solutions

</h2>



<p
className="
text-gray-400
text-center
mt-4
"
>

Complete surveying and spatial intelligence solutions

</p>




<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
mt-12
"
>


{
solutions.map((item)=>(


<div
key={item.title}
className="
bg-zinc-900
rounded-2xl
p-8
border
border-zinc-800
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
text-gray-400
mt-4
text-sm
"
>

{item.desc}

</p>



</div>


))
}


</div>


</section>








{/* WHY QLXGEO */}



<section
className="
px-8
lg:px-20
py-24
bg-zinc-950
"
>


<div
className="
grid
lg:grid-cols-3
gap-8
"
>



<div>

<h2
className="
text-4xl
font-bold
"
>

Why Choose QLXGEO

</h2>

</div>




<div
className="
bg-zinc-900
rounded-xl
p-8
"
>


<h3
className="
text-xl
font-bold
"
>

Global Supply

</h3>


<p
className="
text-gray-400
mt-3
"
>

Reliable surveying equipment supply
for worldwide customers.

</p>


</div>





<div
className="
bg-zinc-900
rounded-xl
p-8
"
>


<h3
className="
text-xl
font-bold
"
>

OEM & ODM Support

</h3>


<p
className="
text-gray-400
mt-3
"
>

Customized solutions for distributors
and engineering companies.

</p>


</div>



</div>


</section>







{/* GLOBAL NETWORK */}



<section
className="
px-8
lg:px-20
py-24
bg-black
text-center
"
>


<h2
className="
text-4xl
font-bold
"
>

Global Network

</h2>



<p
className="
text-gray-400
mt-5
max-w-3xl
mx-auto
"
>

QLXGEO serves customers across
Asia, Middle East, Africa and global markets.

</p>



<div
className="
mt-12
text-blue-400
text-xl
"
>

🌍 Asia  
&nbsp;&nbsp;
🌍 Middle East  
&nbsp;&nbsp;
🌍 Africa

</div>



</section>








{/* CONTACT CTA */}



<section
className="
px-8
lg:px-20
py-24
bg-zinc-900
text-center
"
>


<h2
className="
text-5xl
font-bold
"
>

Build Your Surveying Solution

</h2>



<p
className="
text-gray-400
mt-5
"
>

Contact QLXGEO for GNSS RTK,
Total Station, LiDAR and UAV solutions.

</p>



<a

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

Contact QLXGEO

</a>


</section>




</main>

</>

);

}