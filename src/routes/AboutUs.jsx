/* eslint-disable react/no-unescaped-entities */
import AboutUsAnimation from "../AboutUsAnimation.json"
import Lottie from "lottie-react"

const AboutUs = () => {

  return (
    <main className="locationSection">
      <h1>Franco Ansaldi is a creative student looking to constantly improve his skills</h1>
      <Lottie animationData={AboutUsAnimation}/>
    </main>
  )
}

export default AboutUs