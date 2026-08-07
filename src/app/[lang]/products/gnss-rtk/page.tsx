import ProductDetail from "@/app/components/ProductDetail";


export default async function GNSSRTKPage({

params

}:{

params:Promise<{
lang:string
}>

}){


const {lang}=await params;



return (

<ProductDetail

language={lang}

product="gnss-rtk"

/>

);


}