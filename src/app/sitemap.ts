import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


const baseUrl =
"https://www.qlxgeo.com";



return [


{
url:baseUrl,
lastModified:new Date(),
changeFrequency:"weekly",
priority:1,
},



{
url:`${baseUrl}/products`,
lastModified:new Date(),
changeFrequency:"weekly",
priority:0.9,
},



{
url:`${baseUrl}/products/gnss-rtk`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.8,
},



{
url:`${baseUrl}/products/total-station`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.8,
},



{
url:`${baseUrl}/products/laser-scanner`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.8,
},



{
url:`${baseUrl}/products/lidar`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.8,
},



{
url:`${baseUrl}/products/uav`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.8,
},



{
url:`${baseUrl}/products/accessories`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.8,
},



{
url:`${baseUrl}/contact`,
lastModified:new Date(),
changeFrequency:"monthly",
priority:0.7,
},


]

}