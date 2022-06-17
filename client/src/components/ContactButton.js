import { useDispatch } from "react-redux"
import { toggleShowForm } from "../features/form/contactFormSlice"

const ContactButton = () => {
  const dispatch = useDispatch()

  return <button onClick={() => dispatch(toggleShowForm())}>Contact</button>
}
export default ContactButton
