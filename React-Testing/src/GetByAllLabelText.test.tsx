import { render, screen } from "@testing-library/react"
import GetAllByLabelText from "./GetByAllLabelText"


test("input test case", () => {
    render(<GetAllByLabelText />);
    const inputs = screen.getAllByLabelText("Username");
    for (let i = 0; i < inputs.length; i++) {
     expect(inputs[i]).toBeInTheDocument();
     expect(inputs[i]).toHaveValue("Deepali");
    }
})

test("Checkbox test case", () => {
    render(<GetAllByLabelText />);
    const checkbox = screen.getAllByLabelText("Skills");
    for (let i = 0; i < checkbox.length; i++) {
     expect(checkbox[i]).toBeInTheDocument();
     expect(checkbox[i]).toBeChecked();
    }
})