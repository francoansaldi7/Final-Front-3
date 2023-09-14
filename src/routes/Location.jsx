/* eslint-disable react/no-unescaped-entities */
import LocationAni from "../LocationAni.json"
import Lottie from "lottie-react"

const Location = () => {

  return (
    <main className="locationSection">
      <h1>We're located here:</h1>
      <Lottie animationData={LocationAni}/>
    </main>
  )
}

export default Location