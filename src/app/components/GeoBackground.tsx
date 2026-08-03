export default function GeoBackground(){

return (

<div
className="
absolute
inset-0
overflow-hidden
pointer-events-none
"
>

<div
className="
absolute
inset-0
opacity-20
bg-[linear-gradient(rgba(59,130,246,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.25)_1px,transparent_1px)]
bg-[size:60px_60px]
"
/>


<div
className="
absolute
top-1/2
left-1/2
h-[500px]
w-[500px]
rounded-full
bg-blue-600/20
blur-3xl
-translate-x-1/2
-translate-y-1/2
"
/>


<Point position="top-20 left-32" />

<Point position="top-40 right-40" />

<Point position="bottom-32 left-52" />

<Point position="bottom-20 right-24" />


</div>

)

}



function Point({

position

}:{

position:string

}){


return (

<div
className={`
absolute
h-2
w-2
rounded-full
bg-cyan-400
animate-pulse
${position}
`}
/>

)

}