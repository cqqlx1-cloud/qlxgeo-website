import Link from "next/link";


export default function RelatedProducts(){


const products = [

{
name:"Leica GNSS Solutions",
link:"/products/gnss-rtk"
},

{
name:"Leica Total Station",
link:"/products/total-station"
},

{
name:"Leica 3D Laser Scanning",
link:"/products/lidar"
},

{
name:"Leica UAV Mapping",
link:"/products/uav"
}

];


return (

<section

className="
px-8
lg:px-20
py-24
bg-black
text-white
"

>


<h2

className="
text-4xl
font-bold
text-center
"

>

Related Solutions

</h2>




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

products.map((item)=>(


<Link

key={item.name}

href={item.link}

className="
bg-zinc-900
border
border-zinc-800
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

{item.name}

</h3>


<p

className="
mt-4
text-gray-400
"

>

Explore Solution →

</p>



</Link>


))


}


</div>



</section>


);


}