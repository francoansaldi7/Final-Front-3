
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import Card from "../components/Card"  

const Home = () => {
  return (
    <main className="">
      <h1>Here you will find a list of all our Dentists!</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <Card />
      </div>
    </main>
  )
}

export default Home