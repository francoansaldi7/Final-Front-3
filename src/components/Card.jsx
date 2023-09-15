/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState} from 'react'
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
  
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favs")) ?.some((card) => card.id === id) || false)
  
  const addFav = () =>{
    const favs = JSON.parse(localStorage.getItem("favs")) || []

    if(!favs.some((card) => card.id == id)){
      favs.push({ name, username, id })

    localStorage.setItem("favs", JSON.stringify(favs))
    setFavorite(true)
    }else{
      const newFav = favs.filter((card) => card.id !== id)
      localStorage.setItem("favs", JSON.stringify(newFav))
      setFavorite(false)
    }
  }
 
  return (
    <>
    <Link to={"/detail"}>
      <div className="card">
        <h2>{name}</h2>
        <img src="/doctor.jpg" alt="dentist picture" />
        <h3>{username}</h3>
        <h2>License number: {id}</h2>
        
        <button onClick={addFav} className="favButton">{favorite ? <p>Remove fav</p> : <p>Add fav</p>}</button>
      </div></Link>
      </>
  );
}
       
export default Card;