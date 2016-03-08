require.config({
   paths: {
       'lodash': 'lodash/lodash',
       'react': 'react/dist/react-with-addons',
       'react-dom': 'react-dom/dist/react-dom',
   },
   shim: {
     'bootstrap': ['jquery']  
   }
});