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

  h3 {
    font-weight: 500;
    justify-self: center;
    color: var(--primary-700);
  }

  main {
    display: grid;

    justify-content: center;
    /* flex-wrap: wrap; */
  }
  iframe {
    justify-self: center;
    margin-bottom: 5rem;
  }
`
export default Wrapper
