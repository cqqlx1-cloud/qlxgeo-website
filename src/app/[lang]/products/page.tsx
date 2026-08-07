import ProductsContent from "@/app/components/ProductsContent";



export default async function ProductsPage({

params

}:{

params:Promise<{
lang:string
}>

}){


const {lang}=await params;



return (

<ProductsContent language={lang}/>

);


}