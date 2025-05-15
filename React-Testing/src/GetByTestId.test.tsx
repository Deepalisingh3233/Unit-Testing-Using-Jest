import { render, screen } from "@testing-library/react"
import GetByTestId from "./GetByTestId"


test("Testing with test-id", () => {
    render(<GetByTestId />)
    // const divId = screen.getByTestId("div-test-id");
    const divId = screen.getAllByTestId("div-test-id");
    expect(divId[1]).toBeInTheDocument();
    for (let i = 0; i < divId.length; i++) {
        expect(divId[i]).toBeInTheDocument();        
    }
})

test("Testing h2 with test-id", () => {
    render(<GetByTestId />)
    const h2Id = screen.getByTestId("h1-test-id");
    expect(h2Id).toBeInTheDocument();
})