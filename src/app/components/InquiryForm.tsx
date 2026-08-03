"use client";


import {useState} from "react";


export default function InquiryForm(){


const [sent,setSent]=useState(false);



return (

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
mt-3
text-slate-300
"

>

Tell us your requirements and our team will contact you.

</p>





<form

className="
mt-8
grid
gap-5
"

onSubmit={(e)=>{

e.preventDefault();

setSent(true);

}}

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





<textarea

placeholder="Product requirements"

rows={5}

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
px-8
py-4
font-bold
hover:bg-blue-700
"

>

Send Inquiry

</button>



</form>





{

sent &&

<p

className="
mt-5
text-green-400
"

>

Thank you! We will contact you soon.

</p>


}



</section>

)

}