import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

metadataBase:
new URL("https://www.qlxgeo.com"),

title:
"QLXGEO | Professional Surveying Equipment Supplier",


description:
"QLXGEO provides professional surveying equipment including GNSS RTK receivers, total stations, laser scanners, LiDAR and mapping solutions worldwide.",


keywords:[

"QLXGEO",

"Surveying Equipment Supplier",

"GNSS RTK Receiver",

"RTK GPS",

"Total Station",

"Laser Scanner",

"LiDAR Equipment",

"Survey Equipment",

"Mapping Equipment"

],


openGraph:{


title:
"QLXGEO | Professional Surveying Equipment Supplier",


description:
"Professional GNSS RTK, total stations, laser scanners and surveying solutions for global customers.",


siteName:
"QLXGEO",


type:
"website"


}


};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html

lang="en"

className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

>


<body

className="min-h-full flex flex-col"

>


{children}


<WhatsAppButton />


</body>


</html>

);

}