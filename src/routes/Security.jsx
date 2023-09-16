/* eslint-disable react/no-unescaped-entities */
import SecurityAnimation from "../SecurityAnimation.json"
import { useLayoutEffect } from "react";
import Lottie from "lottie-react"

const Security = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main className="securitySection">
      <h1>We're Safe!</h1>
      <h1>Our website is protected by the best security systems</h1>
      <Lottie animationData={SecurityAnimation}/>
    </main>
  )
}

export default Security