import pic2 from "../assets/images/pic2.jpg"
import Wrapper from "../assets/wrappers/About"
const About = () => {
  return (
    <Wrapper>
      <main>
        <h2>Who is Paul Engemann? </h2>
        <div id='imageDiv'>
          <img src={pic2} alt='young Paul Engemann with long hair' />
        </div>
        <section>
          <p>
            Paul Engemann is an American former pop musician best known for his
            1983 song "Push it to the limit" from the movie "Scarface". The
            soundtrack was written by an Italian composer and songwriter Giorgio
            Moroder.<br></br>
            <br></br>Together with Giorgio Moroder, he had a number one hit in
            Germany (#81 in USA) with "Reach Out", that became the official song
            of the 33rd Olympic Games 1984 in Los Angeles.
            <br></br>
            <br></br> Among other releases were "American Dream" (with Giorgio
            Moroder 1984), "Face to Face" (1985), "Shannon's Eyes" (1985, 1986),
            "Brain Power" (Summer School soundtrack) (1987), "To Be Number One"
            (1990), and "NeverEnding Story" (2000).
          </p>
        </section>
      </main>
    </Wrapper>
  )
}
export default About
