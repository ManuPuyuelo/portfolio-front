import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Code du Google Tag Manager à la balise <head> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K44L9KX');
            `,
          }}
        />
      </Head>
      {/* Code du Google Tag Manager à la balise <body> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K44L9KX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
