/* eslint-disable react/no-unescaped-entities */
import DentistHome from "../DentistHome.json"
import Lottie from "lottie-react"

const Home = () => {

  return (
    <main className="homeSection">
      <h1>Welcome to Franco Ansaldi's Dental Clinic!</h1>
      <div>
      <Lottie animationData={DentistHome}/>
      </div>
    </main>
  )
}

export default Home