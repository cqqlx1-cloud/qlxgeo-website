"use client";


import Link from "next/link";

import Contact from "./Contact";

import languages from "../../locales";




const products = [

{
title:"Leica GNSS RTK",

desc:
"High precision GNSS positioning solutions for professional surveying and engineering projects.",

image:"/products/leica-gnss.jpg",

path:"gnss-rtk"

},


{
title:"Leica Total Station",

desc:
"Professional total station solutions for construction, infrastructure and land surveying.",

image:"/products/leica-total-station.jpg",

path:"total-station"

},



{
title:"Leica BLK 3D Laser Scanner",

desc:
"Advanced reality capture and 3D scanning solutions for digital mapping.",

image:"/products/leica-blk.png",

path:"lidar"

},



{
title:"Leica UAV Mapping",

desc:
"Professional aerial mapping solutions for large scale surveying.",

image:"/products/leica-uav.png",

path:"uav"

}


];







export default function HomeContent({

language="en"

}:{

language?:string

}){



const currentLanguage = language;



const t =
languages[
currentLanguage as keyof typeof languages
]
||
languages.en;



const isArabic =
currentLanguage==="ar";





return (

<main

dir={isArabic ? "rtl":"ltr"}

className="bg-black text-white"

>


{/* HERO */}


<section


className={`

min-h-[850px]

px-8

lg:px-20

pt-32

grid

lg:grid-cols-2

gap-16

items-center


${isArabic ? "text-right":"text-left"}

`}


>



<div>


<p

className="
text-blue-400
tracking-[0.4em]
text-sm
mb-6
"

>

{t.hero.brand}

</p>





<h1

className="
text-5xl
lg:text-6xl
font-bold
leading-tight
"

>

{t.hero.title}

<br/>

{t.hero.subtitle}


</h1>





<p

className="
mt-8
text-xl
text-gray-400
max-w-xl
"

>

{t.hero.description}

</p>





<div

className={`

mt-10

flex

gap-5


${isArabic ? "flex-row-reverse":""}

`}

>


<Link

href={`/${currentLanguage}/contact`}

className="
bg-blue-600
px-8
py-4
rounded-xl
font-semibold
"

>

{t.hero.request}

</Link>





<Link

href={`/${currentLanguage}/products`}

className="
border
border-white/30
px-8
py-4
rounded-xl
"

>

{t.hero.products}

</Link>


</div>


</div>
{/* HERO PRODUCT */}


<div

className="
rounded-3xl
bg-zinc-900
border
border-white/10
p-8
"

>


<p

className="
text-blue-400
tracking-[0.3em]
text-sm
"

>

LEICA TOTAL STATION

</p>




<h3

className="
text-3xl
font-bold
mt-4
"

>

High Precision Surveying

</h3>




<div

className="
h-72
mt-6
flex
items-center
justify-center
"

>


<img

src="/products/leica-total-station.jpg"

alt="Leica Total Station"

className="
max-h-full
object-contain
"

/>


</div>




<div

className="
grid
grid-cols-3
gap-3
mt-8
"

>


<div

className="
bg-black
rounded-xl
p-3
text-center
"

>

Survey

</div>



<div

className="
bg-black
rounded-xl
p-3
text-center
"

>

Construction

</div>



<div

className="
bg-black
rounded-xl
p-3
text-center
"

>

Mapping

</div>



</div>


</div>



</section>





{/* PRODUCTS */}



<section

className={`

px-8

lg:px-20

py-24

bg-zinc-950


${isArabic ? "text-right":""}

`}

>


<div className="max-w-7xl mx-auto">



<p

className="
text-blue-400
tracking-[0.3em]
text-sm
"

>

PRODUCTS

</p>





<h2

className="
text-4xl
lg:text-5xl
font-bold
mt-4
"

>

{t.products.title}

</h2>





<p

className="
mt-5
text-gray-400
"

>

{t.products.category}

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

key={item.title}

className="

bg-black

border

border-white/10

rounded-2xl

p-6

"

>



<div

className="

h-44

flex

items-center

justify-center

bg-zinc-900

rounded-xl

"

>


<img

src={item.image}

alt={item.title}

className="

w-full

h-full

object-contain

p-4

"

/>


</div>






<h3

className="
text-xl
font-bold
mt-6
"

>

{item.title}

</h3>





<p

className="
mt-3
text-gray-400
text-sm
"

>

{item.desc}

</p>






<div

className={`

mt-5

flex

gap-4


${isArabic ? "flex-row-reverse":""}

`}

>


<Link

href={`/${currentLanguage}/products/${item.path}`}

className="
text-blue-400
"

>

View Product →

</Link>




<Link

href={`/${currentLanguage}/contact`}

className="
text-green-400
"

>

Request Quote

</Link>



</div>



</div>



))


}



