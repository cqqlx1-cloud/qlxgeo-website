export default function Resources(){


const resources=[


{
title:"Product Brochures",

desc:
"Download Leica surveying equipment brochures and product information.",

items:[
"GNSS Solutions Brochure",
"Total Station Brochure",
"3D Laser Scanning Guide"
]

},



{
title:"Technical Documents",

desc:
"Technical references and specifications for professional users.",

items:[
"Technical Specifications",
"Application Guides",
"Workflow Documents"
]

},



{
title:"Application Notes",

desc:
"Learn how Leica technology supports different industries.",

items:[
"Construction Surveying",
"Infrastructure Projects",
"Reality Capture Applications"
]

},



{
title:"Project Cases",

desc:
"Professional geospatial solutions used in real projects.",

items:[
"Engineering Projects",
"Mapping Projects",
"Industrial Applications"
]

}


];



return (

<main className="bg-white text-black">



{/* HERO */}


<section

className="
px-8
lg:px-20
py-32
text-center
"

>


<h1

className="
text-5xl
font-bold
"

>

Resources

</h1>



<p

className="
mt-6
text-gray-600
text-lg
max-w-3xl
mx-auto
"

>

Technical resources, product information
and professional solutions from QLXGEO.

</p>



</section>







{/* RESOURCE CARDS */}



<section

className="
px-8
lg:px-20
pb-24
"

>


<div

className="
grid
md:grid-cols-2
gap-10
"

>


{

resources.map((item)=>(


<div

key={item.title}

className="
bg-gray-100
rounded-3xl
p-10
"

>


<h2

className="
text-3xl
font-bold
"

>

{item.title}

</h2>



<p

className="
mt-4
text-gray-600
"

>

{item.desc}

</p>



<ul

className="
mt-8
space-y-3
"

>


{

item.items.map((doc)=>(


<li

key={doc}

className="
border-b
pb-3
"

>

{doc}

</li>


))

}


</ul>



</div>


))


}


</div>


</section>






{/* CTA */}


<section

className="
bg-black
text-white
px-8
lg:px-20
py-24
text-center
"

>


<h2

className="
text-4xl
font-bold
"

>

Need Technical Information?

</h2>



<p

className="
mt-5
text-gray-400
"

>

Contact QLXGEO for product documents
and professional consulting.

</p>




<a

href="/contact"

className="
inline-block
mt-8
bg-blue-600
px-10
py-4
rounded-lg
"

>

Contact Technical Team

</a>



</section>




</main>


);


}