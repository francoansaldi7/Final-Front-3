/* eslint-disable react/no-unescaped-entities */
import BlogAnimation from "../BlogAnimation.json"
import { useLayoutEffect } from "react";
import Lottie from "lottie-react"

const Blog = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <main className="blogSection">
      <h1>Stay tuned to our latest news!</h1>
      <Lottie animationData={BlogAnimation}/>
    </main>
  )
}

export default Blog