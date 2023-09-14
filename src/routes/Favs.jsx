const Favs = () => {

    return (
      <>
      <section className="favSection">
      <h1>Your favorite Dentists:</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
      </section>
      </>
    );
  };
  
  export default Favs;