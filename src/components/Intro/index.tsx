import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import { Content } from "./styles"

const Intro = () => (
  <Content>
    <Typist avgTypingDelay={120}>
      <span className="intro-title">
        {"Olá, "}
        <span className="intro-name">{"Larissa"}</span>
        {" aqui."}
      </span>
    </Typist>
  </Content>
)

export default Intro
