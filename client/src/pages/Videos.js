import Wrapper from "../assets/wrappers/Videos"
const Videos = () => {
  return (
    <Wrapper>
      <main>
        <h3>"Push it to the limit" (1983)</h3>
        <iframe
          width='900'
          height='506'
          src='https://www.youtube.com/embed/Olgn9sXNdl0'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <h3>"Reach Out" (Olympic Games 1984)</h3>
        <iframe
          width='675'
          height='506'
          src='https://www.youtube.com/embed/26epS7PIbE4'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <h3>"American Dream" (with Giorgio Moroder 1984)</h3>
        <iframe
          width='675'
          height='506'
          src='https://www.youtube.com/embed/TAUhbuZ-J2U'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </main>
    </Wrapper>
  )
}
export default Videos
