import { useState } from 'react'

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [textMssg, setTextMssg] = useState('')

    const handleSubmit = (e) => {

      e.preventDefault()

      const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/

      if(rgExp.test(email)){
        setMessage('')
      } else if(email === ''){
        setMessage('Please enter email')
      } else if(!rgExp.test(email)){
        setMessage('Email is not valid')
      } else {
        setMessage('')
      }

      if(name.length <= 5 ){
        setError(true)
      } else {
        setError(false)
      }

      if(text.length <= 0){
        setTextMssg('Please, write down your questions')
      } else {
        setTextMssg('')
      }

      if(error === false && message === ''){
        setSuccess('Thank you ' + name + '! We will contact you right away!')
      } else {
        setSuccess('')
      }
      
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" placeholder="Full Name" />
        { error ? <p>Your name must have more than 5 characters</p> : ""}
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
        <p>{message}</p>
        <input className='textInput' value={text} onChange={(e) => setText(e.target.value)} type='text' name='text' id='text' placeholder='Send us your questions!' />
        <p>{textMssg}</p>
        <button>Submit</button>
        <p className='successMsg'>{success}</p>
      </form>
    </div>
  );
};

export default Form;