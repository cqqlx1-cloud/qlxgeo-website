"use client";


export default function Technology({

language="en"

}:{

language:string

}){


const data:any={

en:{

title:"Geospatial Technology",

desc:"Advanced GNSS RTK, LiDAR and UAV mapping technologies for professional surveying."

},

fr:{

title:"Technologies géospatiales",

desc:"Technologies GNSS RTK, LiDAR et UAV avancées pour les professionnels."

},

es:{

title:"Tecnología Geoespacial",

desc:"Tecnologías avanzadas GNSS RTK, LiDAR y UAV."

},

pt:{

title:"Tecnologia Geoespacial",

desc:"Tecnologias GNSS RTK, LiDAR e UAV avançadas."

},

ar:{

title:"تقنيات المعلومات المكانية",

desc:"تقنيات GNSS RTK و LiDAR والطائرات بدون طيار."

}

};


const t=data[language]||data.en;


return (

<main

className="
bg-black
text-white
min-h-screen
pt-32
px-8
lg:px-20
"

>


<div

className="
max-w-6xl
mx-auto
"

>


<h1

className="
text-5xl
font-bold
"

>

{t.title}

</h1>


<p

className="
mt-8
text-xl
text-gray-400
"

>

{t.desc}

</p>


</div>


</main>

);


}