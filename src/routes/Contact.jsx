import Form from '../Components/Form'
import { useLayoutEffect } from 'react';

const Contact = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='contactDiv'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact