import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export const metadata: Metadata = {

title:
"Surveying Equipment Supplier | QLXGEO GNSS RTK Total Station",


description:
"QLXGEO provides professional surveying equipment including GNSS RTK receivers, total stations, laser scanners, LiDAR and UAV mapping solutions worldwide.",


keywords:[

"GNSS RTK Supplier",

"Total Station Supplier",

"Survey Equipment Manufacturer",

"Laser Scanner Supplier",

"LiDAR Equipment",

"UAV Mapping System"

]

};





export default function Products(){



const products=[


{
title:"GNSS RTK Receiver",

category:"GNSS Positioning",

desc:
"High precision GNSS RTK system for land surveying and mapping.",

features:[
"Multi constellation GNSS",
"Centimeter accuracy",
"4G Bluetooth"
],

image:"/products/gnss-rtk.jpg",

link:"/products/gnss-rtk"

},



{
title:"Total Station",

category:"Survey Instrument",

desc:
"Professional electronic total station for engineering and construction.",

features:[
"High accuracy angle",
"Reflectorless EDM",
"Long range measurement"
],

image:"/products/total-station.jpg",

link:"/products/total-station"

},



{
title:"3D Laser Scanner",

category:"Reality Capture",

desc:
"Advanced scanning solution for BIM and 3D mapping.",

features:[
"Point cloud capture",
"Fast scanning",
"BIM workflow"
],

image:"/products/laser-scanner.jpg",

link:"/products/laser-scanner"

},



{
title:"LiDAR System",

category:"3D Mapping",

desc:
"Professional LiDAR solution for surveying and mapping.",

features:[
"High density data",
"Large area mapping",
"3D modeling"
],

image:"/products/lidar.jpg",

link:"/products/lidar"

},



{
title:"UAV Mapping",

category:"Aerial Survey",

desc:
"Drone mapping system for photogrammetry and surveying.",

features:[
"RTK positioning",
"Large coverage",
"3D reconstruction"
],

image:"/products/uav.jpg",

link:"/products/uav"

},



{
title:"Survey Accessories",

category:"Accessories",

desc:
"Professional accessories for GNSS and total stations.",

features:[
"Tripods",
"Prisms",
"Controllers"
],

image:"/products/accessories.jpg",

link:"/products/accessories"

}


]





return (

<main

className="
min-h-screen
bg-slate-950
text-white
"

>


<Navbar />





{/* HERO */}



<section

className="
pt-40
pb-24
max-w-7xl
mx-auto
px-8
"

>


<p

className="
text-blue-400
tracking-[0.3em]
"

>

QLXGEO PRODUCTS

</p>




<h1

className="
text-6xl
font-bold
mt-6
leading-tight
"

>

Professional Surveying Equipment
Solutions

</h1>





<p

className="
mt-8
text-xl
text-slate-300
max-w-3xl
"

>

GNSS RTK, Total Station, Laser Scanner,
LiDAR and UAV mapping equipment
for global surveying professionals.

</p>




<a

href="/contact"

className="
inline-block
mt-10
bg-blue-600
px-10
py-4
rounded-xl
"

>

Request Quote

</a>



</section>









{/* PRODUCTS */}



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

Surveying Equipment Categories

</h2>





<div

className="
grid
md:grid-cols-3
gap-8
mt-12
"

>


{

products.map((item,index)=>(


<a

key={index}

href={item.link}

className="
group
rounded-3xl
bg-white
border
border-slate-200
overflow-hidden
hover:shadow-2xl
transition
duration-300
"

>




{/* IMAGE */}



<div

className="
h-64
bg-slate-50
overflow-hidden
"

>


<img

src={item.image}

alt={item.title}

className="
w-full
h-full
object-contain
group-hover:scale-110
transition
duration-500
"

/>


</div>







{/* CONTENT */}



<div

className="
p-8
"

>



<p

className="
text-sm
text-blue-600
tracking-widest
"

>

{item.category}

</p>




<h3

className="
text-2xl
font-bold
mt-3
"

>

{item.title}

</h3>




<p

className="
mt-4
text-slate-600
"

>

{item.desc}

</p>







<ul

className="
mt-5
space-y-2
text-sm
text-slate-500
"

>


{

item.features.map((feature,i)=>(


<li

key={i}

>

✓ {feature}

</li>


))

}


</ul>








<div

className="
mt-8
flex
gap-5
"

>


<span

className="
text-blue-600
font-semibold
"

>

Details →

</span>




<span

className="
text-green-600
font-semibold
"

>

Quote

</span>



</div>



</div>




</a>



))


}


</div>



</div>


</section>









{/* TRUST */}



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

text="Professional surveying equipment for worldwide customers."

/>



<Card

title="OEM / ODM"

text="Customized solutions for different markets."

/>



<Card

title="Technical Support"

text="Complete support before and after sales."

/>



</div>



</section>









{/* CTA */}



<section

className="
bg-blue-600
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

Need Surveying Equipment?

</h2>



<p

className="
mt-5
text-xl
"

>

Contact QLXGEO for professional solutions.

</p>




<a

href="/contact"

className="
inline-block
mt-8
bg-white
text-blue-600
px-10
py-4
rounded-xl
font-bold
"

>

Contact Us

</a>



</section>





<Footer />



</main>


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