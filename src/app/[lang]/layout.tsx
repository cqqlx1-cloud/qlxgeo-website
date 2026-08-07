import type { Metadata } from "next";


export const metadata: Metadata = {

title:
"QLXGEO | Leica Geospatial Equipment Supplier",


description:
"Professional Leica GNSS RTK, Total Station, 3D Laser Scanner and UAV Mapping solutions for global surveying projects."


};





export default async function LangLayout({

children,

params

}:{

children:React.ReactNode;

params:Promise<{

lang:string

}>

}){


const {lang}=await params;



const isArabic =
lang==="ar";



return (


<div

lang={lang}

dir={isArabic ? "rtl":"ltr"}

>


{children}


</div>


);


}