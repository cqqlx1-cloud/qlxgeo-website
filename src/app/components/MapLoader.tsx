"use client";


import dynamic from "next/dynamic";


const MapView = dynamic(
()=>import("./MapView"),
{
ssr:false,

loading:()=>(
<div
className="
h-full
w-full
flex
items-center
justify-center
bg-black
text-blue-400
"
>
Loading GIS Engine...
</div>
)

}
);



export default function MapLoader(){

return <MapView />;

}