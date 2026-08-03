export default function SpatialNetwork(){

return (

<div
className="
relative
h-[420px]
w-full
overflow-hidden
rounded-3xl
bg-slate-950
border
border-white/10
"
>


{/* CONNECTION LINES */}

<div
className="
absolute
left-1/2
top-1/2
h-px
w-[260px]
bg-blue-500/40
-translate-x-1/2
"
/>


<div
className="
absolute
left-1/2
top-1/2
h-[260px]
w-px
bg-blue-500/40
-translate-y-1/2
"/>



<div
className="
absolute
left-1/2
top-1/2
h-[220px]
w-[220px]
rounded-full
border
border-blue-500/20
-translate-x-1/2
-translate-y-1/2
animate-pulse
"
/>





{/* CORE */}

<div
className="
absolute
left-1/2
top-1/2
h-44
w-44
rounded-full
border-4
border-blue-500
bg-slate-900
flex
items-center
justify-center
-translate-x-1/2
-translate-y-1/2
shadow-2xl
shadow-blue-500/30
"
>


<div
className="
text-center
"
>

<p
className="
text-2xl
font-bold
text-white
"
>
QLXGEO
</p>


<p
className="
text-sm
text-blue-400
mt-2
"
>
SPATIAL AI CORE
</p>


</div>


</div>






{/* GLOBAL NODES */}


<Node
position="
top-12
left-20
"
/>


<Node
position="
top-16
right-20
"
/>


<Node
position="
bottom-16
left-24
"
/>


<Node
position="
bottom-12
right-24
"
/>


<Node
position="
top-1/2
left-8
"
/>


<Node
position="
top-1/2
right-8
"
/>





{/* DATA FLOW */}

<div
className="
absolute
h-3
w-3
rounded-full
bg-cyan-400
animate-ping
left-1/2
top-1/2
"
/>



</div>

)

}








function Node({

position

}:{

position:string

}){


return (

<div
className={`
absolute
h-5
w-5
rounded-full
bg-blue-500
border-2
border-white
shadow-lg
${position}
`}
>

</div>


)

}