/* eslint-disable react/no-unescaped-entities */
import PrivacyAnimation from "../PrivacyAnimation.json"
import { useLayoutEffect } from "react";
import Lottie from "lottie-react"

const PrivacyPolicy = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main className="privacySection">
      <h1>Your privacy is our main concern</h1>
      <h2>Read our security policies</h2>
      <Lottie animationData={PrivacyAnimation}/>
    </main>
  )
}

export default PrivacyPolicy