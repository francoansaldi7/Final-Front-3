/* eslint-disable react/no-unescaped-entities */
import TermsAnimation from "../TermsAnimation.json"
import Lottie from "lottie-react"

const TermsAndConditions = () => {

  return (
    <main className="termsSection">
      <h1>Make sure to read ALL our terms <br/> and conditions before moving on</h1>
      <h4>Yes... even the small letter</h4>
      <div className="termsAnimation">
      <Lottie animationData={TermsAnimation}/>
      </div>
    </main>
  )
}

export default TermsAndConditions