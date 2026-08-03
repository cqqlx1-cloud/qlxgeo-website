"use client";


import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap
} from "react-leaflet";


import {
  useEffect
} from "react";


import L from "leaflet";


import "leaflet/dist/leaflet.css";




// ==========================
// Auto Resize
// ==========================


function ResizeMap(){


const map = useMap();


useEffect(()=>{


const timer=setTimeout(()=>{


map.invalidateSize(true);


},500);



return ()=>clearTimeout(timer);


},[map]);



return null;


}





// ==========================
// Auto Fit World View
// ==========================

function FitWorld(){

const map = useMap();


useEffect(()=>{


const bounds = L.latLngBounds([

[40.7128,-74.006],   // New York

[51.5074,-0.1278],   // London

[39.9042,116.4074], // Beijing

[31.2304,121.4737], // Shanghai

[1.3521,103.8198]   // Singapore

]);



map.fitBounds(
bounds,
{
padding:[80,80],
animate:false
}
);



},[map]);



return null;


}






// ==========================
// Custom Marker
// ==========================


const customIcon = L.divIcon({


className:"",


html:`

<div class="qlx-marker">

<div class="qlx-core"></div>

</div>

`,


iconSize:[40,40],


iconAnchor:[20,20]


});








// ==========================
// GIS Nodes
// ==========================


const locations=[


{

name:"Beijing HQ",

country:"China",

position:[39.9042,116.4074]

},


{

name:"Shanghai Node",

country:"China",

position:[31.2304,121.4737]

},


{

name:"Singapore Hub",

country:"Singapore",

position:[1.3521,103.8198]

},


{

name:"New York Node",

country:"USA",

position:[40.7128,-74.006]

},


{

name:"London Node",

country:"UK",

position:[51.5074,-0.1278]

}



];








// ==========================
// Network Routes
// ==========================


const routes=[


[

[40.7128,-74.006],

[51.5074,-0.1278]

],



[

[51.5074,-0.1278],

[39.9042,116.4074]

],



[

[39.9042,116.4074],

[31.2304,121.4737]

],



[

[31.2304,121.4737],

[1.3521,103.8198]

]



];









export default function MapView(){



useEffect(()=>{


const style=document.createElement("style");



style.innerHTML=`

.qlx-marker{

width:40px;

height:40px;

display:flex;

align-items:center;

justify-content:center;

}



.qlx-core{


width:28px;

height:28px;

background:#2563eb;

border-radius:50%;

border:3px solid white;


box-shadow:

0 0 15px #2563eb,

0 0 40px #2563eb;


animation:pulse 2s infinite;


}




@keyframes pulse{


0%{

transform:scale(1);

}


50%{

transform:scale(1.15);

}


100%{

transform:scale(1);

}


}





.leaflet-container{


width:100%;

height:100%;

background:#020617;


}



.leaflet-control-attribution{

display:none;

}



.leaflet-popup-content-wrapper{


border-radius:15px;


}


`;



document.head.appendChild(style);



return()=>{


document.head.removeChild(style);


}



},[]);






return (


<MapContainer


zoom={2}


minZoom={2}


maxZoom={5}


worldCopyJump={false}


zoomControl={true}


attributionControl={false}


style={{

height:"100%",

width:"100%"

}}



maxBounds={

[

[-85,-180],

[85,180]

]

}



>


<ResizeMap />


<FitWorld />





<TileLayer


url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"


noWrap={true}


/>








{/* Network Lines */}



{

routes.map((line,index)=>(


<Polyline


key={index}


positions={line as [number,number][]}


pathOptions={{


color:"#00ff99",


weight:3,


dashArray:"12 12"


}}


/>


))


}







{/* Nodes */}


{

locations.map((item)=>(


<Marker


key={item.name}


position={item.position as [number,number]}


icon={customIcon}



>


<Popup>


<div

style={{

textAlign:"center"

}}

>


<div

style={{

fontWeight:700,

fontSize:"18px"

}}

>

QLXGEO

</div>



<div>

{item.name}

</div>



<div

style={{

color:"#64748b",

fontSize:"13px"

}}

>

{item.country}

</div>



<div

style={{

color:"#16a34a",

marginTop:"8px",

fontWeight:700

}}

>

● ONLINE

</div>



</div>



</Popup>



</Marker>



))


}



</MapContainer>



);



}