import HomeContent from "../components/HomeContent";


export default async function LanguageHome({

params

}:{

params:Promise<{
lang:string
}>

}){


const {lang}=await params;


return (

<HomeContent language={lang}/>

);


}