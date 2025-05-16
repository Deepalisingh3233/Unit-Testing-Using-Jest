import { render, screen } from "@testing-library/react"
import Assertion from "./Assertion"


test("Test input", () => {
  render(<Assertion />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument(); 
  expect(input).toHaveValue();
  expect(input).toHaveValue("Ritesh");
  expect(input).toBeEnabled();
  // expect(input).toBeDisabled();
  expect(input).toHaveAttribute("id");
  expect(input).toHaveAttribute("data-test");
  expect(input).toHaveClass("test-style");
  expect(input).toHaveClass("dummy");
})

test("Test negative cases", () => {
  render(<Assertion />)
  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
  expect(btn).not.toHaveClass("btn1");
  expect(btn).not.toHaveAttribute("id1");
  expect(btn).not.toBeEnabled();
})