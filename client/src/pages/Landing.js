import pic1 from "../assets/images/pic1.jpg"
import Wrapper from "../assets/wrappers/Landing"
import { RiMusic2Fill } from "react-icons/ri"
const Landing = () => {
  return (
    <Wrapper>
      <main>
        <h2>
          Pushing it to the limit <RiMusic2Fill />
        </h2>
        <div>
          <img src={pic1} alt='Paul Engemann sitting on the beach' />
        </div>
      </main>
    </Wrapper>
  )
}
export default Landing
