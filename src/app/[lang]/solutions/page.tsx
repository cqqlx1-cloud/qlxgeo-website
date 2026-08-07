import SolutionsContent from "@/app/components/SolutionsContent";


export default async function SolutionsPage({

params

}:{

params:Promise<{
lang:string
}>

}){


const {lang}=await params;


return (

<SolutionsContent

language={lang}

/>

);


}