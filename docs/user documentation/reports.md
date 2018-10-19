# Reports and statistics

## Google Analytics

To be able to generate reports, paste the following snippet right after the <head> tag on each page of your site.
To be able to read your reports, ask for a free EPFL access at <1234@epfl.ch>

```
<!-- Global Site Tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-20398423-1"></script>
  <header>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "UA-20398423-1", { "anonymize_ip": true });
      </script>
  </header>
```