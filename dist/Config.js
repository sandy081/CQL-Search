require.config({
   paths: {
       'bootstrap': 'bootstrap/dist/js/bootstrap',
       'jquery': 'jquery/dist/jquery',
       'lodash': 'lodash/lodash',
       'react': 'react/dist/react-with-addons',
       'react-dom': 'react-dom/dist/react-dom',
       'text': 'text/text'
   },
   shim: {
     'bootstrap': ['jquery']  
   },
   jsx: {
       fileExtension: '.jsx',
       sourceMap: true
   } 
});