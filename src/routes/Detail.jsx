import { useState, useEffect, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const [dentist, setDentist] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {id} = useParams()
 
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  console.log(id)
  const getDentist = async () => {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await result.json()
      setDentist(data)
      } catch (error) {
      setError("Sorry! an error has occurred, we're trying to fix it")
      } finally {
      setLoading(false) 
      }
    }

    {error ? error : null}
    {loading ? <div>Loading Data...</div> : null}

  useEffect(() => {
    getDentist()
  }, [])

  return (
    <>
    <section className='detailSection'>
      <h1>Dentist Details - License n°: {dentist.id}</h1>
        <div className='detailCard'>
          <div className='detailImg'>
            <img src="/doctor.jpg" alt="dentist picture" />
          </div>
          <div>
            <h2>Name: {dentist.name}</h2>
            <h2>Email: {dentist.email}</h2>
            <h2>Phone: {dentist.phone}</h2>
            <h2>Website: {dentist.website}</h2>
          </div>
        </div>
    </section>
    </>
  )
}
  export default Detail