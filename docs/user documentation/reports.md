# Reports and statistics

## Google Analytics

To be able to generate EPFL reports, paste the following snippet inside the ```<head>``` tag on each page of your site.

Email <1234@epfl.ch> to request a report for your website.

  
```
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src='https://www.googletagmanager.com/gtag/js?id=UA-4833294-1'></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-4833294-1', { 'anonymize_ip': true });
</script>
```

### Personal measurement ID

If you already have a Google Analytics account or are considering creating one, you can add your measurement ID like this.
  
```
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src='https://www.googletagmanager.com/gtag/js?id=UA-4833294-1'></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-4833294-1', { 'anonymize_ip': true });
    gtag('config', 'YOUR-GA-MEASUREMENT-ID', { 'anonymize_ip': true });
</script>
```
