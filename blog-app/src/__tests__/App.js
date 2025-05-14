import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import Users from "../User";
import renderer from 'react-test-renderer'
import handleOtherMethod from "../helper";

// test("On change event testing", () => {
//   render(<App />);
//   let input = screen.getByRole("textbox");
//   fireEvent.change(input, {target: {value:'a'}});
//   expect(input.value).toBe("atest");
// })

// test("On click event testing", () => {
//   render(<App />)
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("updated data")).toBeInTheDocument();
// })

test("Method testing case 1", () => {
  render(<App />)
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("Hello")).toBeInTheDocument();
})

test("Method testing case 2", () => {
  expect(handleOtherMethod()).toMatch("hi");
})