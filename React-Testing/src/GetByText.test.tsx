import { render, screen } from "@testing-library/react"
import GetByText from "./GetByText"


test("Single button testing", () => {
    render(<GetByText />)
    const btn = screen.getByText("Login");
    expect(btn).toBeInTheDocument();
})

test("Single p tag testing", () => {
    render(<GetByText />)
    const pTag = screen.getByText("P Tag Testing");
    expect(pTag).toBeInTheDocument();
    expect(pTag).toHaveClass("paraStyle");
    expect(pTag).toHaveAttribute("id");
})

test.skip("Single h1 tag testing", () => {
    render(<GetByText />)
    const h1Tag = screen.getByText("Heading Tag");
    expect(h1Tag).toBeInTheDocument();
})

test("Multiple h1 tag testing", () => {
    render(<GetByText />)
    const h1Tag = screen.getAllByText("Heading Tag");
    expect(h1Tag[1]).toBeInTheDocument();
    for (let i = 0; i < h1Tag.length; i++) {
        expect(h1Tag[i]).toBeInTheDocument(); 
    }
})