import { render, screen } from "@testing-library/react"
import TextMatchUsingRegex from "./TextMatchUsingRegex"


test("Text Match with String", () => {
    render(<TextMatchUsingRegex/>)
    // const div = screen.getByText("Hello World", {exact:false});
    // const div = screen.getByText("hello World", {exact:false});
    const div = screen.getByText("hello", {exact:false});
    expect(div).toBeInTheDocument();
})

test("Text Match with Regex", () => {
    render(<TextMatchUsingRegex />)
    // const div = screen.getByText(/Hello World/);
    // const div = screen.getByText(/lo Wo/);
    // const div = screen.getByText(/hello/i);
    const div = screen.getByText(/Hello w?orld/i);
    expect(div).toBeInTheDocument();
})