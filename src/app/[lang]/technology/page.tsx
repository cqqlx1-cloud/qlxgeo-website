import Technology from "@/app/components/Technology";


export default async function TechnologyPage({

params

}:{

params:Promise<{
lang:string
}>

}){


const {lang}=await params;


return (

<Technology language={lang}/>

);


}