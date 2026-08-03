import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Contact(){


return (

<main

className="
min-h-screen
bg-slate-950
text-white
"

>


<Navbar />





{/* HERO */}



<section

className="
pt-40
pb-20
max-w-7xl
mx-auto
px-8
"

>


<p

className="
text-blue-400
tracking-[0.3em]
"

>

CONTACT QLXGEO

</p>



<h1

className="
text-5xl
md:text-6xl
font-bold
mt-6
"

>

Global Surveying Equipment Supplier

</h1>



<p

className="
mt-8
text-xl
text-slate-300
max-w-3xl
"

>

Contact QLXGEO for GNSS RTK,
Total Station, LiDAR, UAV Mapping
and professional surveying solutions.

</p>


</section>









{/* CONTACT INFO */}



<section

className="
max-w-7xl
mx-auto
px-8
grid
md:grid-cols-3
gap-8
"

>


<Info

title="Email"

text="sales@cqqlx.com"

/>



<Info

title="WhatsApp"

text="+86 18983894451"

/>



<Info

title="Business Support"

text="Worldwide Export Service"

/>



</section>









{/* FORM */}



<section

className="
max-w-5xl
mx-auto
mt-24
mb-20
bg-slate-900
border
border-white/10
rounded-3xl
p-10
"

>


<h2

className="
text-3xl
font-bold
"

>

Request A Quote

</h2>



<p

className="
mt-4
text-slate-300
"

>

Tell us your requirements and our team
will contact you soon.

</p>






<form

className="
mt-8
grid
gap-5
"

>


<input

placeholder="Your Name"

className="
bg-slate-800
rounded-xl
px-5
py-4
outline-none
"

/>



<input

placeholder="Company Name"

className="
bg-slate-800
rounded-xl
px-5
py-4
outline-none
"

/>



<input

placeholder="Email Address"

className="
bg-slate-800
rounded-xl
px-5
py-4
outline-none
"

/>




<input

placeholder="Country"

className="
bg-slate-800
rounded-xl
px-5
py-4
outline-none
"

/>






<select

className="
bg-slate-800
rounded-xl
px-5
py-4
outline-none
"

>


<option>

Interested Product

</option>


<option>

GNSS RTK Receiver

</option>


<option>

Total Station

</option>


<option>

Laser Scanner

</option>


<option>

LiDAR System

</option>


<option>

UAV Mapping

</option>


<option>

Accessories

</option>


</select>






<textarea

placeholder="Your Requirements"

rows={6}

className="
bg-slate-800
rounded-xl
px-5
py-4
outline-none
"

/>





<button

className="
bg-blue-600
rounded-xl
py-4
font-bold
hover:bg-blue-700
transition
"

>

Send Inquiry

</button>




</form>


</section>









{/* GLOBAL SERVICE */}



<section

className="
bg-white
text-slate-900
py-20
"

>


<div

className="
max-w-7xl
mx-auto
px-8
"

>


<h2

className="
text-4xl
font-bold
"

>

Global Service Areas

</h2>



<div

className="
grid
md:grid-cols-3
gap-8
mt-10
"

>


<Service

title="Southeast Asia"

text="Surveying equipment solutions for construction and mapping projects."

/>



<Service

title="Middle East"

text="Professional instruments for engineering and infrastructure."

/>



<Service

title="Africa"

text="Reliable surveying solutions for land and mining applications."

/>



</div>


</div>


</section>







<Footer />



</main>


)

}







function Info({

title,
text

}:{

title:string
text:string

}){


return (

<div

className="
bg-slate-900
border
border-white/10
rounded-2xl
p-8
"

>


<h3

className="
text-xl
font-bold
"

>

{title}

</h3>



<p

className="
mt-4
text-slate-300
"

>

{text}

</p>


</div>


)

}







function Service({

title,
text

}:{

title:string
text:string

}){


return (

<div

className="
rounded-2xl
border
border-slate-200
p-8
"

>


<h3

className="
text-xl
font-bold
"

>

{title}

</h3>



<p

className="
mt-4
text-slate-600
"

>

{text}

</p>


</div>


)

}