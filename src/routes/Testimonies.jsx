/* eslint-disable react/no-unescaped-entities */
import TestimonieAnimation from "../TestimonieAnimation.json"
import { useLayoutEffect } from "react";
import Lottie from "lottie-react"

const Testimonies = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main className="testimoniesSection">
      <h1>Check out some of our success stories!</h1>
      <div>
        <Lottie animationData={TestimonieAnimation}/>
      </div>
    </main>
  )
}

export default Testimonies