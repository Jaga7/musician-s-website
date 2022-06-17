import styled from "styled-components"

const Wrapper = styled.section`
  /* .dashboard {
    display: grid;
    grid-template-columns: 2fr;
  } */
  .dashboard-page {
    /* width: 90vw; */
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      /* grid-template-columns: auto 1fr; */
    }
    .dashboard-page {
      width: 90%;
    }
  }
  .form-container {
    position: absolute;
    right: 0%;
    z-index: 1;
  }
`
export default Wrapper
