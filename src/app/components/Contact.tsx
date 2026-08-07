"use client";


import {useState} from "react";

import languages from "../../locales";



export default function Contact({

language="en"

}:{

language?:string

}){


const t =
languages[language as keyof typeof languages]
??
languages.en;

console.log(
"CURRENT LANGUAGE:",
language
);


console.log(
"TITLE:",
languages[language as keyof typeof languages]?.hero.title
);
const isArabic = language==="ar";



const [loading,setLoading]=useState(false);

const [success,setSuccess]=useState(false);



async function handleSubmit(e:any){

e.preventDefault();

setLoading(true);


const form=new FormData(e.target);


const res=await fetch("/api/inquiry",{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

name:form.get("name"),

email:form.get("email"),

company:form.get("company"),

message:form.get("message")

})


});



if(res.ok){

setSuccess(true);

e.target.reset();

}


setLoading(false);


}



return (


<section

dir={isArabic ? "rtl":"ltr"}

className="
py-28
bg-slate-950
text-white
"


>


<div

className="
max-w-7xl
mx-auto
px-8
"


>


<div

className={`
grid
lg:grid-cols-2
gap-16
items-center
`}


>


{/* TEXT AREA */}


<div

className={`
${isArabic ? "lg:order-2 text-right":"lg:order-1 text-left"}
`}


>


<p

className="
text-blue-400
tracking-[0.3em]
mb-5
"


>

{t.contact.title}

</p>



<h2

className="
text-5xl
font-bold
leading-tight
"


>

{t.contact.heading}

</h2>




<p

className="
mt-8
text-xl
text-slate-300
"


>

{t.contact.description}

</p>





<div

className="
mt-10
space-y-5
"


>


<div

className="
bg-slate-900
border
border-white/10
rounded-2xl
p-6
"


>

<p className="text-blue-400">

EMAIL

</p>


<p className="mt-3">

sales@cqqlx.com

</p>


</div>





<div

className="
bg-slate-900
border
border-white/10
rounded-2xl
p-6
"


>


<p className="text-blue-400">

WHATSAPP

</p>


<p className="mt-3">

+86 18983894451

</p>



<a

href="https://wa.me/8618983894451"

target="_blank"

className="
inline-block
mt-5
bg-green-500
px-6
py-3
rounded-xl
font-semibold
"

>

WhatsApp

</a>


</div>



</div>


</div>








{/* FORM */}


<form


onSubmit={handleSubmit}


dir={isArabic ? "rtl":"ltr"}


className={`
bg-slate-900/80
border
border-white/10
rounded-3xl
p-8
${isArabic ? "lg:order-1":"lg:order-2"}
`}


>



<h3

className="
text-3xl
font-bold
mb-8
"


>

{t.contact.formTitle}

</h3>




<input

name="name"

required

placeholder={t.contact.name}


className="
w-full
mb-5
bg-slate-800
rounded-xl
px-5
py-4
text-right
"


/>





<input

name="email"

required

placeholder={t.contact.email}


className="
w-full
mb-5
bg-slate-800
rounded-xl
px-5
py-4
text-right
"


/>





<input

name="company"

placeholder={t.contact.company}


className="
w-full
mb-5
bg-slate-800
rounded-xl
px-5
py-4
text-right
"


/>





<textarea

name="message"

placeholder={t.contact.message}


className="
w-full
mb-5
bg-slate-800
rounded-xl
px-5
py-4
h-32
text-right
"


/>





<button

type="submit"

disabled={loading}


className="
w-full
bg-blue-600
hover:bg-blue-700
rounded-xl
py-4
text-lg
font-semibold
"


>


{

loading

?

t.contact.sending

:

t.contact.submit

}


</button>





{

success &&


<p

className="
mt-5
text-green-400
"

>

{t.contact.success}

</p>


}



</form>



</div>


</div>


</section>


);


}