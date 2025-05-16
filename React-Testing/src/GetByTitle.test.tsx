import { render, screen } from "@testing-library/react"
import GetByTitle from "./GetByTitle"


test("Button testing with title attribute", () => {
    render(<GetByTitle />)
    const btn = screen.getByTitle("Click Me");
    expect(btn).toBeInTheDocument();
})

test("Span testing with title attribute", () => {
    render(<GetByTitle />)
    const span = screen.getAllByTitle("black spade suit");
    // expect(btn).toBeInTheDocument();
    for (let i = 0; i < span.length; i++) {
        expect(span[i]).toBeInTheDocument();
    }
})