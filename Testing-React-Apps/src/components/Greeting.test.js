import { render, screen } from "@testing-library/react"
import test from "node:test";
import Greeting from "./Greeting"

describe('<Greeting />', () => {
  test('Renders Hello World', () => {
    render(<Greeting/>);
    const hw = screen.getByText("Hello World");
    expect(hw).toBeInTheDocument();
  })

  test('Change Text Is False', () => {
    render(<Greeting />)
    const changedTextIsFalse = screen.getByText(/It's good to see you/i)
  })
})
