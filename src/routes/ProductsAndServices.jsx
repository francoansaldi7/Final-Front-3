/* eslint-disable react/no-unescaped-entities */
import ServicesAnimation from "../ServicesAnimation.json"
import Lottie from "lottie-react"

const ProductsAndServices = () => {

  return (
    <main className="serviceSection">
      <h1>Full Stack Developer</h1>
      <h2>React JS, Java, MySQL</h2>
      <h1>Salesforce Technologies</h1>
      <h2>Lightning & Aura Components, Apex, SOSL & SOQL</h2>
      <h3>Constantly learning - Good communication skills - Team player</h3>
      <div className="serviceAnimation">
        <Lottie animationData={ServicesAnimation}/>
      </div>
    </main>
  )
}

export default ProductsAndServices