/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Card = ({ name, username, id }) => {

  function Data() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      getData()
    },[])

    async function getData(){
      setError(null)
      setLoading(true)
      const api = 'https://jsonplaceholder.typicode.com/users'
      const apiDentists = 'https://jsonplaceholder.typicode.com/users/:id'
      
      try {
        const response = await fetch(api)
        const data = await response.json()
        setData(data)
      } catch (error) {
        setError("Sorry! an error has occured, we're trying to fix it")
      } finally {
        setLoading(false)
      }
    }
 
  {error ? error : null}
  {loading ? <div>Loading Data...</div> : null}
  {data ? (<div>
    {Object.keys(data).map((key) => (
      <div key={key}>
        {key}: {data[key]}
      </div>
    ))}
  </div>) : <div>No data</div>}
  }

  const addFav = () =>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;