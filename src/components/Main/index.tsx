import About from "components/About"
import Experiences from "components/Experiences"
// import Image3D from "components/Image3D"
import Intro from "components/Intro"
import { MainPageContent } from "./styles"

const Main = () => (
  <MainPageContent>
    <Intro />
    {/* <Image3D /> */}
    <About />
    <Experiences />
  </MainPageContent>
)

export default Main
