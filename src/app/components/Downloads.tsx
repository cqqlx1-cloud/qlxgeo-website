interface DownloadItem {

title:string;

desc:string;

file:string;

}


interface DownloadsProps {

items?:DownloadItem[];

}



export default function Downloads({

items

}:DownloadsProps){



const defaultDownloads=[


{

title:"Product Brochure",

desc:"Professional Leica product brochure",

file:"/downloads/leica-gnss.pdf"

},


{

title:"Technical Datasheet",

desc:"Technical specifications and features",

file:"/downloads/leica-technical.pdf"

},


{

title:"Application Guide",

desc:"Surveying workflow and applications",

file:"/downloads/leica-guide.pdf"

}



];



const data = items || defaultDownloads;



return (


<section

className="
px-8
lg:px-20
py-24
bg-zinc-950
text-white
"

>


<h2

className="
text-4xl
font-bold
"

>

Downloads

</h2>



<div

className="
grid
md:grid-cols-3
gap-6
mt-10
"

>



{

data.map((item)=>(


<div

key={item.title}

className="
bg-zinc-900
border
border-zinc-800
rounded-2xl
p-8
hover:border-blue-500
transition
"

>


<h3

className="
text-xl
font-bold
"

>

📄 {item.title}

</h3>



<p

className="
mt-4
text-gray-400
"

>

{item.desc}

</p>



<a

href={item.file}

download

className="
inline-block
mt-6
bg-blue-600
px-6
py-3
rounded-lg
"

>

Download

</a>



</div>


))


}


</div>



</section>


);


}