import styled from "styled-components"

const Wrapper = styled.nav`
  height: var(--nav-height);
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  .nav-links {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  a {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .nav-center {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-between; */
    margin: 1rem;
    text-align: left;
  }
  background: var(--white);

  .logo-text {
    /* display: none; */
    text-align: center;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    /* .logo-text {
      display: block;
    } */
  }
  button {
    width: fit-content;
    margin-left: auto;
  }
`
export default Wrapper
