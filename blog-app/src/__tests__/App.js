import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("On change event testing", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, {target: {value:'a'}});
  expect(input.value).toBe("atest");
})

test("On click event testing", () => {
  render(<App />)
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
})