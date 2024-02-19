import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          // integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/img/apple-icon.png"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          // integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          // integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
          rel="stylesheet"
        />
        <link href="/assets/css/nucleo-icons.css" rel="stylesheet" />
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossOrigin="anonymous"
        ></script>
        <link
          type="text/css"
          href="/assets/css/now-design-system-pro.min.css"
          rel="stylesheet"
        />
        <link type="text/css" href="/assets/css/custom.css" rel="stylesheet" />
        <script src="/assets/js/core/popper.min.js"></script>
        <script src="/assets/js/custom.js"></script>
        <script src="/assets/js/core/bootstrap.min.js"></script>
        <script
          src="/assets/js/now-design-system-pro.min.js"
          type="text/javascript"
        ></script>
        <script src="/assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="/assets/js/plugins/typedjs.js"></script>
        <script src="/assets/js/plugins/highlight.min.js"></script>

        <script
          src="/assets/js/plugins/nouislider.min.js"
          type="text/javascript"
        ></script>

        <script
          src="/assets/js/plugins/glidejs.min.js"
          type="text/javascript"
        ></script>

        <script
          src="/assets/js/plugins/anime.min.js"
          type="text/javascript"
        ></script>

        <script src="/assets/js/plugins/chartjs.min.js"></script>

        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI"></script> */}
        <script
          src="/assets/js/now-design-system-pro.min.js?v=2.2.0"
          type="text/javascript"
        ></script>
        <script src="/assets/js/plugins/nouislider.min.js"></script>
        <script
          src="/assets/js/plugins/choices.min.js"
          type="text/javascript"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
        />
        <link href="/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
        <link
          id="pagestyle"
          href="/assets/css/material-kit-pro.css?v=3.0.4"
          rel="stylesheet"
        />
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <script
          src="/assets/js/core/popper.min.js"
          type="text/javascript"
        ></script>
        <script
          src="/assets/js/core/bootstrap.min.js"
          type="text/javascript"
        ></script>
        <script src="/assets/js/plugins/perfect-scrollbar.min.js"></script>
        <script src="/assets/js/plugins/typedjs.js"></script>
        <script src="/assets/js/plugins/parallax.min.js"></script>
        <script
          src="/assets/js/plugins/nouislider.min.js"
          type="text/javascript"
        ></script>
        <script
          src="/assets/js/plugins/anime.min.js"
          type="text/javascript"
        ></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTTfWur0PDbZWPr7Pmq8K3jiDp0_xUziI"></script>
        <script
          src="/assets/js/material-kit-pro.min.js?v=3.0.4"
          type="text/javascript"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
