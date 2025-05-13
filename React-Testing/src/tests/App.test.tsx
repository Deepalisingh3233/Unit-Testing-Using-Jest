import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

describe("Validate the UI", () => {

test("Check the username", () => {
  render(<App/>);
  const text = screen.getByText("Ankita Bajpai");
  expect(text).toBeInTheDocument();
})

test("Check that button is present", () => {
  render(<App />)
  const btn = screen.getByRole("button", {name: "Click Me!"});
  expect(btn).toBeInTheDocument();
})

test("Check that button is clickable or not", () => {
  render(<App />)
  const btn = screen.getByRole("button", {name: "Click Me!"});
  fireEvent.click(btn);
})

});


describe("Validate the input field", () => {
  test("Input box is present or not", () => {
    render(<App />)
    const inputBox = screen.queryByRole("textbox")
    expect(inputBox).toBeInTheDocument();
  })

  it("On click event testing", () => {
  render(<App />) 
  let input = screen.getByPlaceholderText("Type something...");
  const button = screen.getByRole('button', { name: "Show Text" })

  fireEvent.change(input, { target: { value: 'Hello World' } })
  fireEvent.click(button)

  const output = screen.getByTestId('output')
  expect(output).toHaveTextContent('Hello World')
})

})