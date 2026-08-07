import type { Metadata } from "next";
import "./globals.css";
import WhatsApp from "./components/WhatsApp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {


title:

"QLXGEO | Leica Geospatial Equipment Supplier",



description:

"QLXGEO supplies professional Leica GNSS RTK, Total Station, 3D Laser Scanner and UAV Mapping solutions for surveying, construction and engineering projects worldwide.",



keywords:[

"Leica GNSS supplier",

"Leica Total Station supplier",

"GNSS RTK",

"Surveying Equipment",

"Total Station",

"3D Laser Scanner",

"UAV Mapping",

"Geospatial Equipment Supplier"

],



openGraph:{


title:

"QLXGEO | Leica Geospatial Equipment Supplier",



description:

"Professional Leica surveying equipment solutions for global customers.",



type:"website"


}



};





export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode

}>) {



return (

<html lang="en">


<body>

<Navbar />
<div className="pt-20">
{children}
<Footer />
<WhatsApp />
</div>
</body>


</html>


);


}