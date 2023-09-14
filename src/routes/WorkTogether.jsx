/* eslint-disable react/no-unescaped-entities */
import TeamAnimation from "../TeamAnimation.json"
import Lottie from "lottie-react"

const WorkTogether = () => {

  return (
    <main className="workTogetherSection">
      <h1>Do you have an open position? Let's work together!</h1>
      <div>
        <Lottie animationData={TeamAnimation}/>
      </div>
    </main>
  )
}

export default WorkTogether