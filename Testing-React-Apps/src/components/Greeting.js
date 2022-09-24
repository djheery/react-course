import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText((curState) => curState = !curState)
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>It's good to see you</p>}
      {changedText && <p>You're a big ol' bitch</p>}
      <button onClick={changeTextHandler}>Change the Text Bitch!</button>
    </div>
  )
}

export default Greeting;