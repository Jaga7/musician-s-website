import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"
import Wrapper from "../../assets/wrappers/SharedLayout"
import ContactForm from "../../components/ContactForm"
import { useSelector } from "react-redux"

const SharedLayout = () => {
  const { showContactForm } = useSelector((state) => state.contactForm)
  return (
    <Wrapper>
      <main className='dashboard'>
        <div>
          {showContactForm && <ContactForm />}
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
export default SharedLayout
