/* eslint-disable react/no-unescaped-entities */
import LocationAni from "../LocationAni.json"
import { useLayoutEffect } from "react";
import Lottie from "lottie-react"

const Location = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main className="locationSection">
      <h1>We're located here:</h1>
      <Lottie animationData={LocationAni}/>
    </main>
  )
}

export default Location