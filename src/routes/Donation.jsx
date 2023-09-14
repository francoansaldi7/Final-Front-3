/* eslint-disable react/no-unescaped-entities */
import DonationAnimation from "../DonationAnimation.json"
import Lottie from "lottie-react"

const Donation = () => {

  return (
    <main className="donationSection">
      <h1>Love our work? We appreciate your donations! <br /> They will be destined to save puppies & plant trees</h1>
      <div>
        <Lottie animationData={DonationAnimation}/>
      </div>
    </main>
  )
}

export default Donation