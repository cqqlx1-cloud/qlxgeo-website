import Image from "next/image";


export default function Home(){


const products = [

{
title:"GNSS RTK",
desc:"High precision GNSS RTK receivers for surveying, mapping and construction applications.",
image:"/products/gnss-rtk.png"
},

{
title:"Total Station",
desc:"Professional total station solutions for engineering and land surveying.",
image:"/products/total-station.jpg"
},

{
title:"LiDAR Scanner",
desc:"Advanced 3D laser scanning technology for reality capture and digital mapping.",
image:"/products/lidar.png"
},

{
title:"UAV Mapping",
desc:"Drone mapping solutions for aerial surveying and geospatial data collection.",
image:"/products/uav.jpg"
}

];



return (

<main className="bg-white">



{/* HERO */}

<section
className="
bg-black
text-white
pt-32
pb-24
"
>


<div
className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
"
>



<div>


<h1
className="
text-5xl
md:text-6xl
font-bold
leading-tight
"
>

Professional Surveying Equipment

<br/>

<span className="text-blue-500">

For A Smarter World

</span>


</h1>



<p
className="
mt-8
text-lg
text-gray-300
leading-relaxed
"
>

QLXGEO supplies high precision GNSS RTK,
Total Station, LiDAR and surveying equipment
for customers worldwide.

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
py-3
rounded-lg
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
py-3
rounded-lg
hover:bg-white
hover:text-black
"
>

Contact Us

</a>


</div>


</div>







{/* PRODUCT DISPLAY */}


<div
className="
grid
grid-cols-2
gap-5
"
>


{

products.map((item)=>(


<div
key={item.title}
className="
bg-gray-900
rounded-2xl
p-5
border
border-gray-800
"
>



<div
className="
h-32
rounded-xl
bg-gray-800
flex
items-center
justify-center
overflow-hidden
"
>


{/* 
以后放真实产品图片

<Image
src={item.image}
alt={item.title}
width={300}
height={200}
/>

*/}


<Image

src={item.image}

alt={item.title}

width={400}

height={250}

className="
w-full
h-full
object-contain
"

/>


</div>




<h3
className="
mt-4
font-bold
text-lg
"
>

{item.title}

</h3>



<p
className="
text-sm
text-gray-400
mt-2
"
>

{item.desc}

</p>



</div>


))

}



</div>




</div>


</section>








{/* PRODUCTS */}



<section
className="
py-20
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-bold
text-center
"
>

Our Products

</h2>



<p
className="
text-center
text-gray-600
mt-4
"
>

Professional surveying instruments for global markets.

</p>




<div
className="
grid
md:grid-cols-4
gap-8
mt-12
"
>


{

products.map((item)=>(


<div
key={item.title}
className="
border
rounded-xl
p-6
hover:shadow-xl
transition
"
>


<div
className="
h-44
bg-gray-100
rounded-lg
flex
items-center
justify-center
"
>

{item.title}

</div>



<h3
className="
mt-5
font-bold
text-xl
"
>

{item.title}

</h3>



<p
className="
mt-3
text-gray-600
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
text-blue-600
"
>

Inquiry →

</a>



</div>


))

}


</div>


</div>


</section>








{/* ADVANTAGE */}



<section
className="
bg-gray-100
py-20
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-bold
text-center
"
>

Why Choose QLXGEO

</h2>



<div
className="
grid
md:grid-cols-4
gap-6
mt-12
"
>


{

[
"OEM / ODM Support",
"Competitive Pricing",
"Global Shipping",
"Technical Support"
].map(item=>(


<div
key={item}
className="
bg-white
rounded-xl
p-8
text-center
font-semibold
"
>

{item}

</div>


))

}


</div>


</div>


</section>








{/* CTA */}



<section
className="
bg-blue-600
text-white
py-20
text-center
"
>


<h2
className="
text-4xl
font-bold
"
>

Looking For Surveying Equipment?

</h2>



<p
className="
mt-5
text-lg
"
>

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
"
>

Send Inquiry

</a>



</section>



</main>

)


}