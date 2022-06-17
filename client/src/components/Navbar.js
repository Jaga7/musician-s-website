import Wrapper from "../assets/wrappers/Navbar"
import NavLinks from "./NavLinks"
import ContactButton from "./ContactButton"

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div>
          <h3 className='logo-text'>Paul Engemann</h3>
          <ContactButton></ContactButton>
        </div>
      </div>

      <div className={"navbar-container"}>
        <div className='nav-links'>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
