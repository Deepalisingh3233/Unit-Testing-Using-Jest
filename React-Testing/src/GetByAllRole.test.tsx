import { render, screen } from "@testing-library/react"
import GetByAllRole from "./GetByAllRole"


test("Test getAllByRole", () => {
    render(<GetByAllRole />)
    const btns = screen.getAllByRole("button");
    const options = screen.getAllByRole("option");

    // expect(btns[1]).toBeInTheDocument();
    for(let i=0; i<btns.length; i++){
        expect(btns[i]).toBeInTheDocument();
    }
    for(let i=0; i<options.length; i++){
        expect(options[i]).toBeInTheDocument();
    }
})