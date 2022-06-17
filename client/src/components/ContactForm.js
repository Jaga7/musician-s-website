import Wrapper from "../assets/wrappers/ContactForm"
import { useState } from "react"
import { getQuestion } from "../features/form/contactFormSlice"
import { useSelector, useDispatch } from "react-redux"

const ContactForm = () => {
  const { questionItem, isLoading } = useSelector((state) => state.contactForm)
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    messageText: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] =
    useState(false)

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, name: e.target.value })
  }
  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value })
  }
  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value })
  }
  const handlePhoneNumberInputChange = (e) => {
    setValues({ ...values, phoneNumber: e.target.value })
  }
  const handleMessageTextInputChange = (e) => {
    setValues({ ...values, messageText: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      values.name &&
      values.lastName &&
      values.email &&
      values.phoneNumber &&
      values.messageText
    ) {
      setValid(true)
    }
    if (!questionAnsweredCorrectly) {
      dispatch(getQuestion())
    }
    setSubmitted(true)
  }
  return (
    <Wrapper>
      <div className='form-container'>
        {questionItem.question && (
          <>
            <p>{questionItem.question}</p>
            <form>
              <label for='answer-select'>Choose an answer:</label>

              <select name='answer' id='answer-select'>
                <option value=''>--Please choose an answer--</option>
                {questionItem.answers.map((answer) => (
                  <option value={answer}>{answer}</option>
                ))}
              </select>
              <button className='form-field' type='submit'>
                Send answer
              </button>
            </form>
          </>
        )}
        <form className='register-form' onSubmit={handleSubmit}>
          {isLoading && <div>Loading question...</div>}
          {submitted && valid && (
            <div className='success-message'>
              Success! Thank you for registering
            </div>
          )}
          <input
            id='first-name'
            className='form-field'
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={handleFirstNameInputChange}
          />
          {submitted && !values.name && (
            <span id='first-name-error'>Please enter a first name</span>
          )}
          <input
            id='last-name'
            className='form-field'
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={handleLastNameInputChange}
          />
          {submitted && !values.lastName && (
            <span id='last-name-error'>Please enter a last name</span>
          )}
          <input
            id='email'
            className='form-field'
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleEmailInputChange}
          />
          {submitted && !values.email && (
            <span id='email-error'>Please enter an email address</span>
          )}
          <input
            id='phoneNumber'
            className='form-field'
            type='tel'
            placeholder='Phone Number'
            name='phoneNumber'
            pattern='[0-9]{9}'
            onChange={handlePhoneNumberInputChange}
          />
          <small>Format: 123456789</small>
          {submitted && !values.phoneNumber && (
            <span id='phoneNumber-error'>Please enter a phone number</span>
          )}

          <textarea
            id='messageText'
            className='form-field'
            type='text'
            placeholder='Message'
            name='messageText'
            onChange={handleMessageTextInputChange}
          />
          {submitted && !values.messageText && (
            <span id='messageText-error'>Please enter a message</span>
          )}

          <button className='form-field' type='submit'>
            Register
          </button>
        </form>
      </div>
    </Wrapper>
  )
}
export default ContactForm
