import Contact from "../../components/Contact";


export default async function ContactPage({

params

}:{

params:Promise<{
lang:string
}>

}){


const {lang}=await params;


return (

<Contact language={lang}/>

);


}