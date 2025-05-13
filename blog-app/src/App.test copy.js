import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test first React app", ()=> {
  render(<App />)
  const text = screen.getByText(/First React Test Case/i);
  const text2 = screen.getByText("Deepali Singh");
  const title = screen.getByTitle("Beautiful girl in the park");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(text2).toBeInTheDocument();

});

test("Testing input box", ()=> {
  render(<App/>)
  let checkInput  = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("Enter user name");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","userID");
  expect(checkInput).toHaveAttribute("type","text");
  expect(checkInput).toHaveAttribute("value","Deepali Singh")

});

describe.skip("UI Testcase Group", () => {

  test("Testcase 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username");
  })

  test("Testcase 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username");
  })
  test("Testcase 3", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username");
  })
})

describe("API Testcase Group", () => {

  test("API Testcase 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username");
  })

  test("API Testcase 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username");
  })
  test("API Testcase 3", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name","username");
  })

  describe("Inner Describe Test", () => {
    test("API Testcase 3", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name","username");
    })
  })
})