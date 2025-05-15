import { render, screen } from "@testing-library/react"
import GetByLabelText from "./GetByLabelText";


test("GetByLabelText test case 1", () => {
    render(<GetByLabelText />)
    const  input = screen.getByLabelText("Username");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Deepali");
})


test("GetByLabelText testcase 2", () => {
    render(<GetByLabelText />)
    const  checkbox = screen.getByLabelText("Skills");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
})