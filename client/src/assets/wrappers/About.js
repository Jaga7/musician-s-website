import styled from "styled-components"

const Wrapper = styled.main`
  /* nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  } */
  /* img {
    display: block;
  } */

  #imageDiv {
    justify-self: center;
  }

  h2 {
    font-weight: 700;
    justify-self: center;
    color: var(--primary-700);
  }
  p {
    color: var(--primary-500);
  }

  main {
    display: grid;

    justify-content: center;
    /* flex-wrap: wrap; */
  }
`
export default Wrapper
