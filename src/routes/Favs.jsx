import Card from "../components/Card"
import { useLayoutEffect } from "react";

const Favs = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const favoriteCards = JSON.parse(localStorage.getItem("favs"));

    return (
      <>
      <section className="favSection">
      <h1>Your favorite Dentists:</h1>
        <div className="card-grid">
        {favoriteCards ? favoriteCards.map((card) => (
          <Card key={card.id} {...card} />
        )) : <div>No data</div> }
        </div>
      </section>
      </>
    );
  };
  
  export default Favs;