"use client";


import {usePathname,useRouter} from "next/navigation";



const languages=[

{
code:"en",
name:"EN"
},

{
code:"es",
name:"ES"
},

{
code:"pt",
name:"PT"
},

{
code:"fr",
name:"FR"
},

{
code:"ar",
name:"AR"
}

];





export default function LanguageSwitcher(){


const pathname = usePathname();

const router = useRouter();





function changeLanguage(lang:string){



const parts = pathname.split("/");



// 当前路径有语言

const currentLang = parts[1];



const supportedLanguages = languages.map(
(item)=>item.code
);




if(
supportedLanguages.includes(currentLang)
){


parts[1]=lang;


}

else{


// 没有语言前缀

parts.splice(
1,
0,
lang
);


}





router.push(
parts.join("/")
);


}







return (


<div

className="
flex
gap-4
items-center
"

>


{

languages.map((item)=>(


<button


key={item.code}


onClick={()=>changeLanguage(item.code)}



className="

text-gray-300

hover:text-white

transition

"



>



{item.name}



</button>



))


}



</div>


);


}