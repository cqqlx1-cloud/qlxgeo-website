import MapLoader from "./components/MapLoader";

export default function Home(){

return (

<main className="min-h-screen bg-black text-white">


<section className="grid md:grid-cols-2 gap-10 px-8 py-20">


{/* LEFT */}

<div>

<h1 className="text-5xl font-bold leading-tight">

Geospatial Intelligence

<br/>

<span className="text-blue-400">
For A Smarter World
</span>

</h1>


<p className="mt-6 text-gray-400 text-lg">

QLXGEO provides advanced GIS,
mapping and spatial intelligence
solutions for organizations worldwide.

</p>



<div className="mt-8 flex gap-4">


<button className="px-6 py-3 bg-blue-600 rounded-xl">

Explore Solutions

</button>


<button className="px-6 py-3 border border-gray-500 rounded-xl">

Contact Us

</button>


</div>


</div>





{/* RIGHT DASHBOARD */}


<div className="bg-zinc-900 rounded-3xl p-6">


<div className="flex justify-between mb-4">

<div>

<p className="text-sm text-gray-400">
LIVE GIS PLATFORM
</p>

<h2 className="text-xl font-semibold">
Spatial Intelligence Dashboard
</h2>

</div>


<div className="text-green-400">

● Online

</div>


</div>



<div className="h-80 rounded-xl overflow-hidden">

<MapLoader />

</div>




<div className="grid grid-cols-2 gap-4 mt-5">


<Card
title="ACTIVE NODES"
value="05"
desc="Online"
/>


<Card
title="DATA STREAMS"
value="2.4M/s"
desc="Realtime"
/>



<Card
title="AI ANALYTICS"
value="RUNNING"
desc="Spatial AI Engine"
/>



<Card
title="SYSTEM HEALTH"
value="99.99%"
desc="Stable"
/>


</div>


</div>


</section>




</main>


)

}



function Card(
{
title,
value,
desc
}:{
title:string;
value:string;
desc:string;
}

){

return (

<div className="bg-zinc-800 rounded-xl p-4">

<p className="text-xs text-gray-400">
{title}
</p>

<p className="text-xl font-bold mt-2">
{value}
</p>


<p className="text-xs text-green-400">
{desc}
</p>


</div>

)

}