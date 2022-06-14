import Wrapper from "../assets/wrappers/Navbar"
import NavLinks from "./NavLinks"

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <div>
          <h3 className='logo-text'>Paul Engemann</h3>
        </div>
      </div>

      <div className={"navbar-container"}>
        <div className='nav-links'>
          {/* <header>Paul Engemann</header> */}
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
