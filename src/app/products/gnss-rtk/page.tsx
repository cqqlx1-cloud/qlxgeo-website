import Link from "next/link";


export default function GNSSRTKPage(){


return (

<main className="
bg-black
text-white
min-h-screen
">


{/* HERO */}

<section
className="
pt-32
px-8
lg:px-20
grid
lg:grid-cols-2
gap-16
items-center
"
>


<div>


<p
className="
text-blue-400
tracking-[0.4em]
text-sm
"
>
LEICA GNSS RTK
</p>



<h1
className="
text-5xl
lg:text-6xl
font-bold
mt-6
leading-tight
"
>

High Precision
GNSS RTK
Solution

</h1>



<p
className="
mt-8
text-xl
text-gray-400
leading-relaxed
"
>

Professional Leica GNSS RTK
positioning solutions for surveying,
construction, mapping and engineering
projects worldwide.

</p>



<div
className="
mt-10
flex
gap-5
"
>


<Link

href="/contact"

className="
bg-blue-600
px-8
py-4
rounded-xl
font-semibold
"

>

Request Quote

</Link>



<a

href="https://wa.me/8618983894451"

target="_blank"

className="
bg-green-500
px-8
py-4
rounded-xl
font-semibold
"

>

WhatsApp

</a>



</div>



</div>





{/* IMAGE */}


<div

className="
bg-zinc-900
rounded-3xl
border
border-white/10
p-10
"

>


<img

src="/products/leica-gnss.jpg"

alt="Leica GNSS RTK"

className="
w-full
object-contain
"

/>


</div>



</section>







{/* FEATURES */}


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

Key Features

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


[
"Centimeter Accuracy",
"Multi-Band GNSS",
"RTK Network Support",
"Professional Surveying"
]

.map((item)=>(


<div

key={item}

className="
bg-zinc-900
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

✓ {item}

</h3>


</div>


))


}


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

Applications

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

[
"Construction Survey",
"Land Surveying",
"GIS Mapping",
"Infrastructure Projects"

].map(item=>(


<div

key={item}

className="
bg-black
border
border-white/10
rounded-xl
p-6
"

>

{item}

</div>


))


}



</div>


</section>








{/* SPECIFICATION */}



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
mb-10
"

>

Technical Specification

</h2>




<div

className="
max-w-4xl
border
border-white/10
rounded-2xl
overflow-hidden
"

>


{

[

["GNSS","GPS / GLONASS / Galileo / BeiDou"],

["Accuracy","RTK centimeter level"],

["Communication","4G / Bluetooth"],

["Application","Professional Surveying"]

].map(row=>(


<div

key={row[0]}

className="
grid
grid-cols-2
border-b
border-white/10
p-5
"

>


<div
className="
font-bold
"
>

{row[0]}

</div>



<div
className="
text-gray-400
"
>

{row[1]}

</div>



</div>


))


}


</div>


</section>







{/* CTA */}


<section

className="
px-8
lg:px-20
py-24
bg-blue-600
"

>


<div
className="
max-w-5xl
mx-auto
text-center
"
>


<h2

className="
text-4xl
font-bold
"

>

Need Leica GNSS RTK Solution?

</h2>



<p

className="
mt-5
text-lg
"

>

Contact QLXGEO for quotation,
technical support and global supply.

</p>



<Link

href="/contact"

className="
inline-block
mt-8
bg-black
px-10
py-4
rounded-xl
font-semibold
"

>

Request Quote

</Link>



</div>


</section>




</main>

);


}