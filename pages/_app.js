import "../styles/globals.css";

import Meta from "../components/Meta";
import Header from "../components/Header";

import { useEffect } from "react";
import TagManager from "react-gtm-module";

function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-K44L9KX" });
  }, []);

  // Récupérez les méta-données spécifiques à chaque page
  const meta = pageProps.meta || {};

  return (
    <>
      <Meta
        robots={meta.robots || "index,follow"}
        title={meta.title || "Manu Puyuelo - Développeur FullStack"}
        description={
          meta.description ||
          "Maîtrisant JavaScript, HTML, CSS, React, React Native et Express. En reconversion après 7 ans de marketing, je crée des applications web interactives et des expériences utilisateur exceptionnelles. Explorez mes projets et contactez-moi pour discuter de vos idées."
        }
        keywords={
          meta.keywords ||
          "Développeur Fullstack, JS, HTML, CSS, React, React Native, Express, projets, contact, Manu Puyuelo, La Capsule, Vizzit, Green-Acres"
        }
        ogTitle={meta.ogTitle || "Manu Puyuelo - Développeur FullStack"}
        ogDescription={
          meta.ogDescription ||
          "Développeur Fullstack. JS, HTML, CSS React, React Native, Express. Découvrez mes derniers projets et prenez contact avec moi."
        }
        ogUrl={meta.ogUrl || "https://www.manupuyuelo.com"}
        ogImage={
          meta.ogImage ||
          "https://res.cloudinary.com/djfrwyodt/image/upload/q_auto/v1688649962/home1Pic_dwzcuw.webp"
        }
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
