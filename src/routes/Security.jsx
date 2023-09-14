/* eslint-disable react/no-unescaped-entities */
import SecurityAnimation from "../SecurityAnimation.json"
import Lottie from "lottie-react"

const Security = () => {

  return (
    <main className="securitySection">
      <h1>We're Safe!</h1>
      <h1>Our website is protected by the best security systems</h1>
      <Lottie animationData={SecurityAnimation}/>
    </main>
  )
}

export default Security