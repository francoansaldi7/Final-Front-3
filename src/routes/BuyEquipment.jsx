/* eslint-disable react/no-unescaped-entities */
import BuyAnimation from "../BuyAnimation.json"
import Lottie from "lottie-react"

const BuyEquipment = () => {

  return (
    <main className="equipmentSection">
      <h1>Need to buy the latest Dental Equipment? <br /> Make sure to check our store!</h1>
      <div>
        <Lottie animationData={BuyAnimation}/>
      </div>
    </main>
  )
}

export default BuyEquipment