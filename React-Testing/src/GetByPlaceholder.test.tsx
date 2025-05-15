import { render, screen } from "@testing-library/react"
import GetByPlaceholder from "./GetByPlaceholder"


// test("GetByPlacholder testCase", () => {
//     render(<GetByPlaceholder />)
//     const input = screen.getByPlaceholderText("Enter username");
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue("Deepali");
// })

test("GetAllByPlacholder testCase", () => {
    render(<GetByPlaceholder />)
    const inputs = screen.getAllByPlaceholderText("Enter username");
    
    for (let i = 0; i < inputs.length; i++) {
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("Deepali");        
    }
})