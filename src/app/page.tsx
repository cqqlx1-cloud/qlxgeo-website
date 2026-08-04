import Image from "next/image";


export default function Home() {


const products = [

{
title:"GNSS RTK",
desc:"High precision GNSS positioning solutions for surveying and mapping professionals.",
image:"/products/rtk.jpg"
},

{
title:"Total Station",
desc:"Professional total stations for construction and engineering surveying.",
image:"/products/total-station.jpg"
},

{
title:"LiDAR Scanner",
desc:"Advanced 3D laser scanning solutions for reality capture.",
image:"/products/lidar.jpg"
},

{
title:"Survey Accessories",
desc:"Survey controllers, poles, batteries and accessories.",
image:"/products/accessories.jpg"
}

];



return (

<main>


{/* Hero */}

<section className="
bg-black
text-white
min-h-[650px]
flex
items-center
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
">


<div>


<h1 className="
text-5xl
font-bold
leading-tight
">

Professional Surveying Equipment
<br/>

<span className="text-blue-500">
For A Smarter World
</span>

</h1>



<p className="
mt-6
text-gray-300
text-lg
">

QLXGEO supplies high precision GNSS RTK,
Total Station, LiDAR and surveying equipment
for customers worldwide.

</p>



<div className="mt-8 flex gap-4">


<a
href="/products"
className="
bg-blue-600
px-8
py-3
rounded-lg
">

View Products

</a>



<a
href="/contact"
className="
border
border-gray-500
px-8
py-3
rounded-lg
">

Contact Us

</a>


</div>


</div>





<div className="
bg-white/10
rounded-2xl
p-8
">


<div className="
text-center
text-gray-300
">

QLXGEO

</div>


<div className="
grid
grid-cols-2
gap-5
mt-6
">


<div className="
bg-gray-900
rounded-xl
p-6
">

GNSS RTK

</div>


<div className="
bg-gray-900
rounded-xl
p-6
">

Total Station

</div>


<div className="
bg-gray-900
rounded-xl
p-6
">

LiDAR

</div>


<div className="
bg-gray-900
rounded-xl
p-6
">

UAV Mapping

</div>


</div>


</div>



</div>


</section>







{/* Products */}


<section className="
py-20
bg-white
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-center
">

Our Surveying Products

</h2>


<p className="
text-center
mt-4
text-gray-600
">

High precision instruments for global surveying projects.

</p>




<div className="
grid
md:grid-cols-4
gap-8
mt-12
">


{products.map((item)=>(
<div
key={item.title}
className="
border
rounded-xl
p-6
hover:shadow-xl
transition
">


<div className="
h-40
bg-gray-100
rounded-lg
flex
items-center
justify-center
">

Product Image

</div>


<h3 className="
text-xl
font-bold
mt-5
">

{item.title}

</h3>


<p className="
text-gray-600
mt-3
">

{item.desc}

</p>



<a
href="/products"
className="
text-blue-600
inline-block
mt-4
">

Learn More →

</a>



</div>
))}


</div>


</div>


</section>








{/* Advantages */}


<section className="
bg-gray-100
py-20
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-center
">

Why Choose QLXGEO

</h2>


<div className="
grid
md:grid-cols-4
gap-6
mt-12
">


{

[
"OEM / ODM Support",
"Competitive Factory Price",
"Global Shipping",
"Technical Support"
].map(item=>(

<div
key={item}
className="
bg-white
p-8
rounded-xl
text-center
font-semibold
">

{item}

</div>

))

}


</div>


</div>


</section>







{/* CTA */}


<section className="
py-20
bg-blue-600
text-white
text-center
">


<h2 className="
text-4xl
font-bold
">

Need Surveying Equipment?

</h2>


<p className="
mt-4
text-lg
">

Contact QLXGEO for quotation and technical support.

</p>


<a
href="/contact"
className="
inline-block
mt-8
bg-white
text-blue-600
px-10
py-3
rounded-lg
">

Send Inquiry

</a>


</section>



</main>

)

}