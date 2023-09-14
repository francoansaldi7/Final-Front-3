/* eslint-disable react/no-unescaped-entities */
import CookiesAnimation from "../CookiesAnimation.json"
import Lottie from "lottie-react"

const Cookies = () => {

  return (
    <main className="cookiesSection">
      <h1>We use cookies to provide you a better service!</h1>
      <h2>Please choose your settings and confirm</h2>
      <Lottie animationData={CookiesAnimation}/>
    </main>
  )
}

export default Cookies