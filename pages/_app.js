import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

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

        <meta
          name="description"
          content="Développeur Fullstack. JS, HTML, CSS React, React Native, Express. Découvrez mes derniers projets et prenez contact avec moi."
        />
        <meta
          name="keywords"
          content="Développeur Fullstack, JS, HTML, CSS, React, React Native, Express, projets, contact, Manu Puyuelo, La Capsule"
        />
        <meta
          property="og:title"
          content="Manu Puyuelo - Développeur FullStack"
        />
        <meta
          property="og:description"
          content="Maîtrisant les technologies telles que JavaScript, HTML, CSS, React, React Native et Express. En reconversion après 7 ans de marketing, je crée des applications web interactives et des expériences utilisateur exceptionnelles. Explorez mes projets et contactez-moi pour discuter de vos idées.  "
        />
        <meta property="og:url" content="https://www.manupuyuelo.com" />
        <meta
          property="og:image"
          content="https://www.manupuyuelo.com/_next/static/media/photoManu.78e740fd.jpg"
        />
        <title>Manu Puyuelo - Développeur FullStack</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "url": "https://www.manupuyuelo.com/_next/static/media/photoManu.78e740fd.jpg",
                "width": "1129",
                "height": "1129"
              }
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
