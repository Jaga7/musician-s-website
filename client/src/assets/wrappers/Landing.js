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

  h2 {
    font-weight: 700;
    justify-self: center;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }

  main {
    display: grid;

    justify-content: center;
    /* flex-wrap: wrap; */
  }
`
export default Wrapper
