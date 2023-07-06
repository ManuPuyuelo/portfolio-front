import Portfolio from "../components/Portfolio";

function PortfolioScreen() {
  return (
    <>
      <Portfolio />
    </>
  );
}

export async function getStaticProps() {
  const meta = {
    title: "Portfolio - Manu Puyuelo - Développeur FullStack",
    keywords:
      "Portfolio, Manu Puyuelo, Développeur Fullstack, Projets, JS, HTML, CSS, React, React Native, Expo, Express, MongoDB, Freshnews, Mymoviz, Sweetweet, 123Soleil, Trainlife",
    ogTitle: "Portfolio - Manu Puyuelo - Développeur FullStack",
    ogUrl: "https://www.manupuyuelo.com/portfolio",
  };

  return {
    props: {
      meta,
    },
  };
}

export default PortfolioScreen;
