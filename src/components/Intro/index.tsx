import Typist from "react-typist"
import "react-typist/dist/Typist.css"

const Intro = () => (
  <div>
    <Typist avgTypingDelay={120}>
      <span className="intro-title">
        {"Olá, "}
        <span className="intro-name">{"Larissa"}</span>
        {" aqui."}
      </span>
    </Typist>
  </div>
)

export default Intro
