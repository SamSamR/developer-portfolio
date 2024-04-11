const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },

  basePath: "/developer-portfolio",  // <= name of project
  output: "export",  // <= enables static exports
  reactStrictMode: true,

};
 
module.exports = nextConfig;

/*module.exports = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}*/
