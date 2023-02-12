const { withContentlayer } = require( "next-contentlayer" );
const nextConfig = {
  
  reactStrictMode : true, webpack : ( config, { isServer } ) => {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push( {
                                test : /\.svg$/i, type : "asset", resourceQuery : /url/, // *.svg?url
                              }, {
                                test : /\.svg$/i, issuer : /\.[jt]sx?$/, resourceQuery : { not : [ /url/ ] }, // exclude react
                                                                                                              // component if
                                                                                                              // *.svg?url
                                use : [ { loader : "@svgr/webpack", options : { icon : true } } ],
                              },
    
                              {
                                test : /\.mp4$/, use : [ {
                                  loader : "file-loader", options : {
                                    publicPath : `${ prefix }/_next/static/media/`,
                                    outputPath : `${ isServer ? "../" : "" }static/media/`,
                                    name       : "[name].[hash].[ext]",
                                  },
                                }, ],
                              } );
    return config;
  },
  
  experimental : {
    appDir : true,
  }, compiler  : {
    styledComponents : true,
  },
};

module.exports = withContentlayer( nextConfig );