</div>



</div>



</section>
{/* SOLUTIONS */}


<section


className={`

px-8

lg:px-20

py-24


${isArabic ? "text-right":""}

`}


>


<div className="max-w-7xl mx-auto">



<p

className="
text-blue-400
tracking-[0.3em]
text-sm
"

>

SOLUTIONS

</p>






<h2

className="
text-4xl
font-bold
mt-4
"

>

Geospatial Solutions For Global Industries

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

rounded-2xl

border

border-white/10

p-8

"

>


<h3

className="text-2xl font-bold"

>

Construction Survey

</h3>



<p

className="
mt-4
text-gray-400
"

>

High precision Leica surveying
solutions for construction projects.

</p>


</div>







<div

className="

bg-zinc-900

rounded-2xl

border

border-white/10

p-8

"

>


<h3

className="text-2xl font-bold"

>

Engineering Projects

</h3>




<p

className="
mt-4
text-gray-400
"

>

Professional Leica equipment
for infrastructure projects.

</p>


</div>







<div

className="

bg-zinc-900

rounded-2xl

border

border-white/10

p-8

"

>


<h3

className="text-2xl font-bold"

>

Mapping & GIS

</h3>




<p

className="
mt-4
text-gray-400
"

>

Advanced mapping and reality
capture solutions.

</p>


</div>



</div>



</div>



</section>









{/* WHY CHOOSE QLXGEO */}



<section


className={`

px-8

lg:px-20

py-24

bg-zinc-950


${isArabic ? "text-right":""}

`}


>


<div className="max-w-7xl mx-auto">



<p

className="
text-blue-400
tracking-[0.3em]
text-sm
"

>

WHY QLXGEO

</p>






<h2

className="
text-4xl
font-bold
mt-4
"

>

{t.why.title}

</h2>






<div

className="

grid

md:grid-cols-4

gap-6

mt-12

"

>




<div

className="
bg-zinc-900
rounded-2xl
p-8
border
border-white/10
"

>


<h3

className="text-xl font-bold"

>

{t.why.equipment}

</h3>


<p

className="
mt-4
text-gray-400
"

>

Professional Leica GNSS,
Total Station and surveying
solutions.

</p>


</div>







<div

className="
bg-zinc-900
rounded-2xl
p-8
border
border-white/10
"

>


<h3

className="text-xl font-bold"

>

{t.why.export}

</h3>


<p

className="
mt-4
text-gray-400
"

>

Asia,
Middle East and Africa markets.

</p>


</div>







<div

className="
bg-zinc-900
rounded-2xl
p-8
border
border-white/10
"

>


<h3

className="text-xl font-bold"

>

{t.why.oem}

</h3>


<p

className="
mt-4
text-gray-400
"

>

Flexible solutions for
global partners.

</p>


</div>







<div

className="
bg-zinc-900
rounded-2xl
p-8
border
border-white/10
"

>


<h3

className="text-xl font-bold"

>

{t.why.service}

</h3>


<p

className="
mt-4
text-gray-400
"

>

Professional technical support.

</p>


</div>




</div>



</div>



</section>
{/* GLOBAL MARKET */}


<section


className={`

px-8

lg:px-20

py-24


${isArabic ? "text-right":""}

`}


>


<div


className="

max-w-7xl

mx-auto

bg-zinc-900

rounded-3xl

p-10

border

border-white/10

"

>


<h2

className="

text-4xl

font-bold

"

>

Global Surveying Equipment Partner

</h2>





<p

className="

mt-5

text-gray-400

text-lg

"

>

QLXGEO provides Leica geospatial
equipment solutions for customers
worldwide.

</p>







<div


className={`

flex

gap-6

mt-8

flex-wrap


${isArabic ? "flex-row-reverse":""}

`}


>


<span

className="

bg-black

px-6

py-3

rounded-xl

"

>

Asia

</span>





<span

className="

bg-black

px-6

py-3

rounded-xl

"

>

Middle East

</span>





<span

className="

bg-black

px-6

py-3

rounded-xl

"

>

Africa

</span>



</div>



</div>



</section>









{/* CONTACT */}



<section


className="

px-8

lg:px-20

py-24

"

>


<Contact

language={currentLanguage}

/>


</section>





</main>


);


}