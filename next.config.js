const path = require('path')

const nextConFig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};
 
module.exports = {
  //new addition
  nextConFig,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}

//other way to try if above doesn't work
/*
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }

  //new addition
  const nextConFig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  }
  return nextConFig
}
*/