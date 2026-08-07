"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";


export default function Navbar(){

const pathname = usePathname();

const language = pathname.split("/")[1] || "en";

const isArabic = language==="ar";


const menu = [

{
name:{
en:"Home",
es:"Inicio",
pt:"Início",
fr:"Accueil",
ar:"الرئيسية"
},
path:"/"
},


{
name:{
en:"Products",
es:"Productos",
pt:"Produtos",
fr:"Produits",
ar:"المنتجات"
},
path:"/products"
},


{
name:{
en:"Solutions",
es:"Soluciones",
pt:"Soluções",
fr:"Solutions",
ar:"الحلول"
},
path:"/solutions"
},


{
name:{
en:"Technology",
es:"Tecnología",
pt:"Tecnologia",
fr:"Technologie",
ar:"التكنولوجيا"
},
path:"/technology"
},


{
name:{
en:"Resources",
es:"Recursos",
pt:"Recursos",
fr:"Ressources",
ar:"الموارد"
},
path:"/resources"
},


];



return (

<nav

dir={isArabic?"rtl":"ltr"}

className="
fixed
top-0
left-0
right-0
z-50
bg-black
border-b
border-zinc-800
"

>


<div

className={`
w-full
px-8
h-20
flex
items-center
justify-between

${isArabic?"flex-row-reverse":""}

`}

>


{/* LOGO */}

<Link

href={`/${language}`}

className="
text-3xl
font-bold
text-blue-500
tracking-wide
"

>

QLXGEO

</Link>





{/* MENU */}


<div

className={`
hidden
md:flex
items-center
gap-8
text-gray-300

${isArabic?"flex-row-reverse":""}

`}

>


{

menu.map((item)=>(


<Link

key={item.path}

href={`/${language}${item.path===" /"?"":item.path}`}

className="
hover:text-white
transition
"

>

{

item.name[
language as keyof typeof item.name
]

||

item.name.en

}

</Link>


))


}




<Link

href={`/${language}/contact`}

className="
bg-blue-600
text-white
px-6
py-3
rounded-lg
hover:bg-blue-700
transition
"

>

{

isArabic
?
"اتصل بنا"
:
"Contact"

}

</Link>



<LanguageSwitcher />



</div>


</div>


</nav>


);


}