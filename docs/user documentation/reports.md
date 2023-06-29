# Reports and statistics

## Google Analytics

### Official EPFL measurement ID

To be able to generate EPFL reports, paste this code as high in the ```<head>``` of your site or tool as possible:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJGBG5R');</script>
<!-- End Google Tag Manager -->
```
` `  
Additionally, paste this code immediately after the opening ```<body>``` tag:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJGBG5R"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

` `  
` `  
#### Request a report

Email <1234@epfl.ch> to request a report for your website or tool.

` `  
` `  
### Personal measurement ID

If you already have a Google Analytics account or are considering creating one, you can add your measurement ID like this.
  
```html
<!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-additional-ID"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-additional-ID'); </script>
```
