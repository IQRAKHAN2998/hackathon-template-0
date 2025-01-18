/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns :[
            {
                hostname:"images.unsplash.com"
            },{
                
                    hostname: "plus.unsplash.com", // Add this line
                  
            },
            {
               hostname: "next-ecommerce-template-4.vercel.app"
            }
        ]
    }
};

export default nextConfig;
