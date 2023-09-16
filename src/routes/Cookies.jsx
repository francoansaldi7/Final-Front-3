/* eslint-disable react/no-unescaped-entities */
import CookiesAnimation from "../CookiesAnimation.json"
import { useLayoutEffect } from "react";
import Lottie from "lottie-react"

const Cookies = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main className="cookiesSection">
      <h1>We use cookies to provide you a better service!</h1>
      <h2>Please choose your settings and confirm</h2>
      <div className="cookieAnimation">
      <Lottie animationData={CookiesAnimation}/>
      </div>
    </main>
  )
}

export default Cookies