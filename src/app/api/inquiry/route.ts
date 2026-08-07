import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {


try {


const body = await req.json();



const {

name,
company,
country,
email,
whatsapp,
product,
message

} = body;




const transporter = nodemailer.createTransport({


host:"smtp.exmail.qq.com",

port:465,

secure:true,


auth:{


user:"sales@cqqlx.com",

pass:"PADsfZL4N3nyJAo7"


}


});





await transporter.sendMail({


from:"sales@cqqlx.com",


to:"sales@cqqlx.com",


replyTo:email,


subject:

`New QLXGEO RFQ - ${product}`,



html:


`

<h2>QLXGEO New RFQ Inquiry</h2>


<table border="1" cellpadding="8">


<tr>
<td>Name</td>
<td>${name}</td>
</tr>


<tr>
<td>Company</td>
<td>${company}</td>
</tr>


<tr>
<td>Country</td>
<td>${country}</td>
</tr>


<tr>
<td>Email</td>
<td>${email}</td>
</tr>


<tr>
<td>WhatsApp</td>
<td>${whatsapp}</td>
</tr>


<tr>
<td>Product</td>
<td>${product}</td>
</tr>


<tr>
<td>Message</td>
<td>${message}</td>
</tr>


</table>


`

});




return NextResponse.json({

success:true

});



}

catch(error){


console.log(error);



return NextResponse.json({

success:false

},

{

status:500

});


}


}