import Contact from "../components/Contact";

function ContactScreen() {
  return (
    <>
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const meta = {
    title: "Contact - Manu Puyuelo - Développeur FullStack",
    keywords:
      "Contact, Manu Puyuelo, Développeur Fullstack, Projets, JS, HTML, CSS, React, React Native, Expo, Express, MongoDB, Freshnews, Mymoviz, Sweetweet, 123Soleil, Trainlife",
    ogTitle: "Contact - Manu Puyuelo - Développeur FullStack",
    ogUrl: "https://www.manupuyuelo.com/contact",
  };

  return {
    props: {
      meta,
    },
  };
}

export default ContactScreen;
