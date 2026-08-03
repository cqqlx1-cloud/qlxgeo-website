"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar(){


const [productOpen,setProductOpen]=useState(false);

const [solutionOpen,setSolutionOpen]=useState(false);



return (

<nav

className="
fixed
top-0
left-0
w-full
z-50
bg-slate-950/80
backdrop-blur-xl
border-b
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
px-8
h-20
flex
items-center
justify-between
"

>


{/* LOGO */}


<Link

href="/"

className="
text-2xl
font-bold
tracking-widest
"

>

QLXGEO

</Link>







<div

className="
flex
items-center
gap-10
text-sm
"

>



<Link

href="/"

className="
hover:text-blue-400
"

>

HOME

</Link>








{/* PRODUCTS */}


<div

className="
relative
"

>


<button

onClick={()=>setProductOpen(!productOpen)}

className="
hover:text-blue-400
"

>

PRODUCTS ▾

</button>





{productOpen && (

<div

className="
absolute
top-10
left-0
w-64
bg-slate-900
border
border-white/10
rounded-xl
p-4
shadow-xl
"

>


<ProductLink

name="GNSS RTK Receiver"

link="/products/gnss-rtk"

/>



<ProductLink

name="Total Station"

link="/products/total-station"

/>



<ProductLink

name="3D Laser Scanner"

link="/products/laser-scanner"

/>



<ProductLink

name="LiDAR System"

link="/products/lidar"

/>



<ProductLink

name="UAV Mapping"

link="/products/uav"

/>



<ProductLink

name="Accessories"

link="/products/accessories"

/>



</div>

)}



</div>










{/* SOLUTIONS */}



<div

className="
relative
"

>


<button

onClick={()=>setSolutionOpen(!solutionOpen)}

className="
hover:text-blue-400
"

>

SOLUTIONS ▾

</button>




{solutionOpen && (

<div

className="
absolute
top-10
left-0
w-60
bg-slate-900
border
border-white/10
rounded-xl
p-4
shadow-xl
"

>


<ProductLink

name="Land Survey"

link="/solutions"

/>


<ProductLink

name="Construction"

link="/solutions"

/>


<ProductLink

name="GIS Mapping"

link="/solutions"

/>


<ProductLink

name="Engineering"

link="/solutions"

/>



</div>

)}



</div>









<Link

href="/technology"

className="
hover:text-blue-400
"

>

TECHNOLOGY

</Link>





<Link

href="/network"

className="
hover:text-blue-400
"

>

GLOBAL NETWORK

</Link>





<Link

href="/contact"

className="
hover:text-blue-400
"

>

CONTACT

</Link>





</div>


</div>


</nav>


)

}








function ProductLink({

name,
link

}:{

name:string
link:string

}){


return (

<Link

href={link}

className="
block
px-4
py-3
rounded-lg
hover:bg-white/10
hover:text-blue-400
transition
"

>

{name}

</Link>

)

}