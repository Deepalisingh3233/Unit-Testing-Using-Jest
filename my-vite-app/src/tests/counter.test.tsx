import { render, screen, fireEvent } from '@testing-library/react';
import React = require('react');
import App from '../App';

test('increments count on button click', () => {
  render(<App />);
  const button = screen.getByTestId('increment');
  fireEvent.click(button);
  expect(button).toHaveTextContent('Count: 1');
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