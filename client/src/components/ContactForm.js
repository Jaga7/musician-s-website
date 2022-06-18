import Wrapper from "../assets/wrappers/ContactForm"
import { useState, useEffect } from "react"
import {
  getQuestion,
  answerQuestion,
  toggleShowForm,
} from "../features/form/contactFormSlice"
import { useSelector, useDispatch } from "react-redux"

const ContactForm = () => {
  const { questionItem, isLoading, questionAnsweredCorrectly } = useSelector(
    (state) => state.contactForm
  )

  function handleEscapeKey(event) {
    if (event.code === "Escape") {
      dispatch(toggleShowForm())
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestion())
    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [])

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    messageText: "",
    answer: "",
  })

  const [submitted, setSubmitted] = useState(false)
  // const [valid, setValid] = useState(false)

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
  const handleAnswerInputChange = (e) => {
    setValues({ ...values, answer: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      values.name &&
      values.lastName &&
      values.email &&
      values.phoneNumber &&
      values.messageText &&
      !questionAnsweredCorrectly
    ) {
      try {
        const originalPromiseResult = await dispatch(
          answerQuestion({
            question: questionItem.question,
            answer: values.answer,
          })
        ).unwrap()
        if (originalPromiseResult === false) {
          try {
            const prevAnswerIndex = questionItem.answers.indexOf(values.answer)
            const originalPromiseResult = await dispatch(getQuestion()).unwrap()
            const currentAnswer = originalPromiseResult.answers[prevAnswerIndex]
            setValues({ ...values, answer: currentAnswer })
          } catch (rejectedValueOrSerializedError) {
            throw Error(rejectedValueOrSerializedError)
          }
        }
      } catch (rejectedValueOrSerializedError) {
        throw Error(rejectedValueOrSerializedError)
      }
    }

    setSubmitted(true)
  }
  return (
    <Wrapper>
      <div className='form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
          {isLoading && <div>Loading...</div>}
          {questionItem.question && (
            <>
              <p>{questionItem.question}</p>
              <label htmlFor='answer-select'>Choose an answer:</label>

              <select
                name='answer'
                id='answer-select'
                onChange={handleAnswerInputChange}
              >
                <option value=''>--Please choose an answer--</option>
                {questionItem.answers.map((answer, index) => (
                  <option key={index} value={answer}>
                    {answer}
                  </option>
                ))}
              </select>
              {submitted && !values.answer && (
                <span id='answer-error'>Please choose an answer</span>
              )}
            </>
          )}
          {submitted && questionAnsweredCorrectly && (
            <div className='success-message'>Success! Message sent</div>
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
            Send
          </button>
        </form>
      </div>
    </Wrapper>
  )
}
export default ContactForm
