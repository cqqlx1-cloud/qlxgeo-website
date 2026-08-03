"use client";


export default function GlobalNetwork(){


const nodes = [

{ name:"USA", x:90, y:160 },

{ name:"Canada", x:130, y:90 },

{ name:"Europe", x:300, y:80 },

{ name:"UK", x:270, y:130 },

{ name:"Middle East", x:370, y:170 },

{ name:"India", x:430, y:180 },

{ name:"China", x:500, y:120 },

{ name:"Japan", x:540, y:150 },

{ name:"Singapore", x:470, y:240 },

{ name:"Australia", x:520, y:300 },

{ name:"Brazil", x:160, y:260 },

{ name:"Africa", x:300, y:240 }

];





return (

<section

className="
py-32
bg-slate-950
text-white
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
px-8
"

>



<p

className="
text-blue-400
tracking-[0.4em]
text-sm
"

>

GLOBAL NETWORK

</p>




<h2

className="
mt-6
text-5xl
xl:text-6xl
font-bold
"

>

Worldwide Spatial Intelligence Infrastructure

</h2>




<p

className="
mt-6
text-xl
text-slate-300
max-w-4xl
"

>

QLXGEO connects global GIS infrastructure,
spatial AI systems and real-time geospatial
data networks.

</p>







{/* NETWORK CORE */}



<div

className="
mt-20
relative
rounded-3xl
border
border-white/10
bg-slate-900/80
p-10
shadow-2xl
"

>



<svg

viewBox="
0 0 600 360
"

className="
w-full
h-[420px]
"

>




{/* CONNECTIONS */}



{

nodes.map((node,index)=>{


const next =
nodes[(index+1)%nodes.length];


return (

<line

key={"line"+index}

x1={node.x}

y1={node.y}

x2={next.x}

y2={next.y}


stroke="#00ff99"

strokeWidth="2"

strokeDasharray="8 12"

className="
opacity-80
animate-pulse
"

/>


)


})

}







{/* EARTH CORE */}



<circle

cx="300"

cy="180"

r="70"

fill="#2563eb"

opacity="0.15"

/>



<circle

cx="300"

cy="180"

r="55"

fill="#0f172a"

stroke="#2563eb"

strokeWidth="3"

/>



<text

x="300"

y="175"

textAnchor="middle"

fill="white"

fontSize="20"

fontWeight="bold"

>

QLXGEO

</text>



<text

x="300"

y="205"

textAnchor="middle"

fill="#60a5fa"

fontSize="14"

>

GIS CORE

</text>








{/* NODES */}



{

nodes.map((node)=>(


<g

key={node.name}

>


<circle

cx={node.x}

cy={node.y}

r="18"

fill="#2563eb"

opacity="0.25"

className="
animate-ping
"

/>



<circle

cx={node.x}

cy={node.y}

r="9"

fill="#2563eb"

stroke="white"

strokeWidth="2"

/>


</g>


))


}



</svg>



</div>








{/* STATISTICS */}



<div

className="
grid
md:grid-cols-4
gap-6
mt-12
"

>


<Card

title="GLOBAL NODES"

value="24"

/>



<Card

title="COUNTRIES"

value="180+"

/>



<Card

title="DATA EVENTS"

value="10M+"

/>



<Card

title="SYSTEM"

value="99.99%"

/>



</div>





</div>


</section>


);


}








function Card({

title,

value


}:

{

title:string;

value:string;

}

){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-2xl
p-6
"

>


<p

className="
text-blue-400
text-sm
tracking-widest
"

>

{title}

</p>



<h3

className="
text-3xl
font-bold
mt-3
"

>

{value}

</h3>



<p

className="
text-green-400
mt-2
"

>

● ONLINE

</p>



</div>

);


}