/* eslint-disable react/no-unescaped-entities */
import BlogAnimation from "../BlogAnimation.json"
import Lottie from "lottie-react"

const Blog = () => {

  return (
    <main className="blogSection">
      <h1>Stay tuned to our latest news!</h1>
      <Lottie animationData={BlogAnimation}/>
    </main>
  )
}

export default Blog