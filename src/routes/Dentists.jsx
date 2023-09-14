import { useState, useEffect} from "react"
import Card from '../components/Card'

const Dentists = () => {
    const [items, setItems] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      getData() 
      },[])

    const getData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        setItems(data)
        } catch (error) {
        setError("Sorry! an error has occured, we're trying to fix it")
        } finally {
        setLoading(false)
        }
      }

      {error ? error : null}
      {loading ? <div>Loading Data...</div> : null}

  return (
    <main className="dentistMain"> 
      <section className="dentistsSection">
      <h1>Here you will find a list of all our Dentists!</h1>
      <div className='card-grid'>
        {items ? items.map((item => (
          <Card key={item.id} {...item}  /> 
        ))) : <div>No data</div> }
      </div>
      </section>
      
    </main>
  )
}

export default Dentists