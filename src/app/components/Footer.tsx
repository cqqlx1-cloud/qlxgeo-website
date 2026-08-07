import Link from "next/link";


export default function Footer(){


return (

<footer

className="
bg-zinc-950
text-white
border-t
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
px-8
lg:px-20
py-16
"

>


<div

className="
grid
md:grid-cols-4
gap-10
"

>


{/* BRAND */}


<div>


<h2

className="
text-3xl
font-bold
text-blue-400
"

>

QLXGEO

</h2>



<p

className="
mt-5
text-gray-400
leading-relaxed
"

>

Leica Geospatial Equipment Supplier.

Professional GNSS RTK,
Total Station,
3D Laser Scanner and UAV
solutions for global projects.

</p>


</div>






{/* PRODUCTS */}


<div>


<h3

className="
text-xl
font-bold
mb-5
"

>

Products

</h3>



<div className="
space-y-3
text-gray-400
">


<Link href="/products/gnss-rtk">

GNSS RTK

</Link>


<br/>


<Link href="/products/total-station">

Total Station

</Link>


<br/>


<Link href="/products/lidar">

3D Laser Scanner

</Link>


<br/>


<Link href="/products/uav">

UAV Mapping

</Link>


</div>


</div>







{/* SOLUTIONS */}


<div>


<h3

className="
text-xl
font-bold
mb-5
"

>

Solutions

</h3>



<div className="
space-y-3
text-gray-400
">


<p>

Construction Survey

</p>


<p>

Engineering Projects

</p>


<p>

Mapping & GIS

</p>


<p>

Mining

</p>


</div>


</div>








{/* CONTACT */}


<div>


<h3

className="
text-xl
font-bold
mb-5
"

>

Contact

</h3>



<p

className="
text-gray-400
"

>

Email:

</p>


<p

className="
mt-1
"

>

sales@cqqlx.com

</p>




<p

className="
mt-5
text-gray-400
"

>

WhatsApp:

</p>


<p>

+86 18983894451

</p>





<a

href="https://wa.me/8618983894451"

target="_blank"

className="
inline-block
mt-5
bg-green-600
px-5
py-3
rounded-xl
"

>

Chat WhatsApp

</a>



</div>




</div>






<div

className="
mt-14
pt-8
border-t
border-white/10
text-gray-500
text-sm
flex
justify-between
flex-wrap
gap-4
"

>


<p>

© {new Date().getFullYear()} QLXGEO.
All Rights Reserved.

</p>



<p>

Global Markets:
Asia · Middle East · Africa

</p>



</div>





</div>


</footer>


);


}