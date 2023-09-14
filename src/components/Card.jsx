/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Card = ({ name, username, id }) => {

  const addFav = () =>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
 

  return (
    <a href="/detail"><div className="card">
    <h2>{name}</h2>
    <img src="/doctor.jpg" alt="dentist picture" />
    <h3>{username}</h3>
    <h2>License number: {id}</h2>
    <button onClick={addFav} className="favButton">Add fav</button>
    </div></a>
  );
}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
export default Card;