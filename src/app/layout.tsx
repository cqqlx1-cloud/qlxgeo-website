import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

title:"QLXGEO | Surveying Equipment Supplier",

description:
"Professional GNSS RTK, Total Station, LiDAR and Surveying Equipment Supplier."

};


export default function RootLayout({

children,

}:{

children:React.ReactNode;

}) {


return (

<html lang="en">

<body>

{children}

</body>

</html>

);

}